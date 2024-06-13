import Card2 from "./Card2";

const ChooseUs = () => {
  return (
    <div className="w-full h-full bg-[#F4F4F4] flex flex-wrap gap-12 justify-center items-center p-4 sm:p-24">
      <div className="w-[450px] h-[350px] rounded-xl py-10 px-14 sm:px-8 flex-shrink-0 flex flex-col">
        <h1 className="text-6xl font-bold mb-4 text-secondary">Why Choose Us?</h1>
        <p className="text-lg text-gray-600 mb-4">
          Whether you're looking to switch to solar energy or upgrade your cable
          services, our sales and marketing company is here to help.
        </p>
      </div>
      <Card2 />
    </div>
  );
};

export default ChooseUs;
