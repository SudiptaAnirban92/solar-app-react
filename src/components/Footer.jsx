import { logo } from "../assets";
import { navLinks, services } from "../constants";
import { phone, message, instagram, twitter, facebook } from "../assets";

const Footer = () => {
  return (
    <div className="w-full h-full bg-secondary text-primary">
      <div className="max-w-[1420px] mx-auto px-10 xl:px-20 py-14">
        <p className="font-extralight">
          Whether you're looking to switch to solar energy or upgrade your cable
          services, our sales and marketing company is here to help. Contact us
          today to start saving on your energy bills and enjoy reliable
          connectivity from the leading solar and cable companies in the DC,
          Maryland, and Virginia area. Snag the best deals with us and embrace a
          brighter and more connected future.
        </p>
        {/* grid */}
      </div>
      <hr className="border-b-[0.05rem] border-gray-700" />
      <div className="max-w-[1420px] mx-auto px-0 lg:px-10 py-14 grid grid-cols-7 font-extralight">
        {/* logo */}
        <div className="py-6 lg:py-10 px-12 col-span-7 sm:col-span-4 lg:col-span-3 lg:border-r-[0.05rem] border-b-[0.05rem] lg:border-b-0 border-gray-700 flex flex-col">
          <img
            src={logo}
            alt="footer logo"
            className="w-[148px] h-[63px] mb-10"
          />
          <p className="pr-20">
            Contact us today to explore our services and take advantage of the
            great deals available from the leading solar and cable companies in
            the DC, Maryland, and Virginia area. Let us be your trusted partner
            in finding the best solutions for your energy and connectivity
            needs.
          </p>
        </div>
        {/* quick links */}
        <div className="py-6 lg:py-10 px-12 col-span-7 sm:col-span-3 lg:col-span-1 lg:border-r-[0.05rem] border-b-[0.05rem] lg:border-b-0  border-gray-700">
          <p className="font-normal mb-8">Quick Links</p>
          <ul className="list-none">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`${index === navLinks.length - 1 ? "mb-0" : "mb-3"}`}
              >
                <a href="/" className="hover:underline hover:text-tertiary">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* services */}
        <div className="py-6 lg:py-10 px-12 col-span-7 sm:col-span-4 lg:col-span-1 lg:border-r-[0.05rem] border-b-[0.05rem] sm:border-b-0 border-gray-700">
          <p className="font-normal mb-8">Services</p>
          <ul>
            {services.map((service, index) => (
              <li
                key={index}
                className={`${index === service.length - 1 ? "mb-0" : "mb-3"}`}
              >
                <a href="/" className="hover:underline hover:text-tertiary">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* contacts */}
        <div className="py-6 lg:py-10  px-12 col-span-7 sm:col-span-3 lg:col-span-2">
          <p className="font-normal mb-8">Contact</p>
          <div className="flex items-center mb-4">
            <img src={phone} alt="phone" />
            <p className="ml-3">0123456789</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={message} alt="phone" />
            <p className="ml-3">companyname@gmail.com</p>
          </div>
          <div className="flex items-center justify-start">
            <img src={facebook} alt="facebook" className="mr-4" />
            <img src={twitter} alt="twitter" className="mr-4" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
      <hr className="border-b-[0.05rem] border-gray-700" />
      <p className="max-w-[700px] mx-auto p-4 flex justify-center items-center tracking-wider font-light text-xs sm:text-sm lg:text-lg">
        © 2023 Company Name - developed by Roots Digital Marketing
      </p>
    </div>
  );
};

export default Footer;
