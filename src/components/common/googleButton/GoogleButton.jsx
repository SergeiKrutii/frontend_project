import SpriteIcon from "../spriteIcon/SpriteIcon";
import StyledGoogleButton from "./StyledGoogleButton";

const GoogleButton = () => {
  return (
    <StyledGoogleButton type="button">
      <SpriteIcon name={"icon_google"} />
      Google
    </StyledGoogleButton>
  );
};

export default GoogleButton;
