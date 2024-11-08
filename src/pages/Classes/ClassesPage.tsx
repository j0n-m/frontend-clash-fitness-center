import { UserIcon } from "@heroicons/react/16/solid";
import LandingHeader from "../../components/LandingHeader";
import allClasses from "../../utils/allClasses";
import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

function ClassesPage() {
  return (
    <section>
      <Helmet>
        <title>Clash Fitness Center | Classes</title>
      </Helmet>
      <LandingHeader text="Our Classes" />
      <div className="content px-4 md:px-10 lg:px-[--page-padding] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center mx-auto max-w-[2000px] gap-4">
          {allClasses.map((c) => {
            return (
              <div
                key={c.id}
                className="all-class-card max-w-[500px] mx-auto rounded-lg relative"
              >
                <div
                  className={`after:content-[""] after:absolute after:inset-0 overflow-hidden`}
                >
                  <img
                    src={c.img_src}
                    alt={c.img_alt}
                    className="object-cover w-full h-full aspect-square rounded-lg"
                  />
                  <h3
                    className={`card-label absolute font-bold text-3xl left-4 bottom-20 text-white after:absolute after:content-[""] after:left-0 after:bottom-0 after:h-1 after:w-1/3 after:bg-red-primary after:translate-y-1 transition-all duration-[400ms] after:transition-all after:duration-[400ms] bg-[rgba(0,0,0,.3)] w-max rounded-md`}
                  >
                    {c.label}
                  </h3>
                  <div className="instructor-info-card absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,.4)] py-3 text-white opacity-0 transition-all duration-[400ms]">
                    <p className="flex gap-1 justify-center relative">
                      <span className="text-xs text-gray-300 absolute top-[-12px] left-[50%] translate-x-[-50%]">
                        Instructor
                      </span>
                      <span>
                        <UserIcon className="size-5"></UserIcon>
                      </span>
                      <span>{c.instructor.name}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn-container flex justify-center my-20">
          <Link
            to="/schedule"
            search={{ week: -1 }}
            className="inline-flex bg-gray-primary text-white py-4 font-bold px-6 rounded-lg"
          >
            Schedule a class now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ClassesPage;
