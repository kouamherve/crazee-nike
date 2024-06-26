import { Link } from "react-router-dom";
import Button from "../../../reusable-ui/Button";

export default function AllMenuForm() {
  return (
    <form className=" py-12">
      <div>
        <p className=" text-lg text-secondary font-medium">
          Become a C-N member for the best products, inspiration and stories in
          sport.{" "}
          <span className=" text-black">
            <Link to="">Learn more</Link>
          </span>
        </p>
      </div>
      <div className=" py-6 font-medium text-[15px] space-x-2">
        <Button className="bg-black border-black/60 text-white">Join Us</Button>
        <Button className=" bg-white border-secondary/60">Sign In</Button>
      </div>
    </form>
  );
}
