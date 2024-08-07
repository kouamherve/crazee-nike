import { useEffect, useState } from "react";
import { RxChevronUp, RxChevronDown } from "react-icons/rx";

export default function FooterCard({ resources, title, className }) {
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    if (title.toLowerCase() === "resources") {
      setShowDetail(true);
    }
  }, [title]);

  const handleDetail = (e) => {
    e.stopPropagation();
    setShowDetail(!showDetail);
  };

  return (
    <div>
      <hr className={` border-backgroundHr border-[0.5px] ${className}`} />
      <div
        onClick={handleDetail}
        className=" py-6 flex items-center justify-between"
      >
        <h4 className=" text-sm font-medium capitalize">{title}</h4>
        <div className=" text-2xl cursor-pointer w-fit">
          {showDetail ? <RxChevronUp /> : <RxChevronDown />}
        </div>
      </div>
      <div>
        {showDetail && (
          <ul className=" pb-10 text-secondary text-[13px] font-medium space-y-3">
            {resources.map((res) => (
              <li key={res.detail}>{res.detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
