import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import getPageData, { PageData } from "@/helpers/getData";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";

export default function Home({
  socials,
  pageInfo,
  skills,
  projects,
  featuredProjects,
}: PageData) {
  const { ref: footerRef, inView: hasFullyScrolled } = useInView();

  // TODO: Section Indicator
  //TODO: If horizontal scrollable container switch scroll to horizontal
  // TODO: Maybe Animate Title and Subtitles

  return (
    <>
      <Header socials={socials} email={pageInfo.email} />

      <main>
        <section id="hero" className="snap-start snap-always">
          <Hero
            heroTexts={pageInfo.heroTexts}
            role={pageInfo.role}
            resume={pageInfo.resume}
          />
        </section>
        <section id="about" className="snap-start">
          <About
            aboutText={pageInfo.about}
            imageUrl={pageInfo.profilePicture}
          />
        </section>

        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        <section id="projects" className="snap-start">
          <FeaturedProjects projects={featuredProjects} />
        </section>
      </main>

      <footer
        ref={footerRef}
        className="z-10 py-5 text-sm text-center text-dracula-light-50 bg-dracula-darker snap-start snap-always "
      >
        Built with ❤️ using Next.js, Firebase, TailwindCSS & Framer Motion.
      </footer>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <ChevronDownIcon
          className={`fixed bottom-0 left-3 right-0 flex justify-center mb-5 animate-bounce h-10 w-10 text-dracula-darker-50 transition-all duration-500 ease-in-out    ${
            hasFullyScrolled ? "opacity-0" : "opacity-75"
          } md:left-1/2 md:transform md:-translate-x-1/2`}
        />
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  // const socials = await getSocials();
  // const pageInfo = await getPageInfo();
  // const skills = await getSkills();
  // const projects = await getProjects();
  const data = await getPageData();

  return {
    props: {
      ...data,
      // socials,
      // pageInfo,
      // skills,
      // projects,
    },
    revalidate: 7200,
  };
}
