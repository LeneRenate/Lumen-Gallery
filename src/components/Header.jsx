import { Link } from "react-router-dom";
import styles from "../styles/component style/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={`flex flex-row justify-evenly`}>
        <Link to="/" className="brandLogo">
          <img className="LumenIcon" src="" alt="logo" />
          <img className="LumenName" src="" alt="LUMEN" />
        </Link>
        <div className={`flex flex-col justify-evenly`}>
          <div className={`flex flex-row justify-end ${styles.upperRow}`}>
            <label className={`${styles.themeToggle}`}>
              <input type="checkbox" className={`${styles.themeToggleInput}`} />
              <span className={`${styles.themeToggleSlider}`} />
            </label>
            {/* <label className={`${styles.languageSelect}`}>
              <input type="" name="" id="" />
            </label> */}
          </div>
          <div className={`${styles.lowerRow}`}>
            <nav className={`${styles.navbar}`}>
              <ul className={`flex flex-row ${styles.navList}`}>
                <li className={`${styles.listElement}`}>
                  <Link to="/">Home</Link>
                </li>
                <li className={`${styles.listElement}`}>
                  <Link to="whats-on">What's on</Link>
                </li>
                <li className={`${styles.listElement}`}>
                  <Link to="visit">Visit</Link>
                </li>
                <li className={`${styles.listElement}`}>
                  <Link to="contact">Contact Us</Link>
                </li>
                <li className={`${styles.listElement}`}>
                  <Link to="about">About</Link>
                </li>
                {/* "Us" on contact..? */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
