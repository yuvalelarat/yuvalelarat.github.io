import Header from "./layouts/header";
import Main from "./layouts/main";

// Server component on purpose: the Writing section reads content/writing at
// build time, which a client component can't do.
export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Main />
      </div>
    </div>
  );
}
