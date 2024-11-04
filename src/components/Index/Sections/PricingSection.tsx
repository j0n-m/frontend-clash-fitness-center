import { Link } from "@tanstack/react-router";
import memberships from "../../../utils/memberships";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

function PricingSection() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="relative h-[30px]">
        <h2 className="absolute z-10 text-white top-[2px] left-[50%] translate-x-[-50%] text-center font-bold text-lg">
          Pricing Chart
        </h2>
        <div className="title-bg3 w-[200px] h-[40px]"></div>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-center my-8">
        Exclusive Pricing Plan
      </h2>
      <div className="grid lg:grid-cols-3 place-content-center place-items-center gap-4 mt-10 max-w-[1200px] mx-auto">
        {memberships.map((ms) => {
          return (
            <div
              key={ms.id}
              className="membership-card shadow-xl p-10 flex flex-col justify-between h-full w-full min-h-[400px]"
            >
              <div className="">
                <h4 className="text-center font-bold text-xl md:text-3xl py-8">
                  {ms.label}
                </h4>
                <p className="text-center font-bold text-xl md:text-2xl">
                  ${ms.price}
                  <span className="text-sm text-gray-500">/month</span>
                </p>
                <div className="py-8">
                  <ul className="text-center text-gray-500 text-sm md:text-base">
                    {ms.description.map((desc, i) => {
                      return (
                        <li key={i} className="mt-2">
                          {desc}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="purchase-btns flex justify-center">
                <Link className="bg-red-primary px-6 py-4 text-lg text-white font-bold flex gap-1 items-center purchase-red-btn">
                  <span>Purchase</span>
                  <ArrowRightIcon className="size-5 pt-[3px]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PricingSection;
