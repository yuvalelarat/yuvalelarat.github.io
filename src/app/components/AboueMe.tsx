export default function AboutMe() {
    return (
         <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
              <p className="mb-4">Versatile and detail-oriented Software Developer with hands-on experience in building scalable web and mobile applications. Proficient in modern technologies including JavaScript, TypeScript, React, Node.js, and cloud platforms like AWS. Strong background in full-stack development, microservices architecture, performance optimization, and working in agile, CI/CD-driven environments. Adept at collaborating in cross-functional teams to deliver high-quality, user-focused solutions.
              </p>
              <p>
                In my spare time, I usually coding, playing video games, expanding my knowledge about technology, hanging out with my friends, or going to the gym.
              </p>
            </div>
          </section>
    );
}