import React from "react";
import styles from "./ThemeChange.module.css";
import SunLogo from "../../images/components/Sun";
import MoonLogo from "../../images/components/Moon";

export default function ThemeChange() {
  const mode =
    window.localStorage.getItem("darkMode") === "true" ? true : false;

  const [darkMode, setDarkMode] = React.useState<boolean | string>(
    mode || false
  );

  const style = {
    right: darkMode ? "50%" : "4%",
  };

  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  React.useEffect(() => {
    window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button className={styles.mode__toggle} onClick={toggleTheme}>
      {darkMode ? (
        <MoonLogo className={styles.icon + " " + styles.moon} />
      ) : (
        <SunLogo className={styles.icon + " " + styles.sun} />
      )}
      <span style={style} className={styles.circle}></span>
    </button>
  );
}
