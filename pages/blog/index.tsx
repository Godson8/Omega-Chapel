import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import PreviewSuspense from "../../components/Blog/PreviewSuspense/PreviewSuspense";
import PreviewBlogList from "../../components/Blog/PreviewBlogList/PreviewBlogList";

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const blog = ({ preview }: any) => {
  // if (preview) {
  return (
    <PreviewSuspense
      fallback={
        <div>
          <p className="text-center text-lg">Loading Articles...</p>
        </div>
      }
    >
      <PreviewBlogList query={query} />
    </PreviewSuspense>
  );
  // }
  // return <>Not in preview mode</>;
};

export async function getStaticProps(context: any) {
  const preview = context.preview || false;
  // Additional code for fetching blog data
  const posts = await client.fetch(query);
  // console.log(posts);
  return {
    props: {
      preview,
    },
  };
}

export default blog;
