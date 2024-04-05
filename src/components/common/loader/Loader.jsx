import ContentLoader from "react-content-loader";
import "./style.css";
import { useMatchMedia } from "helpers/mediaQuery";

const Loader = (rest) => {
  const { isDesktop, isTablet } = useMatchMedia();
  const loaderWidth = isDesktop ? 1100 : isTablet ? 650 : 230;

  return (
    <ContentLoader
      height="900"
      width={loaderWidth}
      viewBox="0 0 1500 1100"
      backgroundColor="#d6d9e3"
      foregroundColor="#ecebeb"
      speed={3}
      {...rest}
    >
      <rect x="0" y="15" rx="1" ry="1" width="300" height="40" />
      <rect x="0" y="80" rx="2" ry="2" width="1500" height="60" />
      <rect x="0" y="160" rx="2" ry="2" width="1500" height="60" />
      <rect x="0" y="240" rx="2" ry="2" width="1500" height="60" />

      <rect x="0" y="360" rx="1" ry="1" width="300" height="40" />
      <rect x="0" y="420" rx="2" ry="2" width="1500" height="60" />
      <rect x="0" y="500" rx="2" ry="2" width="1500" height="60" />
      <rect x="0" y="590" rx="2" ry="2" width="1500" height="60" />

      <rect x="0" y="700" rx="1" ry="1" width="300" height="40" />
      <rect x="0" y="760" rx="2" ry="2" width="1500" height="60" />
      <rect x="0" y="840" rx="2" ry="2" width="1500" height="60" />
      <rect x="0" y="920" rx="2" ry="2" width="1500" height="60" />
    </ContentLoader>
  );
};

export default Loader;
