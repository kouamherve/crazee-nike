import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function NewMenu() {
  const news = [
    { title: "Featured" },
    { title: "Trending" },
    { title: "Shop Classics" },
    { title: "Explore" },
  ];
  return (
    <div>
      <Link>New & Featured</Link>
      <div>
        <Link>New Arrival</Link>
        <Link>Up to 50 % Off Select Style </Link>
      </div>
      <ul>
        {news.map((n) => (
          <li key={n.title}>
            <div className="flex items-center justify-between">
              <h3 className=" font-medium capitalize">{n.title}</h3>
              <RxChevronRight />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
