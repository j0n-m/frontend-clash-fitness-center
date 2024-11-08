import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

function WhoWeAreSection() {
  return (
    <section className="whoweare-section p-[--page-padding]">
      <div className="flex justify-center">
        <div className="title-bg min-w-[200px] h-[40px]">
          <h3 className="text-center text-lg font-bold text-white-primary">
            Who we are
          </h3>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-3xl lg:text-4xl text-center my-5">
          Take Your Health And Body To The Next Level
        </h2>
        <p className="text-gray-600 text-base text-center">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
      </div>
      <div className="my-10 flex flex-col lg:flex-row justify-center items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-500">
        <div className="personal-trainer-card grid place-items-center w-full gap-3 px-8 py-10">
          <div>
            <span className="block size-16 weights2-icon"></span>
          </div>
          <h3 className="font-bold text-lg text-center">Personal Trainers</h3>
        </div>
        <div className="modern-equipment-card grid place-items-center w-full gap-3 px-7 py-10">
          <div>
            <span className="block size-16 trainer-icon"></span>
          </div>
          <h3 className="font-bold text-lg text-center">Modern Equipment</h3>
        </div>
        <div className="personal-trainer-card grid place-items-center w-full gap-3 px-7 py-10">
          <div>
            <span className="block size-16 staff-icon"></span>
          </div>
          <h3 className="font-bold text-lg text-center">Friendly Staff</h3>
        </div>
      </div>
      <div className="text-center mt-16">
        <Link
          to="/classes"
          className="bg-gray-primary px-10 py-6 inline-flex items-center justify-center gap-1 hover:bg-red-primary focus-visible:bg-red-primary transition-colors duration-300"
        >
          <span className="uppercase font-bold text-lg text-white-primary">
            Take a Tour
          </span>
          <ArrowRightIcon className="size-5 fill-white-primary"></ArrowRightIcon>
        </Link>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
