import { Link } from "react-router-dom";
import AndroidLogo from "../../assets/icons/android.png";
import IosLogo from "../../assets/icons/ios.png";
import MainLogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white mt-5 px-5 py-10 md:px-0">
      <div className="max-w-screen-xl mx-auto flex justify-between flex-col md:flex-row gap-y-5 md:gap-y-0">
        <div>
          <Link to="/">
            <img src={MainLogo} width={120} alt="main logo" />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Employer home
              </Link>
            </li>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Help center
              </Link>
            </li>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Summons/Notices
              </Link>
            </li>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Grievances
              </Link>
            </li>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Report issue
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Terms & conditions
              </Link>
            </li>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Fraud alert
              </Link>
            </li>
            <li>
              <Link
                to={"/sdsd"}
                className="font-medium block mb-1 hover:text-cyan-500"
              >
                Trust & safety
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mt-2">Download our app</p>
          <p className="text-xs mt-1">Get real-time job updates on our App</p>
          <div className="flex items-center gap-2 mt-2">
            <Link to="/sdsd">
              <img src={AndroidLogo} width={120} alt="android" />
            </Link>
            <Link to="/sdsd">
              <img src={IosLogo} width={120} alt="ios" />
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-8 ml-1 md:text-center">
        All rights reserved ©2024 <b> RecruitX</b>
      </p>
    </footer>
  );
};

export default Footer;
