import { Link } from "@tanstack/react-router";
import LandingHeader from "../LandingHeader";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <section className="max-w-[2400px] mx-auto">
      <Helmet>
        <title>Clash Fitness Center | About</title>
      </Helmet>
      <LandingHeader text="About Us" />
      <main className="my-20 px-4 md:px-[--page-padding]">
        <div className="about-content max-w-[1600px] px-2 flex items-center justify-center gap-10 mx-auto">
          <div className="left-content flex-1">
            <div className="relative h-[30px] flex justify-center">
              <h2 className="absolute inset-0 top-0 left-0 text-center text-white font-bold text-lg">
                Who we are
              </h2>
              <div className="title-bg3 w-[200px] h-[32px] z-[-1]"></div>
            </div>
            <p className="text-3xl font-bold text-center my-6">
              We give you the body of your dreams
            </p>
            <p className="text-lg lg:text-xl my-6 text-gray-500">
              At Clash fitness center, we are dedicated to helping you achieve
              the body of your dreams. Our expert trainers and nutritionists
              will work with you to create a personalized fitness and nutrition
              plan that helps you reach your specific goals.
            </p>
            <div className="contact-btn-container flex items-center mt-16">
              <Link
                to="/contact"
                className="bg-red-primary purchase-red-btn text-white font-bold text-lg px-8 py-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="right-content hidden lg:block red-circle-bg flex-1">
            <img
              src="https://res.cloudinary.com/dgio3wn9w/image/upload/v1730740623/image_k0bwwd.png"
              alt=""
              className="max-w-[500px] object-contain"
            />
          </div>
        </div>

        <div className="history-content my-36">
          <div className="grid-container grid lg:grid-cols-2 place-content-center max-w-[1600px] mx-auto">
            <div className="card py-6 xs:p-6 md:p-20 lg:p-8 grid grid-cols-1 grid-rows-[auto,auto,auto] place-content-center place-items-center md:gap-5 lg:gap-0">
              <img
                src="https://res.cloudinary.com/dgio3wn9w/image/upload/v1730742882/image_vn9ii0.png"
                alt=""
                width={72}
                height={72}
                className="mx-auto"
              />
              <p className="font-bold text-2xl text-center py-4">Our History</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                laboriosam incidunt optio quasi vero porro unde, nihil voluptate
                ea debitis eum dignissimos quod, ipsa, ullam sunt? Unde, est.
                Expedita, accusantium.
              </p>
            </div>
            <div className="card md:px-20 lg:p-0">
              <img
                src="https://res.cloudinary.com/dgio3wn9w/image/upload/v1730742568/gym-workout-plan-for-gaining-muscle_header_p6l7ip.jpg"
                alt=""
                className="object-cover aspect-video h-full"
              />
            </div>
            <div className="card order-1 lg:order-none md:px-20 lg:p-0">
              <img
                src="https://res.cloudinary.com/dgio3wn9w/image/upload/v1730742448/1_167a69af-cb46-4912-b589-bf3929ff57f1_sgstr4.jpg"
                alt=""
                className=""
              />
            </div>
            <div className="card py-6 xs:p-6 md:p-20 lg:p-8 grid grid-cols-1 grid-rows-[auto,auto,auto] place-content-center place-items-center md:gap-5 lg:gap-0">
              <img
                src="https://res.cloudinary.com/dgio3wn9w/image/upload/v1730742876/image_qxdka1.png"
                width={72}
                height={72}
                alt=""
                className="mx-auto"
              />
              <p className="font-bold text-2xl text-center py-4">Our Mission</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                laboriosam incidunt optio quasi vero porro unde, nihil voluptate
                ea debitis eum dignissimos quod, ipsa, ullam sunt? Unde, est.
                Expedita, accusantium.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default About;
