import { useEffect } from "react";
import { Footer, Navbar } from "../components";
import { smoothScroll } from "../libs/smooth-scroll";
import "../styles/globals.css";
import "../styles/nav.scss";
import "../styles/root.scss";
import "../styles/body.scss";
import "../styles/about.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smoothScroll();
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
