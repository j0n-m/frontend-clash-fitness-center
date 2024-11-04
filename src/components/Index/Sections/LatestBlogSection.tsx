import { Link } from "@tanstack/react-router";
import { latestBlogs } from "../../../utils/AllBlogs";

function LatestBlogSection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="relative h-[30px]">
        <h2 className="absolute z-10 text-white top-[2px] left-[50%] translate-x-[-50%] text-center font-bold text-lg">
          Latest Blog
        </h2>
        <div className="title-bg3 w-[200px] h-[40px]"></div>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-center my-8">
        Our Recent News
      </h2>
      <div className="grid lg:grid-cols-3 place-content-center gap-4 max-w-[1400px] mx-auto">
        {latestBlogs.map((blog) => {
          return (
            <div
              key={blog.id}
              className="latest-blog-card shadow-xl p-10 flex flex-col justify-between gap-6"
            >
              <div className="">
                <p className="font-bold text-xl md:text-2xl">{blog.title}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {blog.publish_date.toLocaleDateString("en-us", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>
                <p className="text-gray-500 my-6">{blog.article_highlight}</p>
              </div>
              <div className="read-btn">
                <Link className="purchase-red-btn bg-red-primary text-white font-bold py-4 px-6 inline-block">
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default LatestBlogSection;
