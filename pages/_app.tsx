import "swiper/css/grid";
import "swiper/css";
// import "swiper/css/bundle";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import BlogLayout from "./blog/blogLayout";

function MyApp({ Component, pageProps, router }: AppProps) {
  // Check if the current page is the one you want to exclude from the layout

  const excludedPaths = ["/blog"];
  const isDynamicURL = router.route === "/studio/[[...index]]";
  // const excludeFromLayout =
  //   isDynamicURL || excludedPaths.includes(router.pathname);

  // Render the page without the layout if it's excluded
  if (isDynamicURL) {
    return <Component {...pageProps} />;
  } else if (excludedPaths.includes(router.pathname)) {
    return (
      <BlogLayout>
        <Component {...pageProps} />
      </BlogLayout>
    );
  }

  // Render the page with the layout for other pages
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
