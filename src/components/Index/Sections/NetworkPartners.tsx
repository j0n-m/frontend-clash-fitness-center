function NetworkPartners() {
  return (
    <section className="px-5 py-8 border-b">
      <div className="relative h-[34px]">
        <h2 className="absolute z-10 text-white top-[2px] left-[50%] translate-x-[-50%] text-center font-bold text-lg">
          Partners
        </h2>
        <div className="title-bg3 w-[200px] h-[34px]"></div>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-center my-6">
        Our Network Partners
      </h2>
      <div
        className={`flex flex-wrap justify-center items-center my-10 gap-x-5 gap-y-2 relative z-0 after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:z-50 select-none`}
      >
        <img
          src={
            "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730667449/image_sl6ifj.png"
          }
          alt="The Athletic Club"
          className={``}
        />
        <img
          src={
            "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730667459/image_cl5vmf.png"
          }
          alt="The Fitness Club"
        />
        <img
          src={
            "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730667467/image_ik07sp.png"
          }
          alt="Gym Club"
        />
        <img
          src={
            "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730667475/image_rey9nx.png"
          }
          alt="The Muscle Club"
        />
        <img
          src={
            "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730667485/image_jlm7wj.png"
          }
          alt="Power Lifting Club"
        />
      </div>
    </section>
  );
}

export default NetworkPartners;
