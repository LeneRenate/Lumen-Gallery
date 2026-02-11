import { Link } from "react-router-dom";
import styles from "../styles/component style/Header.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <>
      <header className={`flex flex-row justify-around items-center p-2`}>
        <div>
          <Link to="/" className="logoLink">
            <div className={`h-7/10 w-60 ${styles.logoWrapper}`}>
              <img className="brandLogo" src="" alt="LUMEN" />
              {/* <img className="LumenIcon" src="" alt="logo" />
          <img className="LumenName" src="" alt="LUMEN" /> */}
            </div>
          </Link>
        </div>

        <div className={`flex flex-col-reverse justify-around w-6/11`}>
          <div className={`flex flex-row`}>
            <nav className={`${styles.navbar}`}>
              <ul className={`flex flex-row mx-4 ${styles.navList}`}>
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
                  <Link to="about#contact">Contact Us</Link>
                </li>
                <li className={`${styles.listElement}`}>
                  <Link to="about">About</Link>
                </li>
                {/* "Us" on contact..? */}
              </ul>
            </nav>
          </div>

          <div className={`flex justify-end`}>
            <ThemeToggle />
            {/* <label className={`${styles.languageSelect}`}>
              <input type="" name="" id="" />
            </label> */}
          </div>
        </div>
      </header>
    </>
  );
}
