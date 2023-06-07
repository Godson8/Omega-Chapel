import Head from "next/head";
import BlogNavBar from "../../components/Blog/BlogNavBar/BlogNavBar";
import Footer from "../../components/Footer/Footer";

type BlogLayoutProps = {
  children: React.ReactNode;
  title?: string;
  image?: string;
};

const BlogLayout = ({ children, title, image }: BlogLayoutProps) => {
  return (
    <div className="bg-[#F3F3F3] ">
      <Head>
        <title>{`Omega Chapel - Blog - ${title ? title : ""}`}</title>
        <meta name="description" content="Omega Chapel - Welcome Home -" />
        <link rel="icon" href="/logo.png" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={`Omega Chapel - Blog - ${title}`} />
        <meta
          property="og:description"
          content="Omega Chapel - Welcome Home -"
        />
        <meta property="og:image" content={image} />
        {/* Add more relevant Open Graph tags as needed */}
      </Head>
      <BlogNavBar />

      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
