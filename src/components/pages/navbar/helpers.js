import JordanMenu from "../jordan/JordanMenu";
import KidsMenu from "../kids/KidsMenu";
import MenMenu from "../men/MenMenu";
import NewMenu from "../new & featured/NewMenu";
import WomenMenu from "../women/WomenMenu";

export const allMenus = [
  // { id: 1, title: "running", content: <RunningMenu /> },
  { id: 1, title: "new & featured", content: <NewMenu /> },
  { id: 2, title: "men", content: <MenMenu /> },
  { id: 3, title: "women", content: <WomenMenu /> },
  { id: 4, title: "kids", content: <KidsMenu /> },
  { id: 5, title: "jordan", content: <JordanMenu /> },
];
