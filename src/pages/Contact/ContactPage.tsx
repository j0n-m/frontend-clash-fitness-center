import { Button } from "react-aria-components";
import LandingHeader from "../../components/LandingHeader";
import openingHours from "../../utils/openingHours";
import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState<undefined | { [index: string]: string }>(
    {}
  );
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const clearError = () => {
    if (error) {
      setError(undefined);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    function isValidated() {
      if (name.trim().length < 2) {
        setError({ name: "Name must be at least 2 characters long." });
        return false;
      }
      if (comments.trim().length < 5) {
        setError({ comments: "Comments must be at least 5 characters long." });
        return false;
      }
      return true;
    }
    if (isValidated()) {
      setName(name.trim());
      setComments(comments.trim());
      setFormIsSubmitted(true);
    }
  };
  return (
    <section>
      <LandingHeader text="Contact Us" />
      <div className="content py-10 px-4 md:px-10 lg:px-[--page-padding]">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="left-content flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-center my-10">
              We are here for help you!
            </h1>
            <p className="text-gray-500 my-10">
              At Clash fitness center, we are dedicated to helping you achieve
              the body of your dreams. Our expert trainers and nutritionists
              will work with you to create a personalized fitness and nutrition
              plan that helps you reach your specific goals.
            </p>
            <h2 className="font-bold text-2xl">Headquarters</h2>
            <p className="text-gray-primary mt-2">
              123 Main Street, Kansas City, MO, USA
            </p>
            <h2 className="font-bold text-2xl mt-6">Opening Hours</h2>
            <div className="mt-2 text-gray-primary">
              <p className="">Mon-Fri: {openingHours["m-f"]}</p>
              <p>Sat: {openingHours.sat}</p>
              <p>Sun: {openingHours.sun}</p>
            </div>
          </div>
          <div className="right-content lg:min-w-[450px]">
            <form
              onSubmit={handleSubmit}
              className="contact-form bg-gray-200 px-6 py-10 rounded-md "
            >
              {!formIsSubmitted ? (
                <div className="flex flex-col gap-5">
                  <h2
                    className={`contact-form-label font-bold text-2xl relative w-max after:content-[""] after:absolute after:left-0 after:bottom-0 after:translate-y-[4px] after:h-1 after:w-1/3 after:bg-red-primary transition-all duration-[400ms] after:transition-all after:duration-[400ms]`}
                  >
                    Leave us your info
                  </h2>
                  <div className="field flex flex-col gap-1">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      minLength={2}
                      required={true}
                      value={name}
                      onChange={(e) => {
                        clearError();
                        setName(e.target.value);
                      }}
                      id="name"
                      className="h-[40px] px-3 rounded-lg"
                      placeholder="e.g. John Doe"
                    />
                    {error?.name && (
                      <p className="text-red-500">{error.name}</p>
                    )}
                  </div>
                  <div className="field flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        clearError();
                        setEmail(e.target.value);
                      }}
                      required={true}
                      id="email"
                      className="h-[40px] px-3 rounded-lg"
                      placeholder="e.g. jdoe@example.com"
                    />
                    {error?.email && (
                      <p className="text-red-500">{error.email}</p>
                    )}
                  </div>
                  <div className="field flex flex-col gap-1">
                    <label htmlFor="comments">Comments or Questions</label>
                    <textarea
                      name="comments"
                      id="comments"
                      value={comments}
                      onChange={(e) => {
                        clearError();
                        setComments(e.target.value);
                      }}
                      required={true}
                      minLength={5}
                      className="p-3 rounded-lg"
                      rows={3}
                    />
                    {error?.comments && (
                      <p className="text-red-500">{error.comments}</p>
                    )}
                  </div>
                  <div className="btn-field">
                    <Button
                      type="submit"
                      className={({ isHovered, isFocusVisible, isPressed }) =>
                        `font-bold text-white px-6 py-3 outline-none border-none ${isHovered || isFocusVisible || isPressed ? "bg-red-primary/80" : "bg-red-primary"}`
                      }
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="font-bold">
                  Thank you, we will reach out to you within 48 hours.
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="mb-40"></div>
      </div>
    </section>
  );
}

export default ContactPage;
