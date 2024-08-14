import s from "./Main.module.scss";
import { TEXT } from "../Svgs/Svgs";
import bulb1 from "../../assets/bulb-dynamic-color 1.png";
import bulb2 from "../../assets/bulb-dynamic-color 2.png";
import bulb3 from "../../assets/bulb-dynamic-color 3.png";
import bulb4 from "../../assets/bulb-dynamic-color 4.png";
import ThreeDPanda from "../3DPanda/3DPanda";

const Main = () => {
  return (
    <div className={s.main}>
      <h2>#ВАШ ПРОЕКТ В НАШИХ ЛАПКАХ</h2>
      <img className={s.bulb1} src={bulb1} alt="bulb1" />
      <img className={s.bulb2} src={bulb2} alt="bulb2" />
      <img className={s.bulb3} src={bulb3} alt="bulb3" />
      <img className={s.bulb4} src={bulb4} alt="bulb4" />
      <div className={s.panda}>
        <ThreeDPanda />
      </div>
      <div className={s.texts}>
        <TEXT />
        <TEXT />
        <TEXT />
        <TEXT />
        <TEXT />
      </div>
    </div>
  );
};
export default Main;
