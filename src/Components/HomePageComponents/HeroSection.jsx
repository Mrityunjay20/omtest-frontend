import HeroButton from "./heroButton";
import Adrak from "../../assets/800x800/Adrak.png";
export default function HeroSection() {
  return (
    <>
      <div className="w-full h-max">
        <div className="w-3/4 md:w-4/5 mx-auto bg-green-900 rounded-xl md:rounded-full flex my-24 flex-col md:flex-row">
          <div className="w-full md:w-3/5 md:h-full rounded-t-xl md:rounded-full">
            <img
              className="w-full  h-64 md:h-[550px] rounded-t-xl object-cover md:rounded-full"
              src={Adrak}
              alt="product image"
            />
          </div>
          <div className="flex flex-col justify-center text-white w-full md:w-1/3 rounded-xl md:rounded-full align-middle text-center md:text-left p-4 sm:p-6 md:p-8">
            {/* <h1 className="text-yellow-800 md:text-lg lg:text-2xl">Lorem Ipsum</h1> */}
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl my-6 w-11/12">
              स se संस्कृति, <br /> स se स्वाद{" "}
            </h1>
            <HeroButton hyperLink={"/product"} buttonText="Shop Now!" />
          </div>
        </div>
      </div>
    </>
  );
}
