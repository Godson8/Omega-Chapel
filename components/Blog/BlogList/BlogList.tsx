import Image from "next/image";
import urlFor from "../../../sanity/lib/UrlFor";
import { Post } from "../../../typins";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log(posts.length);
  return (
    <div className="font-primary container mt-5 md:mt-20">
      <div className="flex justify-between items-center">
        <h1 className="font-primary text-lg md:text-3xl font-bold">
          Most Recent Articles
        </h1>
        <div>
          <p className="text-sm md:text-xl text-secondary font-bold">
            All Articles
          </p>
        </div>
      </div>
      <hr className="mt-3 border-primary border-opacity-10" />
      <div>
        <div></div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <div key={post._id}>
              <div className="relative h-80">
                <Image
                  className="object-cover object-top"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  layout="fill"
                />
              </div>
              <h1>{post.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
