import Button from "./Button";

export default function RelatedCategoriesButton({ buttonName }) {
  return (
    <div className="flex h-full items-center justify-center">
      <Button className=" border-[1px] border-backgroundButtonFilter font-medium font-sans px-5">
        {buttonName}
      </Button>
    </div>
  );
}
