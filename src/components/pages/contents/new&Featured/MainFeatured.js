import NavbarSticky from "./NavbarSticky";
import ReleasesFilter from "./ReleasesFilter";
import PickUpFeatured from "./PickUpFeatured";
import Products from "./Products";
import RelatedCategoriesFeatured from "./RelatedCategoriesFeatured";

export default function MainFeatured({ showNavbar, isAtTop }) {
  return (
    <>
      <div className="pb-20 w-full">
        <NavbarSticky showNavbar={showNavbar} isAtTop={isAtTop} />

        <ReleasesFilter />

        <PickUpFeatured />

        <Products />
      </div>

      <RelatedCategoriesFeatured />
    </>
  );
}
