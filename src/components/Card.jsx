import { experience } from "../constants";
``;
const Card = () => {
  return (
    <>
      {experience.map((ex, index) => (
        <div
          key={index}
          className="relative w-[300px] h-[450px] rounded-xl my-14"
        >
          <div
            key={index}
            className="absolute w-full h-full text-primary p-6 bg-black/40 rounded-xl"
          >
            <h2 className="text-lg font-semibold mb-6">{ex.title}</h2>
            <p className="text-xs">{ex.text}</p>
          </div>
          <img src={ex.image} alt="experience 1" className="w-full h-full object-cover rounded-xl"/>
        </div>
      ))}
    </>
  );
};

export default Card;
