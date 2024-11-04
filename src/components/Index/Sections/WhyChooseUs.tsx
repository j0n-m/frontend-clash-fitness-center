import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "@tanstack/react-router";

const ChooseUsIcons = [
  {
    label: "Join Our Free Classes",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730593205/image_hzspl0.png",
  },
  {
    label: "Modern Gym Equipment",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730593398/image_jyjijw.png",
  },
  {
    label: "Free Gym Bag",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730593931/image_tcoj83.png",
  },
  {
    label: "Fresh Bottle Water",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730593949/image_ub0cay.png",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-black-primary py-8 px-[--page-padding] lg:px-8 xl:px-[--page-padding] overflow-hidden">
      <div className="choose-us-content">
        <div className="flex flex-col lg:flex-row lg:gap-6">
          <img
            className="lg:max-w-[500px] aspect-auto mx-auto lg:flex-[1]"
            src={
              "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730592222/image_lwawqw.png"
            }
            alt=""
          />
          <div className="flex-1 lg:flex[3] mt-8 lg:mt-0 text-center lg:text-start">
            <div className="heading-container relative h-[35px] flex items-center justify-center">
              <span className="relative z-20 inset-0 text-white-primary text-center font-bold text-lg">
                Why Choose Us
              </span>
              <div className="title-bg3 h-[35px] w-[208px]"></div>
            </div>
            <h3 className="text-white-primary font-bold text-xl lg:text-4xl my-8">
              We Can Give A Shape To Your Body Here!
            </h3>
            <p className="text-gray-400 text-lg lg:text-xl">
              At Clash fitness center, we are dedicated to helping you achieve
              the body of your dreams. Our expert trainers and nutritionists
              will work with you to create a personalized fitness and nutrition
              plan that helps you reach your specific goals.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 text-white text-xl gap-x-3 gap-y-6 mt-8 font-bold lg:place-items-start">
              {ChooseUsIcons.map((obj, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 lg:gap-4 text-start"
                >
                  <img
                    className="border-2 border-red-primary rounded-full p-2 size-16"
                    src={obj.img_src}
                    alt=""
                  />
                  <p>{obj.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 relative z-0">
              <Link className="see-classes-btn bg-gray-primary text-white text-lg font-bold px-8 py-4 inline-flex items-center">
                <span>Our Classes</span>
                <ArrowRightIcon className="size-6 ml-1 pt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
