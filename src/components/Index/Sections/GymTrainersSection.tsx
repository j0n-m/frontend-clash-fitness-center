import EmailIcon from "../../Icons/EmailIcon";
import FacebookIcon from "../../Icons/FacebookIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import TwitterIcon from "../../Icons/TwitterIcon";

const trainers = [
  {
    name: "Sam Lewis",
    speciality: "Yoga Trainer",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730664065/image_mnmrxd.png",
  },
  {
    name: "John Doe",
    speciality: "Intensity Trainer",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730664114/image_kibapf.png",
  },
  {
    name: "Ana June",
    speciality: "Personal Trainer",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730664134/image_yonmkf.png",
  },
];

function GymTrainersSection() {
  return (
    <section className="py-20 px-10">
      <div className="relative flex justify-center">
        <div className="title-bg3 h-[34px] w-[200px]">
          <h2 className="text-center h-[34px] flex items-center justify-center">
            <span className="font-bold text-white text-lg">Gym Trainers</span>
          </h2>
        </div>
      </div>
      <div className="mt-14">
        <h3 className="flex justify-center text-center text-3xl lg:text-4xl">
          <span className="mx-auto font-bold">Team of Expert Trainers</span>
        </h3>
        <p className="flex justify-center text-sm md:text-base mt-4 text-gray-500 text-center">
          Expert team of coaches helps you succeed in any goal you have.
          <br />
          They provide personalized guidance and motivation.
        </p>
        <div className="trainer-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 place-content-center transition-all duration-500">
          {trainers.map((trainer, index) => {
            return (
              <div
                key={index}
                className={`trainer-card flex-col shadow-xl relative ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="card-top flex-1 w-fit mx-auto">
                  <img
                    src={trainer.img_src}
                    width={250}
                    height={250}
                    loading="lazy"
                    className="grayscale hover:grayscale-0 focus-visible:grayscale-0 transition-all duration-500"
                    alt={trainer.name}
                  />
                </div>
                <div className="card-bottom absolute bottom-0 left-0 right-0 bg-white flex justify-center py-6 drop-shadow-xl">
                  <div className="card-bottom-content">
                    <p className="font-bold text-3xl">{trainer.name}</p>
                    <p className="text-center text-gray-500">
                      {trainer.speciality}
                    </p>
                    <p className="mt-2 flex gap-4 items-center">
                      <span>
                        <FacebookIcon />
                      </span>
                      <span>
                        <TwitterIcon />
                      </span>
                      <span>
                        <InstagramIcon />
                      </span>
                      <span>
                        <EmailIcon />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GymTrainersSection;
