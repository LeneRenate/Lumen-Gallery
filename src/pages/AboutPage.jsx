import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { aboutLumen } from "../data/aboutLumen";
import styles from "../styles/page style/AboutPage.module.css";

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    // Looking for hash in URL
    if (location.hash) {
      // Delay to render page
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <section className={``}>
        <h1 className={`my-4 ml-8 ${styles.aboutHeading}`}>LUMEN</h1>
        {aboutLumen.map((a) => (
          <article className={`ml-16 mt-8 w-3/4 ${styles.aboutArticle}`}>
            <h2 className={`mb-2`}>{a.title}</h2>
            <p className={``}>{a.body}</p>
          </article>
        ))}
      </section>

      {/* ContactForm */}
      <section
        id="contact"
        className={`my-10 ml-16 p-4 rounded-sm ${styles.aboutContactForm}`}
      >
        <ContactForm />
      </section>
    </>
  );
}
