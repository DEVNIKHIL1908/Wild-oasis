import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
function DarkModeToggle() {
  const { isDarkMode, toggleMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleMode}>
     {isDarkMode ?  <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
