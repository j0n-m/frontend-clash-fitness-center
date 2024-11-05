import { Link } from "@tanstack/react-router";

function HeroSection() {
  return (
    <section className="hero bg-black-primary min-h-svh" id="hero">
      <div
        className={`hero-content text-white-primary min-h-svh relative max-w-[1200px] mx-auto overflow-hidden`}
      >
        <div className="absolute w-max bottom-20 right-[50%] translate-x-[50%] lg:bottom-[50%] lg:right-8 lg:translate-x-0 lg:translate-y-[50%]">
          <p className="uppercase text-3xl font-bold lg:text-5xl">
            Make your body
          </p>
          <p className="uppercase text-3xl lg:text-5xl mt-2 text-center">
            Fit & Strong
          </p>
          <div className="link-to-classes relative z-0 mt-6 lg:mt-10 flex justify-center">
            <Link className="bg-white-primary join-us-btn select-none text-black-primary py-4 px-8 font-bold hover:bg-white-dim1 focus-visible:bg-white-dim1">
              Our Classes
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="hero-content-img min-h-[600px] lg:min-h-svh"></div>
        </div>
        <div className="lg:hidden">
          <div className="hero-content-img-sm min-h-[600px]"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
