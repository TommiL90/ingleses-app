import { divIcon } from "leaflet";
import { RiMapPin3Line } from "react-icons/ri";
import ReactDOMServer from "react-dom/server";

const AddressIcon = (number: number) => {
  const iconMarkup = (
    <div className="relative">
      <RiMapPin3Line size={32} />
      <p className="absolute left-[97%] top-[55%] -mt-[3px] flex h-5 w-5 -translate-x-[29%] -translate-y-1/2 transform items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
        {number}
      </p>
    </div>
  );

  const iconHtml = ReactDOMServer.renderToString(iconMarkup);

  const customIcon = divIcon({
    className: "custom-pin",
    html: iconHtml
  });

  return customIcon;
};

export default AddressIcon;
