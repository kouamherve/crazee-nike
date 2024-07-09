import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function JordanMenu() {
  const jordans = [
    { title: "Featured" },
    { title: "Collections" },
    { title: "Men" },
    { title: "Women" },
    { title: "Kids" },
    { title: "Accessories" },
  ];
  return (
    <div className=" mt-4 py-6 font-medium">
      <Link className=" py-2 text-[22px] ">Jordan</Link>
      <div className=" pt-8 pb-40 text-base text-secondary">
        <div className="flex flex-col gap-5">
          <Link>New Arrivals</Link>
          {/* <Link>Up to 50 % Off Select Style </Link> */}
        </div>
        <ul className=" py-5 space-y-5">
          {jordans.map((n) => (
            <li key={n.title}>
              <div className="flex items-center justify-between">
                <h3 className=" font-medium capitalize">{n.title}</h3>
                <RxChevronRight className=" text-black text-[22px]" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
