import { useMediaQuery } from "@react-hook/media-query";

function useDetactMobile() {
  const isMobile = useMediaQuery("only screen and (max-width: 1204px)");
  return isMobile;
}
export default useDetactMobile;
