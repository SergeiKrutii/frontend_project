import { useLocation } from "react-router-dom";

import {
  StyledBookItemTmp,
  StyledBookTitleTmp,
} from "./StyledTmpLibraryBookItemDesk";
import SpriteIcon from "components/common/spriteIcon";
import { useMatchMedia } from "helpers/mediaQuery";

const TmpLibraryBookItemDesk = () => {
  const { isDesktop } = useMatchMedia();
  const { pathname } = useLocation();

  const shuldMargin = isDesktop ? "marginLeft: 0px" : "marginLeft: 20px";

  return (
    <StyledBookItemTmp $page={pathname}>
      <SpriteIcon
        style={{ shuldMargin }}
        width="22"
        height="17"
        name={"icon-Flat1"}
        fill={"#898F9F"}
      />
      <StyledBookTitleTmp $page={pathname}>...</StyledBookTitleTmp>
    </StyledBookItemTmp>
  );
};

export default TmpLibraryBookItemDesk;
