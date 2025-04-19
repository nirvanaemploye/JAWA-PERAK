import EvolutionImg from "../../assets/evolution.jpg";
const Evolution = () => {
  return (
    <>
      <section className="container py-20">
        <div className="flex flex-col">
        <h1 className="font-semibold text-xl sm:text-3xl pb-20 mx-auto flex flex-col">
          02 EVOLUTION OF JAWA PERAK
          <span className="bg-red-600 h-1 w-16 my-4"></span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-around gap-6">
          <div>
            <img src={EvolutionImg} alt="" />
          </div>

          <div className="flex flex-col space-y-6 p-1">
          <div>
            <div className="flex justify-between space-x-4 md:space-x-8 mt-6 text-gray-600 text-sm md:text-lg">
              <span>1946</span>
              <span>2005</span>
              <span>2019</span>
              <span>2023</span>
            </div>
            <div className="bg-red-600 h-1 my-2"></div>
          </div>

            <p className="text-gray-600 text-base sm:text-2xl">
              Whether you are a seasoned rider or a motorcycle enthusiast
              looking for a distinctive and powerful machine, the Jawa Perak
              offers a captivating story and an unparalleled riding experience
              that will leave an indelible mark on your journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Evolution;
