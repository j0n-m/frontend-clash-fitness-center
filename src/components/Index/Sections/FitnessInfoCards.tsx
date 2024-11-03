import { ClockIcon } from "@heroicons/react/16/solid";

function FitnessInfoCards() {
  return (
    <section className="fitness-section lg:px-[--page-padding] px-8 py-8 relative">
      <div className="card-container grid grid-cols-1 lg:grid-cols-3 place-content-around place-items-center -mt-16 gap-6">
        <div className="card bg-white rounded-tr-[40px] rounded-bl-[40px] shadow-xl min-w-[25vw]">
          <div className="info-contents flex flex-col items-center justify-center py-16 px-8">
            <div>
              <ClockIcon className="size-10 fill-red-500" />
            </div>
            <p className="font-bold text-2xl mt-3">Progression</p>
            <p className="mt-5 text-center">
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </div>
        </div>
        <div className="card bg-white rounded-tr-[40px] rounded-bl-[40px] shadow-xl min-h-full min-w-[25vw]">
          <div className="info-contents flex flex-col items-center justify-center py-16 px-8">
            <div>
              <span className="block weights-icon"></span>
            </div>
            <p className="font-bold text-2xl mt-3">Workout</p>
            <p className="mt-5 text-center">
              With a variety of workouts to choose from, you'll have everything
              you need to get into the best shape of your life.
            </p>
          </div>
        </div>
        <div className="card bg-white rounded-tr-[40px] rounded-bl-[40px] shadow-xl min-h-full min-w-[25vw]">
          <div className="info-contents flex flex-col items-center justify-center py-16 px-8">
            <div>
              <span className="block food-icon"></span>
            </div>
            <p className="font-bold text-2xl mt-3">Nutrition</p>
            <p className="mt-5 text-center">
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FitnessInfoCards;
