import EmailIcon from "../Icons/EmailIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";

function Footer() {
  return (
    <footer className="py-16 px-10 md:px-20 xl:px-36">
      <div className="flex flex-col lg:flex-row justify-center gap-20">
        <div className="footerInfo flex-1">
          <div className="logo text-black-primary w-max mx-auto lg:mx-0">
            <p className="text-3xl font-bold">Clash</p>
            <p className="mt-[-6px] text-sm text-center">Fitness Center</p>
          </div>
          <p className="text-gray-600 mt-4">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <EmailIcon />
          </div>
          <div className="mt-4 text-[#646464]">
            <p>
              <span className="border-r-2 border-r-gray-500 pr-2">
                Privacy Policy
              </span>
              <span className="pl-2">&copy; 2024</span>
              <br />
              <span>By: Jon Monarrez</span>
            </p>
          </div>
        </div>
        <div className="footerExtra hidden lg:block flex-1 text-center lg:text-start">
          <p className="text-2xl font-bold">Working Hours</p>
          <div className="mt-4">
            <p className="font-bold text-[#646464]">Monday - Friday</p>
            <p className="text-[#646464] mt-1">7:00am - 10:00pm</p>
          </div>
          <div className="mt-2">
            <p className="font-bold text-[#646464]">Saturday</p>
            <p className="text-[#646464] mt-1">8:00am - 9:00pm</p>
          </div>
          <div className="mt-2">
            <p className="font-bold text-[#646464]">Sunday</p>
            <p className="text-[#646464] mt-1">Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
