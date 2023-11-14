"use client";
import { ThemeProvider } from "next-themes";
import Footer from "./components/footer";
import Nav from "./components/nav";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="transition ease-in-out duration-300 flex min-h-screen flex-col p-8 bg-neutral-300 text-gray-900 dark:bg-stone-900 dark:text-white">
        <Nav />
        <main className="max-w-md mx-auto flex flex-col flex-grow justify-center md:max-w-2xl mb-8">
          <div className="flex flex-col flex-grow justify-center space-y-2">
            <h1 className="text-4xl font-bold tracking-wider">
              Hi, I&apos;m Justin
            </h1>
            <p className="text-lg tracking-wider">
              <b>Software Engineer</b> currently working at <b>Chewy</b> from <b>Boston, MA</b>.
            </p>
            <div className="flex flex-wrap py-4 space-x-6 justify-center">
              <a
                className="p-2 text-center border border-gray-900 dark:border-white border-4 flex-grow"
                target="_blank"
                download="Justin-Chen_Resume.pdf"
                href="https://chen-justin.github.io/resume/resume.pdf"
              >
                Resume
              </a>
              <a
                className="p-2 text-center border border-gray-900 dark:border-white border-4 flex-grow"
                href="mailto:chennickyjustin@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
