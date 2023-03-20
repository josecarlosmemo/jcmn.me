import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
// import WorkExperience from "@/components/sections/WorkExperience";
import Skills from "@/components/sections/Skills";
// import Projects from "@/components/sections/Projects";
// import ContactMe from "@/components/sections/ContactMe";
// import Link from "next/link";
// import AnimatedLogo from "@/components/AnimatedLogo";
import getSocials from "@/helpers/getSocials";
import { Social, PageInfo } from "@/typings";
import getPageInfo from "@/helpers/getPageInfo";

// const inter = Inter({ subsets: ["latin"] });

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

export default function Home({ socials, pageInfo }: Props) {
  return (
    <>
      <Head>
        <title>JCMN | José Carlos Martínez Núñez</title>
        <meta
          name="description"
          content="This is my personal Portfolio Site."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/assets/favicon/safari-pinned-tab.svg"
          color="#282a36"
        />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#282a36" />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="bg-dracula-darker text-dracula-light-50 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-dracula-pink/80 scroll-smooth">
        <Header socials={socials} email={pageInfo.email} />

        {/* TODO: Readable text, max chars per para */}
        {/* TODO: Make it english and spanish */}

        <section id="hero" className="snap-start">
          <Hero
            heroTexts={pageInfo.heroTexts}
            role={pageInfo.role}
            resume={pageInfo.resume}
          />
        </section>

        <section id="about" className="snap-center">
          <About
            aboutText={pageInfo.about}
            imageUrl={pageInfo.profilePicture}
          />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <footer className="text-center text-sm text-dracula-light-50 py-5 bg-dracula-darker z-10 snap-start">
          Built with ❤️ using Next.js, Firebase, TailwindCSS & Framer Motion.
        </footer>

        {/* <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
       
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe />
        </section> */}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const socials = await getSocials();
  const pageInfo = await getPageInfo();

  return {
    props: {
      socials,
      pageInfo,
    },
    revalidate: 7200,
  };
}
