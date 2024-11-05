import { ClassDays } from "../routes/schedule/route";

export type allClassesType = {
  id: number;
  label: string;
  time: string;
  img_alt: string;
  img_src: string;
  day: ClassDays;
  instructor: TrainerType;
  dateFormat: Date;
}[];
export type TrainerType = {
  name: string;
  id: number;
};

const trainers: TrainerType[] = [
  {
    name: "John Wick",
    id: 100,
  },
  {
    name: "Brad Martin",
    id: 101,
  },
  {
    name: "Aaron Douglas",
    id: 102,
  },
  {
    name: "Ana June",
    id: 103,
  },
  {
    name: "John Doe",
    id: 104,
  },
  {
    name: "Sam Lewis",
    id: 105,
  },
  {
    name: "Sam Wich",
    id: 106,
  },
  {
    name: "Ron Burgundy",
    id: 107,
  },
  {
    name: "Joe Dirt",
    id: 108,
  },
  {
    name: "Alex Clark",
    id: 109,
  },
];

const DATE_STR = "2024-10-10";

const allClasses_unsorted: allClassesType = [
  {
    id: 100,
    label: "High Intensity",
    day: "monday",
    time: "Monday: 4:00pm - 5:00pm",
    img_alt: "A man doing a rope exercise",
    instructor: trainers[0],
    dateFormat: new Date(`${DATE_STR} 16:00`),
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730578600/image_lcapqu.jpg",
  },
  {
    id: 101,
    label: "Indoor Cycling",
    time: "Wednesday: 9:00am - 10:00am",
    dateFormat: new Date(`${DATE_STR} 09:00`),
    day: "wednesday",
    img_alt: "A class exercising on an indoor cycling bike",
    instructor: trainers[3],
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730579079/intro-to-spinning-and-indoor-cycling_vwqolb.jpg",
  },
  {
    id: 102,
    label: "Martial Arts",
    time: "Sunday: 6:00pm - 7:00pm",
    dateFormat: new Date(`${DATE_STR} 18:00`),
    day: "sunday",
    instructor: trainers[7],
    img_alt: "A group of students standing and listening in a taekwando class",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730578020/martial-arts_fp7ep8.jpg",
  },
  {
    id: 103,
    label: "Muscle Toning",
    time: "Monday: 10:30am - 11:30am",
    dateFormat: new Date(`${DATE_STR} 10:30`),
    day: "monday",
    instructor: trainers[6],
    img_alt: "A woman doing medicine ball exercises",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730580380/0314-The-Pulse-BLOG-Medicine-Ball_iqcx5c.jpg",
  },
  {
    id: 104,
    label: "Power Lift",
    time: "Saturday: 9:00am - 10:00am",
    dateFormat: new Date(`${DATE_STR} 09:00`),
    day: "saturday",
    instructor: trainers[1],
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730500388/power-lift-class_czqvkx.webp",
    img_alt: "powerlifter getting ready to lift a barbell",
  },
  {
    id: 105,
    label: "Swimming",
    time: "Tuesday: 4:00pm - 5:00pm",
    dateFormat: new Date(`${DATE_STR} 16:00`),
    day: "tuesday",
    instructor: trainers[2],
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730580748/Robin-Sparf-swim-practice-free_scfmef.jpg",
    img_alt: "A class racing in a swimming pool",
  },
  {
    id: 106,
    label: "Strength Building",
    instructor: trainers[0],
    time: "Friday: 4:00pm - 5:00pm",
    dateFormat: new Date(`${DATE_STR} 16:00`),
    day: "friday",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730579383/strength-training-techniques-for-beginners-812748_1200x_qf74oo.jpg",
    img_alt: "A man doing holding dumbbells performing a dumbbell back row",
  },
  {
    id: 107,
    label: "Yoga",
    instructor: trainers[7],
    time: "Friday: 1:00pm - 2:00pm",
    dateFormat: new Date(`${DATE_STR} 13:00`),
    day: "friday",
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

// const allClasses: allClassesType = allClasses_unsorted.sort((a, b) =>
//   a.label < b.label ? -1 : a.label > b.label ? 1 : 0
// );
const allClasses: allClassesType = allClasses_unsorted.sort((a, b) => {
  return a.dateFormat < b.dateFormat ? -1 : a.dateFormat > b.dateFormat ? 1 : 0;
});
const featuredClassesIds = [100, 101, 102, 104, 106, 107];
const featuredClasses: allClassesType = allClasses.filter((c) =>
  featuredClassesIds.includes(c.id)
);

const classDictionary: { [index: string]: allClassesType[0][] } = {};
for (const c of allClasses) {
  const hasValue = classDictionary[c.day] ? true : false;

  classDictionary[c.day] = hasValue ? [...classDictionary[c.day], c] : [c];
}
export default allClasses;
export { featuredClasses, classDictionary };
