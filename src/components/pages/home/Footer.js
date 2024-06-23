import { useState } from "react";
import FooterCard from "../../reusable-ui/FooterCard";
import { resources } from "../navbar/menus/helpers";

export default function Footer() {
  const [showDetail, setShowDetail] = useState(false);

  const handleDetail = () => {
    setShowDetail(!showDetail);
  };
  const resource = resources;

  return (
    <div className="px-6 py-12">
      <div>
        <FooterCard
          showDetail={showDetail}
          handleDetail={handleDetail}
          title="resources"
          resources={resource}
          className=" py-6"
        />
      </div>
    </div>
  );
}
