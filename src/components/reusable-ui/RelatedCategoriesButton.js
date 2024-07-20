import Button from "./Button";

export default function RelatedCategoriesButton({ buttonName }) {
  return (
    <div className="flex h-full items-center justify-center">
      <Button className=" border-[0.5px] border-black font-semibold px-4">
        {buttonName}
      </Button>
    </div>
  );
}
