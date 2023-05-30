import Head from "next/head";
import BlogNavBar from "../../components/Blog/BlogNavBar/BlogNavBar";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F3F3F3] ">
      <Head>
        <title>Omega Chapel - Blog -</title>
        <meta name="description" content="Omega Chapel - Welcome Home -" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <BlogNavBar />
      <div className="container mt-5 md:mt-20">{children}</div>
    </div>
  );
};

export default BlogLayout;
