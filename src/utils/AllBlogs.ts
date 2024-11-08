export type BlogPostType = {
  id: number;
  title: string;
  publish_date: Date;
  author: string;
  category: string;
  article_summary: string;
  article_highlight: string;
  img_src: string;
};

const allBlogs: BlogPostType[] = [
  {
    id: 1,
    title: "Yoga for everyone",
    publish_date: new Date("2024-9-1"),
    author: "Admin",
    category: "Yoga",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1731044192/image_ipfkev.jpg",
    article_summary:
      "Needless to say, yoga is more than just a form of posture exercise. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    article_highlight:
      "This is a program designed to make the practice of yoga beneficial for people of all ages.",
  },
  {
    id: 2,
    title: "Getting back into the workouts after a long break",
    publish_date: new Date("2024-9-7"),
    author: "Admin",
    category: "Intensity",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1730500388/power-lift-class_czqvkx.webp",
    article_summary:
      "Here is my experience trying to get back into my usual workouts after a long vacation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    article_highlight:
      "Learn how to ease back into your high intensity workout routine after a vacation with tips and strategies for success..",
  },
  {
    id: 3,
    title: "Meet the staff of Clash Fitness Center",
    publish_date: new Date("2024-9-20"),
    author: "Admin",
    category: "General",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1731044341/image_y8qogd.jpg",
    article_summary:
      "Our staff is the backbone of what makes this fitness center feel like home. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    article_highlight:
      "Get to know our staff and personal trainers that are dedicated to helping others reach their fitness goals.",
  },
  {
    id: 4,
    title: "Give your fitness a boost by getting a personal trainer",
    publish_date: new Date("2024-9-29"),
    author: "Admin",
    category: "Workout",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1731049620/image_f5bxpu.jpg",
    article_summary:
      "Personal trainers are more than just a hype man. With a personal trainer... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    article_highlight:
      "Understand the benefits of hiring a personal trainer to reach their fitness goals.",
  },
  {
    id: 5,
    title: "Introducing our newly added class - Boxing",
    publish_date: new Date("2024-10-02"),
    author: "Admin",
    category: "Boxing",
    img_src:
      "https://res.cloudinary.com/dgio3wn9w/image/upload/v1731049914/image_l0supy.jpg",
    article_summary:
      "Get ready to schedule one of our newly added classes! After so many requests from our loyal members...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    article_highlight:
      "We introduce a newly added class to our fitness center - boxing.",
  },
];

const latestBlogs = allBlogs.sort((a, b) =>
  a.publish_date < b.publish_date ? 1 : a.publish_date > b.publish_date ? -1 : 0
);

export default allBlogs;
export { latestBlogs };
