import { ClassDays } from "../routes/schedule/index";
import moment from "moment";

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
    name: "Hulk Hogan",
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
  {
    name: "Cindy Campbell",
    id: 110,
  },
  {
    name: "Jackie Chan",
    id: 111,
  },
  {
    name: "Mike Tyson",
    id: 112,
  },
  {
    name: "Hailey Webber",
    id: 113,
  },
  {
    name: "Forrest Gump",
    id: 114,
  },
  {
    name: "John Rambo",
    id: 115,
  },
];

// const DATE_STR = "2024-10-10";

const allClasses_unsorted: allClassesType = [
  {
    id: 100,
    label: "High Intensity",
    day: "monday",
    time: "Monday: 4:00pm - 5:00pm",
    img_alt: "A man doing a rope exercise",
    instructor: trainers[0],
    dateFormat: moment().weekday(1).hours(16).minutes(0).seconds(0).toDate(),
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730578600/image_lcapqu.jpg",
  },
  {
    id: 101,
    label: "Indoor Cycling",
    time: "Wednesday: 9:00am - 10:00am",
    dateFormat: moment().weekday(3).hours(9).minutes(0).seconds(0).toDate(),
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
    dateFormat: moment().weekday(0).hours(18).minutes(0).seconds(0).toDate(),
    day: "sunday",
    instructor: trainers[11],
    img_alt: "A group of students standing and listening in a taekwando class",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730578020/martial-arts_fp7ep8.jpg",
  },
  {
    id: 103,
    label: "Muscle Toning",
    time: "Monday: 10:30am - 11:30am",
    dateFormat: moment().weekday(1).hours(10).minutes(30).seconds(0).toDate(),
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
    dateFormat: moment().weekday(6).hours(9).minutes(0).seconds(0).toDate(),
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
    dateFormat: moment().weekday(2).hours(16).minutes(0).seconds(0).toDate(),
    day: "tuesday",
    instructor: trainers[2],
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730580748/Robin-Sparf-swim-practice-free_scfmef.jpg",
    img_alt: "A class racing in a swimming pool",
  },
  {
    id: 106,
    label: "Strength Building",
    instructor: trainers[15],
    time: "Friday: 4:00pm - 5:00pm",
    dateFormat: moment().weekday(5).hours(16).minutes(0).seconds(0).toDate(),
    day: "friday",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730579383/strength-training-techniques-for-beginners-812748_1200x_qf74oo.jpg",
    img_alt: "A man doing holding dumbbells performing a dumbbell back row",
  },
  {
    id: 107,
    label: "Yoga",
    instructor: trainers[10],
    time: "Friday: 1:00pm - 2:00pm",
    dateFormat: moment().weekday(5).hours(13).minutes(0).seconds(0).toDate(),
    day: "friday",
    img_alt: "A woman doing a yoga stretch on a gym mat",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730578906/image_nfybez.jpg",
  },
  {
    id: 108,
    label: "Boxing",
    instructor: trainers[12],
    time: "Wednesday 1:00pm - 2:00pm",
    dateFormat: moment().weekday(3).hours(13).minutes(0).seconds(0).toDate(),
    day: "wednesday",
    img_alt: "A man with boxing glove punching a punching bag",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730828250/boxing_xpz7pz.webp",
  },
  {
    id: 109,
    label: "Pilates",
    instructor: trainers[13],
    time: "Saturday: 3:00pm - 4:00pm",
    dateFormat: moment().weekday(6).hours(15).minutes(0).seconds(0).toDate(),
    day: "saturday",
    img_alt: "A class on a gym matt doing pilates",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730828496/69A1432-1_raxnre.jpg",
  },
  {
    id: 110,
    label: "Running",
    instructor: trainers[14],
    time: "Tuesday 1:00pm - 2:00pm",
    dateFormat: moment().weekday(2).hours(13).minutes(0).seconds(0).toDate(),
    day: "tuesday",
    img_alt: "",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730828805/man-running-on-road_hjoonu.jpg",
  },
];
//zumba

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

//searches scheduled classes by day
const classDictionary: { [index: string]: allClassesType[0][] } = {};
for (const c of allClasses) {
  const hasValue = classDictionary[c.day] ? true : false;

  classDictionary[c.day] = hasValue ? [...classDictionary[c.day], c] : [c];
}

//dictionary returns class data by class id
const allClassesMap = new Map(allClasses.map((c) => [c.id, c]));

export default allClasses;
export { featuredClasses, classDictionary, allClassesMap };
