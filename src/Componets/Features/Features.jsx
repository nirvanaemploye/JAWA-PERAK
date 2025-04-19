import FeaturesImg from "../../assets/features.jpg";
const Features = () => {
  return (
    <>
      <section className=" py-12 bg-black text-white">
        <div className="container">
          <div className=" grid grid-cols-1 lg:grid-cols-2 items-center justify-around ">
            <div>
              <img src={FeaturesImg} alt="" className="pb-10 sm:pb-0" />
            </div>
            <div className=" w-9/12 mx-auto flex flex-col">
              <h1 className="font-semibold text-base sm:text-3xl pb-20 flex flex-col">
                03 FEATURES <span className="bg-red-600 h-1 w-16 mt-4"></span>
              </h1>
              <ul className="space-y-7 text-start">
                <li className="flex  ">
                  {" "}
                  <span className="bg-red-600 h-4 w-1 me-4"></span>
                  SINGLE CYLINDER, FOUR STROKE, LIQUID COOLED, SI ENGINE, DOHC
                  BSVVI COMPLIANT
                </li>
                <li className="flex items-center"><span className="bg-red-600 h-4 w-1 me-4"></span>CONSTANT MESH 6 SPPEED</li>
                <li className="flex items-center"><span className="bg-red-600 h-4 w-1 me-4"></span>MONO SHOCK ABSORBER, 7 STEP ADJUSTABLE</li>
                <li className="flex items-center"><span className="bg-red-600 h-4 w-1 me-4"></span>DISC WITH FLOATING CALIPER AND ABS</li>
                <li className="flex items-center"><span className="bg-red-600 h-4 w-1 me-4"></span>DOUBLE CRADLE TUBULAR FRAME</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
