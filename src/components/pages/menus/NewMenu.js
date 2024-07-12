import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function NewMenu() {
  const news = [
    { title: "Featured" },
    { title: "Get Set for School" },
    { title: "Shop Classics" },
    { title: "Explore" },
  ];
  return (
    <div className="font-medium">
      <Link to="new" className=" py-2 text-[22px] ">
        New & Featured
      </Link>
      <div className=" pt-8 pb-40 text-base text-paragraph_color">
        <div className="flex flex-col gap-5">
          <Link>New Arrivals</Link>
          <Link>Up to 50 % Off Select Style </Link>
        </div>
        <ul className=" py-5 space-y-5">
          {news.map((n) => (
            <li key={n.title}>
              <div className="flex items-center justify-between">
                <h3 className=" font-medium">{n.title}</h3>
                <RxChevronRight className=" text-[22px]" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
