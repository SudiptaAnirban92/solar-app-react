import { services1, services2 } from "../constants";
import { service } from "../assets";

const Card3 = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center gap-8 justify-center flex-wrap">
      <div className="flex flex-wrap flex-col text-gray-600 mb-8 gap-8 xl:order-1 order-2">
        {services1.map((service, index) => (
          <div
            key={index}
            className="w-[320px] sm:w-[400px] h-[300px] p-6 rounded-xl bg-[#F4F4F4]"
          >
            <img src={service.icon} alt="service image" className="mb-6" />
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="mr-20">{service.text}</p>
          </div>
        ))}
      </div>
      <div className="mb-8 xl:order-2 order-1 md:order-3">
        <img
          src={service}
          alt="service image"
          className="sm:h-[500px] object-cover"
        />
      </div>
        <div className="flex flex-wrap flex-col text-gray-600 mb-8 gap-8 order-3 md:order-2">
          {services2.map((service, index) => (
            <div
              key={index}
              className="w-[320px] sm:w-[400px] h-[300px] p-6 rounded-xl bg-[#F4F4F4]"
            >
              <img src={service.icon} alt="service image" className="mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="mr-20">{service.text}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Card3;
