import ImpactPlaceholder from "./ImpactPlaceHolder";
import handshakeSvg from "../../assets/handshake.svg";
import womenhelped from "../../assets/womenhelped.png";
import customersupport from "../../assets/customersupport.png";
import customers from "../../assets/customers.png";

export default function ImpactCreated() {
  return (
    <div className="bg-gray-100 w-screen  h-max lg:py-6 ">
      <div className="w-full text-center pt-12">
        <h2 className="text-lg lg:text-3xl text-green-900">Impact Created</h2>
        <h1 className="text-3xl lg:text-5xl mx-auto py-2 font-bold w-2/3">
          Something Like Partners
        </h1>
      </div>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 px-4 space-y-6 sm:space-y-0 gap-6 lg:gap-4 xl:gap-8 lg:mx-8 justify-between pt-8 pb-16 lg:px-12">
        <ImpactPlaceholder
          imgSrc={womenhelped}
          textValue1={"Helped"}
          numberValue={"550"}
          textValue2={"Women"}
        />
        <ImpactPlaceholder
          imgSrc={customers}
          textValue1={"Served "}
          numberValue={"1000+"}
          textValue2={"Customers"}
        />
        <ImpactPlaceholder
          imgSrc={customersupport}
          textValue={"Always ready to help customer support team"}
          numberValue={""}
          textValue2={""}
        />
      </div>
    </div>
  );
}
