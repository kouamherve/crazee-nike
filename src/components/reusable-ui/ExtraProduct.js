import { GiAlliedStar } from "react-icons/gi";
import { SiJordan } from "react-icons/si";

export default function ExtraProduct({ title }) {
  return (
    <div className="flex items-center gap-3">
      {title === "Jordan" ? (
        <SiJordan className=" text-2xl" />
      ) : (
        <GiAlliedStar className=" text-2xl" />
      )}
      <span className=" text-base font-medium">{title}</span>
    </div>
  );
}
