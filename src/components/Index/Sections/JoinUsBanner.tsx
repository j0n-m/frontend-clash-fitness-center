import { Link } from "@tanstack/react-router";

function JoinUsBanner() {
  return (
    <div className="join-us relative">
      <div className="join-us-heading relative overflow-hidden px-[--page-padding] py-14 lg:py-20">
        <div className="join-us-heading-wrapper relative flex flex-col lg:flex-row gap-10 lg:gap-6 xl:gap-10 lg:w-[75%] lg:items-center xl:w-[70%]">
          <h2 className="text-white relative text-center text-2xl lg:text-4xl xl:text-4xl font-bold">
            We are always providing the best fitness service for you
          </h2>
          <div className="join-btn-container relative flex items-center justify-center">
            <Link className="join-us-btn relative bg-white text-black-primary px-8 py-3 lg:py-4 lg:px-12 text-lg lg:text-lg font-bold w-max hover:bg-white/90">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUsBanner;
