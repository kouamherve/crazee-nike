import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="font-Montserrat max-w-3xl h-screen flex flex-col items-center justify-center">
      <h1 className=" text-3xl font-medium py-4">404 Not Found!</h1>
      <Link to="/">
        <button className=" px-4 py-2 bg-black border-2 border-black text-white font-medium rounded-full ">
          Back Home
        </button>
      </Link>
    </div>
  );
}
