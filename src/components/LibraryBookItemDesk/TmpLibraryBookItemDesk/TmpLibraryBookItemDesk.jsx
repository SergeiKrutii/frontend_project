import PropTypes from "prop-types";
import {
  StyledBookItemTmp,
  StyledBookTitleTmp,
  StyledBookAuthorTmp,
  StyledBookYearTmp,
  StyledBookPageTmp,
  StyledChapterLibraryTableDesk,
  StyledTextTmp,
  StyledPillarTitleTmp,
  StyledPillarAuthorTmp,
  StyledPillarDateTmp,
  StyledPillarPageTmp,
} from "./StyledTmpLibraryBookItemDesk";
import SpriteIcon from "components/common/spriteIcon/SpriteIcon";
import ModalBtn from "components/common/modalBtn/ModalBtn";
import StarRating from "components/common/starRating/StarRating";

const TmpLibraryBookItemDesk = () => {
  return (
    <div style={{ marginBottom: 50 }}>
      <SpriteIcon name={"icon_traningLineDesc"} />
      <StyledBookItemTmp>
        <SpriteIcon
          style={{ marginLeft: 20 }}
          width="22"
          height="17"
          name={"icon-Flat1"}
        />
        <StyledBookTitleTmp>...</StyledBookTitleTmp>
      </StyledBookItemTmp>
      <SpriteIcon name={"icon_traningLineDesc"} />
    </div>
  );
};
TmpLibraryBookItemDesk.propTypes = {};

export default TmpLibraryBookItemDesk;
