import SpriteIcon from "components/common/spriteIcon";
import { Link } from "react-router-dom";

const GetBackButton = () => {
  return (
    <div>
      <Link to={"/traning"}>
        <SpriteIcon name={"icon_getBack"} />
      </Link>
    </div>
  );
};

export default GetBackButton;
