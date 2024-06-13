import { chooseUs } from "../constants";

const Card2 = () => {
  return (
    <>
      {chooseUs.map((item, index) => (
        <div
          key={index}
          className={`w-[450px] h-[350px] rounded-xl py-10 px-8 flex flex-col ${
            item.number === "02" ? "bg-tertiary" : "bg-primary"
          }`}
        >
          <h2
            className={`text-6xl font-bold mb-4 ${
              item.number === "02" ? "text-primary" : "text-tertiary"
            }`}
          >
            {item.number}
          </h2>
          <h3
            className={`text-2xl font-bold mb-4 ${
              item.number === "02" ? "text-primary" : "text-gray-600"
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`text-lg ${
              item.number === "02" ? "text-primary" : "text-gray-600"
            }`}
          >
            {item.text}
          </p>
        </div>
      ))}
    </>
  );
};

export default Card2;
