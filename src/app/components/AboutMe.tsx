import Section from "./Section";

export default function AboutMe() {
  return (
    <Section title="About" id="about" ariaLabel="About me">
      <div>
        <p className="mb-4">I&apos;m a software engineer who enjoys building systems that hold up under real-world load. I focus on distributed architectures, performance, and clean, maintainable code, and I care about shipping software that stays reliable long after it&apos;s deployed.
        </p>
        <p>
          In my spare time, I like to code, play video games, learn more about technology, hang out with friends, or go to the gym.
        </p>
      </div>
    </Section>
  );
}
