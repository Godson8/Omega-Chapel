"use client";

import { usePreview } from "../../../sanity/lib/preview";
import BlogList from "../BlogList/BlogList";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);
  // console.log("Loading posts...", posts);
  return <BlogList posts={posts} />;
}
