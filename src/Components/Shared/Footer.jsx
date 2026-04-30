import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 text-slate-600 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900">SunCart</h2>
            <p className="text-sm leading-relaxed">
              Your trusted partner for quality products. We focus on providing
              the best shopping experience with fast delivery and top-notch
              support.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  href="#"
                  className="hover:pl-2 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:pl-2 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:pl-2 transition-all duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:pl-2 transition-all duration-300"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <FaMapMarkerAlt className=" mt-1 group-hover:scale-110 transition-transform" />
                <span>Sector 7, Uttara, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaPhoneAlt className=" group-hover:scale-110 transition-transform" />
                <span>+88010-000-000</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaEnvelope className=" group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:shakibul.dev@gmail.com"
                  className="transition-colors"
                >
                  shakibul.dev@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">
              Connect With Us
            </h3>
            <p className="text-sm mb-6">
              Follow us on social media for updates and offers.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  link: "#",
                  label: "Facebook",
                },
                {
                  icon: <FaTwitter />,
                  link: "#",
                  label: "Twitter",
                },
                {
                  icon: <FaLinkedin />,
                  link: "#",
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub />,
                  link: "#",
                  label: "Github",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 bg-white shadow-sm text-slate-700 rounded-full ${social.color} hover:-translate-y-1 transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-12 border-slate-200" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {currentYear}{" "}
            <span className="text-slate-900 font-semibold">SunCart</span>. Built
            by Md Shakibul Islam.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="transition-colors">Privacy</a>
            <a className="transition-colors">Terms</a>
            <a className="transition-colors">Contect</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
