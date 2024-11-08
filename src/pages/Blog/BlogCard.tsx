import { BookOpenIcon } from "@heroicons/react/24/outline";
import { BlogPostType } from "../../utils/AllBlogs";

type BlogCardProps = {
  blog: BlogPostType;
};
function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="card grid grid-cols-1 grid-rows-[auto,auto,auto,auto]">
      <div className="img-container">
        <img src={blog.img_src} alt={blog.title} />
      </div>
      <div className="card-blog-details mt-3">
        <p className="flex items-center gap-1 text-gray-500">
          <BookOpenIcon className="size-5 text-red-primary" />
          <span>By: </span>
          <span className="font-bold">{blog.author} </span>
          <span> | </span>
          <span>
            {blog.publish_date.toLocaleDateString("en-us", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}{" "}
          </span>
          <span> | </span>
          <span>{blog.category}</span>
        </p>
      </div>
      <div className="card-title my-5">
        <h2 className="font-bold text-3xl md:text-4xl">{blog.title}</h2>
      </div>
      <div className="card-blog-summary">
        <p>{blog.article_summary}</p>
      </div>
    </div>
  );
}

export default BlogCard;
