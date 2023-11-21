import { useMediaQuery } from "@mui/material";

export const useMatchMedia = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1279px)");
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return { isMobile, isDesktop, isTablet };
};
