import "swiper/css/grid";
import "swiper/css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import BlogLayout from "./blog/blogLayout";

function MyApp({ Component, pageProps, router }: AppProps) {
  const isMainBlogPage = router.pathname === "/blog";
  const isDynamicURL = router.route === "/studio/[[...index]]";
  const isBlogPost = router.pathname.startsWith("/blog/post");
  const isThankYouPage = router.pathname === "/thank-you";

  if (isDynamicURL || isBlogPost || isThankYouPage) {
    return <Component {...pageProps} />;
  } else if (isMainBlogPage) {
    return (
      <BlogLayout>
        <Component {...pageProps} />
      </BlogLayout>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
