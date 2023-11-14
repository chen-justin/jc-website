"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "next-themes";

export default function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="flex flex-row justify-end">
      <ol className="flex items-center space-x-4">
        {/* <li>Home</li>
        <li>About</li>
        <li>Contact</li> */}
        <li>
          <button
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className="w-8 h-8"
          >
            {
              <>
                <FontAwesomeIcon
                  className="fa-lg"
                  icon={theme == "dark" ? faMoon : faSun}
                  title="Toggle Light/Dark Mode"
                  aria-label={theme}
                />
              </>
            }
          </button>
        </li>
      </ol>
    </nav>
  );
}
