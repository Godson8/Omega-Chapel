import { GetStaticProps } from "next";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import urlFor from "../../../sanity/lib/UrlFor";
import { Post } from "../../../typins";
import { PortableText } from "@portabletext/react";
import RichTextComponents from "../../../components/Blog/RichTextComponents/RichTextComponents";
import Banner from "../../../components/Blog/Banner/Banner";
import Share from "../../../components/Blog/Share/Share";
import Layout from "../../../components/Layout/Layout";
import BlogLayout from "../blogLayout";
import { BsDot } from "react-icons/bs";

type Props = {
  post: Post;
};

const Post = ({ post }: Props) => {
  //   console.log(post);
  return (
    <BlogLayout title={post.title} image={urlFor(post.mainImage).url()}>
      <article className="container">
        <section>
          <div className="space-y-8 md:space-y-14 mt-6 md:mt-14">
            <h1 className="text-3xl font-bold md:text-5xl text-center max-w-2xl mx-auto ">
              {post.title}
            </h1>
            <div>
              <div className="flex items-center space-x-2 justify-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 relative">
                    <Image
                      src={urlFor(post.author.image).url()}
                      layout="fill"
                      className="rounded-full"
                      alt={post.author.name}
                    />
                  </div>
                  <p className="font-extrabold text-sm">
                    Written by {post.author.name}
                  </p>
                </div>
                <BsDot size={20} />
                <div>
                  <p className="text-sm">
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div>
                <p>{}</p>
              </div>
            </div>
            <div className="relative w-full h-48 md:h-80">
              <Image
                src={urlFor(post.mainImage).url()}
                layout="fill"
                className="object-cover object-center mx-auto rounded-xl"
                alt={post.title}
              />
            </div>
          </div>
        </section>
        <PortableText value={post.body} components={RichTextComponents} />
        <div className="mt-10 grid border-dashed border-t-[1px] border-primary border-opacity-25">
          <Banner negHeight={false} noBg={true} />
          <Share title={post.slug.current} />
        </div>
      </article>
    </BlogLayout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type=='post']{
        _id,
        slug{
            current
        }
      }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type=='post'&&slug.current==$slug][0]{
        ...,
        author->,
        categories[]->
      }`;

  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
