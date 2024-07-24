import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <h2 className=" uppercase font-Lilita text-lg text-dark/80 tracking-tighter">
          crazee-nike
        </h2>
      </Link>
    </div>
  );
}
