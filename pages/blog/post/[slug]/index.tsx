export const fl = 1;
// type Props = {
//   params: {
//     slug: string;
//   };
// };

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { groq } from "next-sanity";
// import { useRouter } from "next/router";
// import { client } from "../../../../sanity/lib/client";
// import urlFor from "../../../../sanity/lib/UrlFor";
// import { Post } from "../../../../typins";

// async function fetchPost(slug: string): Promise<Post> {
//   const query = groq`
//     *[_type=='post'&&slug.current==$slug][0]{
//       ...,
//       author->,
//       categories[]->
//     }
//   `;
//   const post: Post = await client.fetch(query, { slug });
//   return post;
// }

// const Post = ({ params: { slug } }: Props) => {
//   const [post, setPost] = useState<Post | null>(null);

//   useEffect(() => {
//     const fetchPostData = async () => {
//       const postData = await fetchPost(slug);
//       setPost(postData);
//     };

//     fetchPostData();
//   }, [slug]);
//   // const [post, setPost] = useState(null);

//   // useEffect(() => {
//   //   const fetchPost = async () => {
//   //     try {
//   //       const fetchedPost = await client.fetch(query, { slug });
//   //       setPost(fetchedPost);
//   //       console.log(slug);
//   //     } catch (error) {
//   //       console.error("Error fetching post:", error);
//   //     }
//   //   };

//   //   fetchPost();
//   // }, [query, slug]);

//   return (
//     <article>
//       <section>
//         <div>
//           <div>
//             {/* <Image src={urlFor(post.mainImage).url()} layout="fill" /> */}
//           </div>
//           <p>{slug}</p>
//         </div>
//       </section>
//     </article>
//   );
// };

// export default Post;
