"use client";
import { ThemeProvider } from "next-themes";
import Footer from "./components/footer";
import Nav from "./components/nav";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="flex min-h-screen flex-col p-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Nav />
        <main className="max-w-md mx-auto flex flex-col flex-grow justify-center md:max-w-2xl">
          <div className="flex flex-col flex-grow justify-center space-y-2">
            <h1 className="text-4xl font-bold tracking-wider">
              Hi, I'm Justin
            </h1>
            <p className="text-lg tracking-wide">
              <b>Software Engineer</b> currently working at <b>Chewy</b>
            </p>
            <a
              target="_blank"
              download="Justin-Chen_Resume.pdf"
              href="https://chen-justin.github.io/resume/resume.pdf"
            >
              Resume
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
