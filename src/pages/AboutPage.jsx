export default function AboutPage() {
  return (
    <>
      <section>
        <h1>LUMEN</h1>
      </section>
      <section id="contact">
        <h2>Contact us</h2>
      </section>
    </>
  );
}

// Note: If the auto-scroll doesn't work reliably when navigating from other pages, you may need to add a useEffect hook in AboutPage.jsx to manually scroll to the hash location after the component mounts.
