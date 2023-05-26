import Head from "next/head";
import BlogNavBar from "../../components/Blog/BlogNavBar/BlogNavBar";

const BlogLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Omega Chapel - Blog -</title>
        <meta name="description" content="Omega Chapel - Welcome Home -" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <BlogNavBar />
      {children}
    </>
  );
};

export default BlogLayout;
