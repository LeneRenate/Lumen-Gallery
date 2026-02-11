import { galleryInfo } from "../data/galleryInfo";
import styles from "../styles/page style/VisitPage.module.css";
import entranceImage from "../assets/entranceLumen.webp";
import insideImage from "../assets/insideLumen.webp";

export default function VisitPage() {
  const { personalItems, photography, touchingArt, children, foodDrink } =
    galleryInfo.additionalNotes;

  return (
    <>
      <h1 className={`my-6 ml-8 ${styles.visitHeading}`}>Where to find us</h1>

      {/* Info Grid */}
      <section className={` ${styles.visitGrid}`}>
        {/* Basic info -  grid-area: info*/}
        <section className={`flex flex-col gap-4 pl-6 ${styles.visitInfo}`}>
          <article className={`${styles.visitInfoElement}`}>
            <h2>Opening Hours</h2>
            {/* Make into grid? Day col 1, Hours col 2
             */}
            {Object.entries(galleryInfo.openingHours).map(([day, hours]) => (
              <p key={day}>
                {day}: {hours}
              </p>
            ))}
          </article>

          <article className={`${styles.visitInfoElement}`}>
            <h2>Admission</h2>
            <p>{galleryInfo.admission}</p>
          </article>

          <article className={`${styles.visitInfoElement}`}>
            <h2>Accessibility</h2>
            {galleryInfo.accessibility.map((info, index) => (
              <p key={index}>{info}</p>
            ))}
          </article>
        </section>

        {/* Pic from the gallery - Entrance?
        grid-area: entranceImg*/}
        <figure className={`${styles.visitEntranceImg}`}>
          <img src={entranceImage} alt="Our entrance" className={`h-full`} />
        </figure>

        {/* Map to Lumen / img
        grid-area: map */}
        <figure
          className={`flex justify-center items-center ${styles.visitMap}`}
        >
          <img
            src={galleryInfo.map}
            alt="map showing the location of Lumen in York"
            title="Go to full screen map"
            className={`max-w-lg h-auto ${styles.visitMapImg}`}
          />
        </figure>

        {/* Address and directions
        grid-area: address */}
        <address className={`pt-10 pr-10 pl-4 ${styles.visitAddress}`}>
          <h2>Where to find us</h2>
          {Object.entries(galleryInfo.address)
            .filter(([key]) => key !== "country")
            .map(([key, value], index) => (
              <p key={index}>{value}</p>
            ))}
          <br />
          <h2>How to find us</h2>
          {Object.entries(galleryInfo.transport).map(([mean, how]) => (
            <p key={mean} className={`mb-4`}>
              By {mean}:
              <br />
              {how}
            </p>
          ))}
        </address>

        {/* Additional notes
        grid-area: notes */}
        <section className={`pt-10 pr-4 pl-6 ${styles.visitNotes}`}>
          <h2 className={`mb-2`}>Additional notes:</h2>
          {/* Activate as needed */}
          <p>{personalItems}</p>
          <p>{photography}</p>
          <p>{touchingArt}</p>
          <p>{children}</p>
          <p>{foodDrink}</p>
        </section>

        {/* Pic from inside the gallery?
        grid-area:  insideImg*/}
        <figure>
          <img
            src={insideImage}
            alt="From inside the gallery"
            className={`${styles.visitInsidemg}`}
          />
        </figure>
      </section>
    </>
  );
}
