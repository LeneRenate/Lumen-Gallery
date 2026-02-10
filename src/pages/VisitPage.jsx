import { galleryInfo } from "../data/galleryInfo";
import styles from "../styles/page style/VisitPage.module.css";
import entranceImage from "../assets/EntranceLumen.png";

export default function VisitPage() {
  const { personalItems, photography, touchingArt, children, foodDrink } =
    galleryInfo.additionalNotes;

  return (
    <>
      <h1 className={`my-6 ml-8 ${styles.visitHeading}`}>Where to find us</h1>

      <section className={`w-9/10 grid grid-cols-2 ${styles.visitGrid}`}>
        <section className={`flex flex-col gap-4 ${styles.visitInfo}`}>
          <article className={`${styles.visitInfoElement}`}>
            <h2>Opening Hours</h2>
            {/* Make into grid? Day col 1, Hours col 2 */}
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

        <figure className={`${styles.visitImg}`}>
          <img src={entranceImage} alt="Our entrance" className={`h-full`} />
        </figure>

        <figure className={`max-w-lg h-auto ${styles.visitMap}`}>
          <img
            src={galleryInfo.map}
            alt="map showing the location of Lumen in York"
            title="Go to full screen map"
          />
        </figure>

        <address className={`${styles.visitAddress}`}>
          <p>Where to find us:</p>
          {Object.entries(galleryInfo.address)
            .filter(([key]) => key !== "country")
            .map(([key, value], index) => (
              <p key={index}>{value}</p>
            ))}
          <br />
          {Object.entries(galleryInfo.transport).map(([mean, how]) => (
            <p key={mean} className={`mb-2`}>
              By {mean}:
              <br />
              {how}
            </p>
          ))}
        </address>

        <section className={`${styles.visitNotes}`}>
          <p>Additional notes:</p>
          {/* Activate as needed */}
          <p>{personalItems}</p>
          <p>{photography}</p>
          <p>{touchingArt}</p>
          <p>{children}</p>
          <p>{foodDrink}</p>
        </section>
      </section>
    </>
  );
}
