import img1 from "../../assets/gallery-1.jpg";
import img2 from "../../assets/gallery-2.jpg";
import img3 from "../../assets/gallery-3.jpg";
import img4 from "../../assets/gallery-4.jpg";
import img5 from "../../assets/gallery-5.jpg";
import img6 from "../../assets/gallery-6.jpg";
const Gallery = () => {
  return (
    <>
      <section className="container py-12 font-poppins">
        <h1 className="font-semibold text-3xl pb-20 flex flex-col">
          04 GALLERY <span className="bg-red-600 h-1 w-16 mt-4"></span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8">
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-8">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
