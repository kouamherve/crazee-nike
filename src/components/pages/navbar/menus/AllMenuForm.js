import { Link } from "react-router-dom";
import Button from "../../../reusable-ui/Button";

export default function AllMenuForm() {
  return (
    <form className=" py-12">
      <div>
        <p className=" text-[17px] text-paragraph_color font-medium">
          Become a C-N member for the best products, inspiration and stories in
          sport.{" "}
          <span className=" text-white font-bold">
            <Link to="">Learn more</Link>
          </span>
        </p>
      </div>
      <div className=" py-6 font-medium text-[15px] space-x-2">
        <Button className="bg-white border-[0.5px] border-white text-dark">
          Join Us
        </Button>
        <Button className=" bg-dark text-white border-[0.5px] border-primary">
          Sign In
        </Button>
      </div>
    </form>
  );
}
