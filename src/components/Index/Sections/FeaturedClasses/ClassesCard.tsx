import { allClassesType } from "../../../../utils/allClasses";

type ClassesCardProps = {
  card: allClassesType[0];
  className?: string;
};
function ClassesCard({ card, className }: ClassesCardProps) {
  return (
    <div
      className={`class-card overflow-hidden h-72 w-full rounded-lg relative ${className ? className : ""}`}
    >
      <img
        src={card.img_src}
        alt={card.img_alt}
        className="class-card-img h-full w-full object-cover hover:scale-[1.15] transition-all duration-500 grayscale hover:grayscale-0"
      />
      <div className="absolute bottom-0 left-0 pointer-events-none flex flex-col">
        <div className="p-4">
          <p className=" text-white bg-transparent select-none text-3xl lg:text-2xl font-bold bg-black bg-opacity-30 px-1 rounded-md">
            {card.label}
          </p>
          <div className="">
            <p className="text-sm bg-red-primary text-white rounded-lg mt-2 px-2 py-[3px]">
              {card.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassesCard;
