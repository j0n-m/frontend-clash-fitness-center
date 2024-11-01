import { ClockIcon } from "@heroicons/react/16/solid";
import { Link } from "@tanstack/react-router";

function Index() {
  return (
    <main>
      <section className="hero bg-black-primary min-h-svh">
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
            <div className="link-to-classes mt-4 flex justify-center">
              <Link className="bg-white-primary rounded-md select-none text-black-primary py-2 px-4 font-bold hover:bg-white-dim1 focus-visible:bg-white-dim1">
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
      <section className="p-8 relative">
        <div className="card-container grid grid-cols-1 lg:grid-cols-3 place-content-around place-items-center -mt-16 gap-6">
          <div className="card bg-white rounded-tr-2xl rounded-bl-2xl shadow-xl min-w-[25vw]">
            <div className="info-contents flex flex-col items-center justify-center p-12">
              <div>
                <ClockIcon className="size-10 fill-red-500" />
              </div>
              <p className="font-bold text-2xl mt-3">Progression</p>
              <p className="mt-5">
                Our team of experts will work with you to create a customized
                plan that helps you achieve success one step at a time.
              </p>
            </div>
          </div>
          <div className="card bg-white rounded-tr-2xl rounded-bl-2xl shadow-xl min-h-full min-w-[25vw]">
            <div className="info-contents flex flex-col items-center justify-center p-12">
              <div>
                <span className="block weights-icon"></span>
              </div>
              <p className="font-bold text-2xl mt-3">Workout</p>
              <p className="mt-5">
                With a variety of workouts to choose from, you'll have
                everything you need to get into the best shape of your life.
              </p>
            </div>
          </div>
          <div className="card bg-white rounded-tr-2xl rounded-bl-2xl shadow-xl min-h-full min-w-[25vw]">
            <div className="info-contents flex flex-col items-center justify-center p-12">
              <div>
                <span className="block food-icon"></span>
              </div>
              <p className="font-bold text-2xl mt-3">Nutrition</p>
              <p className="mt-5">
                Our team will work with you to create a personalized meal plan
                that helps you reach your specific health goals.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ab est minima exercitationem consectetur, deleniti distinctio libero
            ut blanditiis magni porro. Repudiandae ea quisquam accusamus quasi
            voluptas culpa eos inventore?
          </p>
        </div>
      </section>
    </main>
  );
}

export default Index;
