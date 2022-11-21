import ButtonPrimary from "../buttons/ButtonPrimary";

const AboutMeContent = () => {
  return (
    <div className="relative md:col-span-2">
      <span className="pointer-events-none absolute top-[-60vw] left-0 right-0 bottom-[-6vw] z-[-1] bg-gradient-to-r from-cyan-900/10 via-teal-700/20 to-emerald-500/30  dark:from-purple-900/10 dark:via-fuchsia-700/20 dark:to-pink-500/30 blur-3xl filter sm:top-[-6vw] sm:right-[-7vw] sm:left-[-7vw]"></span>
      <p className="text-sm px-2 pb-6 xs:px-0 leading-loose s:text-base s:text-justify xl:text-xl">
        My name is <span className="font-semibold">Milica</span>, self-taught{" "}
        <span className="font-semibold ">fullstack developer</span> looking for
        a new role in an exciting company. I focus on Javascript language and
        its system of technologies. I have created with{" "}
        <span className="font-semibold">React/Next.js</span> on the frontend and
        with <span className="font-semibold">Node.js</span> on the backend. And
        I am also very interested in, and focused on{" "}
        <span className="font-semibold">Elixir</span> language with{" "}
        <span className="font-semibold">Phoenix</span> framework. I am based in
        Novi Sad, Serbia, but happy to work remotely as well. You can check out
        my portfolio page and blog page, where you can see what I am capable of
        in greater detail.
      </p>
      <ButtonPrimary route="/portfolio">projects</ButtonPrimary>
    </div>
  );
};

export default AboutMeContent;
