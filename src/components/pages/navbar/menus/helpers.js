import JordanMenu from "./JordanMenu";
import KidsMenu from "./KidsMenu";
import MenMenu from "./MenMenu";
import NewMenu from "./NewMenu";
import WomenMenu from "./WomenMenu";

export const allMenus = [
  // { id: 1, title: "running", content: <RunningMenu /> },
  { id: 1, title: "new & featured", content: <NewMenu /> },
  { id: 2, title: "men", content: <MenMenu /> },
  { id: 3, title: "women", content: <WomenMenu /> },
  { id: 4, title: "kids", content: <KidsMenu /> },
  { id: 5, title: "jordan", content: <JordanMenu /> },
];
