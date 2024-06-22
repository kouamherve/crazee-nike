import { RxChevronUp, RxChevronDown } from "react-icons/rx";

export default function FooterCard({
  showDetail,
  handleDetail,
  resources,
  title,
  className,
}) {
  return (
    <div>
      <hr className={className} />
      <div
        onClick={handleDetail}
        className=" py-6 flex items-center justify-between"
      >
        <h4 className=" text-sm font-medium capitalize">{title}</h4>
        <div className=" text-2xl cursor-pointer w-fit">
          {showDetail ? <RxChevronDown /> : <RxChevronUp />}
        </div>
      </div>
      {showDetail && (
        <ul className=" text-secondary text-sm font-medium space-y-3">
          {resources.map((res) => (
            <li key={res.detail}>{res.detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
