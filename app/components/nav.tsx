"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "next-themes";

export default function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
console.log(currentTheme);
  return (
    <nav className="flex flex-row justify-end">
      <ol className="flex items-center space-x-4">
        {/* <li>Home</li>
        <li>About</li>
        <li>Contact</li> */}
        <li>
          <button
            onClick={() =>
              currentTheme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className="w-8 h-8"
          >
            {
              <>
                <FontAwesomeIcon
                  className="fa-lg"
                  icon={currentTheme == "dark" ? faMoon : faSun}
                  title="Toggle Light/Dark Mode"
                  aria-label={currentTheme}
                />
              </>
            }
          </button>
        </li>
      </ol>
    </nav>
  );
}
