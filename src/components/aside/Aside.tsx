import AsideElement from "./AsideElement";
import { MdQueryStats } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import "./Aside.scss";

const Aside = () => {
  return (
    <aside>
      <h1 className="title">Admin</h1>
      <AsideElement logo={<MdQueryStats />} nomCategorie="Statistiques" />
      <AsideElement logo={<MdOutlineWatchLater />} nomCategorie="Coming soon" />
    </aside>
  );
};
export default Aside;
