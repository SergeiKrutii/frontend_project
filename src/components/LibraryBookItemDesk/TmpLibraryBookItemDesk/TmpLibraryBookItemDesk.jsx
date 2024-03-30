import {
  StyledBookItemTmp,
  StyledBookTitleTmp,
} from "./StyledTmpLibraryBookItemDesk";
import SpriteIcon from "components/common/spriteIcon";
import { useMatchMedia } from "helpers/mediaQuery";

const TmpLibraryBookItemDesk = () => {
  const { isDesktop } = useMatchMedia();
  const shuldMargin = isDesktop ? "marginLeft: 0px" : "marginLeft: 20px";
  return (
    <StyledBookItemTmp>
      <SpriteIcon
        style={{ shuldMargin }}
        width="22"
        height="17"
        name={"icon-Flat1"}
        fill={"#898F9F"}
      />
      <StyledBookTitleTmp>...</StyledBookTitleTmp>
    </StyledBookItemTmp>
  );
};

export default TmpLibraryBookItemDesk;
