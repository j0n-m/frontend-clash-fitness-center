import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import LandingHeader from "../../components/LandingHeader";
import allBlogs from "../../utils/AllBlogs";
import BlogCard from "./BlogCard";
import { Helmet } from "react-helmet-async";

function BlogPage() {
  return (
    <section>
      <Helmet>
        <title>Clash Fitness Center | Blog</title>
      </Helmet>
      <LandingHeader text="Blog" />
      <div className="content px-8 md:px-12 py-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,350px] place-content-center lg:gap-10 max-w-[1500px] mx-auto">
          <div className="main flex flex-col gap-20 mx-auto lg:max-w-[800px]">
            {allBlogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
          <aside className="hidden lg:block">
            <div className="aside-container">
              <div className="search">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex border rounded-lg focus-within:border-gray-400"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="border-r border-r-red-primary h-[38px] px-4 w-full rounded-l-lg outline-none"
                  />
                  <button className="bg-red-primary rounded-r-lg">
                    <MagnifyingGlassIcon className="size-5 mx-2 text-white" />
                  </button>
                </form>
              </div>
              <div className="categories my-10 bg-gray-100 p-4">
                <h2
                  className={`red-underline font-bold relative text-2xl w-max after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-[50%] after:h-1 after:bg-red-primary after:translate-y-2 after:transition-all after:duration-[400ms]`}
                >
                  Categories
                </h2>
                <div className="flex justify-between mt-4 items-center text-gray-500 py-2 hover:text-red-primary cursor-pointer transition-all duration-300">
                  <p className="">Body Building</p>
                  <p>(3)</p>
                </div>
                <div className="flex justify-between items-center text-gray-500 py-2 hover:text-red-primary cursor-pointer transition-all duration-300">
                  <p>Boxing</p>
                  <p>(4)</p>
                </div>
                <div className="flex justify-between items-center text-gray-500 py-2 hover:text-red-primary cursor-pointer transition-all duration-300">
                  <p>Intensity</p>
                  <p>(2)</p>
                </div>
                <div className="flex justify-between items-center text-gray-500 py-2 hover:text-red-primary cursor-pointer transition-all duration-300">
                  <p>General</p>
                  <p>(10)</p>
                </div>
                <div className="flex justify-between items-center text-gray-500 py-2 hover:text-red-primary cursor-pointer transition-all duration-300">
                  <p>Yoga</p>
                  <p>(8)</p>
                </div>
              </div>

              <div className="recent-blogs my-10 bg-gray-100 p-4">
                <h2
                  className={`red-underline font-bold relative text-2xl w-max after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-[50%] after:h-1 after:bg-red-primary after:translate-y-2 after:transition-all after:duration-[400ms]`}
                >
                  Recent Blogs
                </h2>
                <div className="flex flex-col gap-6 mt-8">
                  {allBlogs.map((blog, i) => {
                    if (i >= 3) return null;
                    return (
                      <div
                        key={blog.id}
                        className="recent-blog-card text-gray-500 flex gap-4"
                      >
                        <div className="left overflow-hidden flex-1 w-[80px]">
                          <img
                            src={blog.img_src}
                            alt={blog.title}
                            className="object-cover aspect-video"
                          />
                        </div>
                        <div className="right flex-1">
                          <p className="text-gray-500">
                            {blog.publish_date.toLocaleDateString("en-us", {
                              month: "short",
                              day: "2-digit",
                              year: "numeric",
                            })}
                          </p>
                          <p className="font-bold">{blog.title}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="categories my-10 bg-gray-100 p-4">
                <h2
                  className={`red-underline font-bold relative text-2xl w-max after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-[50%] after:h-1 after:bg-red-primary after:translate-y-2 after:transition-all after:duration-[400ms]`}
                >
                  Popular Tags
                </h2>
                <div className="flex gap-4 mt-6 flex-wrap items-center text-gray-500">
                  {[
                    "BodyBuilding",
                    "Boxing",
                    "Gym",
                    "Healthy",
                    "Running",
                    "Workout",
                    "WeightLoss",
                    "Yoga",
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="tag bg-white px-2 py-1 hover:text-red-primary transition-all duration-300 cursor-pointer"
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
