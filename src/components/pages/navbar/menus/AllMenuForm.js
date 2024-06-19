import { Link } from "react-router-dom";

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
        <button className=" px-4 py-2 bg-black text-white rounded-full border-2 border-black/60">
          Join Us
        </button>
        <button className=" px-4 py-2 bg-white text-black rounded-full border-2 border-secondary/60">
          Sign In
        </button>
      </div>
    </form>
  );
}
