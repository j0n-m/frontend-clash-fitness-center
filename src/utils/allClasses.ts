export type allClassesType = {
  id: number;
  label: string;
  time: string;
  img_alt: string;
  img_src: string;
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
}[];

const allClasses_unsorted: allClassesType = [
  {
    id: 100,
    label: "High Intensity",
    day: "Monday",
    time: "Monday: 4:00pm - 5:00pm",
    img_alt: "A man doing a rope exercise",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730578600/image_lcapqu.jpg",
  },
  {
    id: 101,
    label: "Indoor Cycling",
    time: "Wednesday: 9:00am - 10:00am",
    day: "Wednesday",
    img_alt: "A class exercising on an indoor cycling bike",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730579079/intro-to-spinning-and-indoor-cycling_vwqolb.jpg",
  },
  {
    id: 102,
    label: "Martial Arts",
    time: "Sunday: 6:00pm - 7:00pm",
    day: "Sunday",
    img_alt: "A group of students standing and listening in a taekwando class",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730578020/martial-arts_fp7ep8.jpg",
  },
  {
    id: 103,
    label: "Muscle Toning",
    time: "Monday: 10:30am - 11:30am",
    day: "Monday",
    img_alt: "A woman doing medicine ball exercises",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730580380/0314-The-Pulse-BLOG-Medicine-Ball_iqcx5c.jpg",
  },
  {
    id: 104,
    label: "Power Lift",
    time: "Saturday: 9:00am - 10:00am",
    day: "Saturday",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730500388/power-lift-class_czqvkx.webp",
    img_alt: "powerlifter getting ready to lift a barbell",
  },
  {
    id: 105,
    label: "Swimming",
    time: "Tuesday: 4:00pm - 5:00pm",
    day: "Tuesday",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730580748/Robin-Sparf-swim-practice-free_scfmef.jpg",
    img_alt: "A class racing in a swimming pool",
  },
  {
    id: 106,
    label: "Strength Building",
    time: "Friday: 4:00pm - 5:00pm",
    day: "Friday",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730579383/strength-training-techniques-for-beginners-812748_1200x_qf74oo.jpg",
    img_alt: "A man doing holding dumbbells performing a dumbbell back row",
  },
  {
    id: 107,
    label: "Yoga",
    time: "Friday: 1:00pm - 2:00pm",
    day: "Friday",
    img_alt: "A woman doing a yoga stretch on a gym mat",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730578906/image_nfybez.jpg",
  },
];
//pilates
//cardio
//zumba
//boxing
//Running

const allClasses: allClassesType = allClasses_unsorted.sort((a, b) =>
  a.label < b.label ? -1 : a.label > b.label ? 1 : 0
);
const featuredClassesIds = [100, 101, 102, 104, 106, 107];
const featuredClasses: allClassesType = allClasses.filter((c) =>
  featuredClassesIds.includes(c.id)
);
export default allClasses;
export { featuredClasses };
