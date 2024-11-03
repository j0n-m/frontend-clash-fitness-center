import ClassesCard from "./ClassesCard";
import { featuredClasses } from "../../../../utils/allClasses";

function FeaturedClassesSection() {
  return (
    <section className="featured-classes p-8 lg:p-[--page-padding]">
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center">
          <div className="">
            <h3 className="relative mx-auto w-[260px] h-[42px] text-center text-white-primary font-bold text-lg flex items-center justify-center">
              <span>Our Featured Classes</span>
              <div className="title-bg2 h-[40px] absolute inset-0 -z-10"></div>
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr] lg:grid-cols-4 mt-6 gap-6">
        {featuredClasses.map((c, index) => {
          const lastIndex = featuredClasses.length - 1;
          if (index === 0 || index === lastIndex) {
            return (
              <ClassesCard key={c.id} card={c} className="lg:col-span-2" />
            );
          }
          return <ClassesCard key={c.id} card={c} />;
        })}
      </div>
    </section>
  );
}

export default FeaturedClassesSection;
