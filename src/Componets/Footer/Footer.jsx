import { FiInstagram, FiLinkedin } from "react-icons/fi";
import BlackLogo from "../../assets/logo-black.jpg";
import { AiFillPinterest, AiFillPrinter } from "react-icons/ai";
import { FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="py-20 pb-22 bg-black font-poppins">
        <div className="container text-gray-50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Logo section  */}
            <div className="m-2">
              <img src={BlackLogo} alt="" className="w-24" />
            </div>
            {/* Link Section  */}
            <div>
              <ul className="space-y-8 my-4 pb-5 ">
                <li className="hover:scale-x-105 trnslation duration-300 cursor-pointer">BOOK A TEST RIDE</li>
                <li className="hover:scale-x-105 trnslation duration-300 cursor-pointer">DEALER LOCATOR</li>
                <li className="hover:scale-x-105 trnslation duration-300 cursor-pointer">FINANCE OFFER</li>
                <li className="hover:scale-x-105 trnslation duration-300 cursor-pointer">EXCHANGE YOUR BIKE</li>
                <li className="hover:scale-x-105 trnslation duration-300 cursor-pointer">CONTACT US</li>
              </ul>
            </div>
            {/* Social Link Section  */}
            <div className="space-y-8">
              <h1 className="text-base font-semibold ">FOLLOW US</h1>
              <div className="grid grid-cols-2 gap-10 w-32 ">
                <div className="h-10 w-10 rounded-full hover:bg-[#171717] hover:scale-125 bg-[#78716c] cursor-pointer text-center items-center justify-center">
                  <FiLinkedin className="m-3" />
                </div>
                <div className="h-10 w-10 rounded-full hover:bg-[#171717] hover:scale-125 bg-[#78716c] cursor-pointer text-center items-center">
                  <RiPinterestLine
                  className="m-3" />
                </div>
                <div className="h-10 w-10 rounded-full hover:bg-[#171717] hover:scale-125 bg-[#78716c] cursor-pointer text-center items-center">
                <FaTwitter className="m-3" />
                </div>
                <div className="h-10 w-10 rounded-full hover:bg-[#171717] hover:scale-125 bg-[#78716c] cursor-pointer text-center items-center">
                <FaFacebookF className="m-3" />
                </div>
              </div>
            </div>
            {/* Input Section  */}
            <div className="space-y-9">
              <h1 className="font-semibold">GET IN TOUCH</h1>
              <input type="text" placeholder="  Email" className="bg-[#171717] "/>
              <h1>DESIGNED BY WEB DESIGN MASTERY</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
