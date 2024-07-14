import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <h2 className=" uppercase font-Lilita text-xl text-dark tracking-tighter">
          crazee-nike
        </h2>
      </Link>
    </div>
  );
}
