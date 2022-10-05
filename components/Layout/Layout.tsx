import Head from "next/head";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Omega Chapel - Welcome Home -</title>
        <meta name="description" content="Omega Chapel - Welcome Home -" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
