import { useMediaQuery } from "@react-hook/media-query";

function useDetectMbile() {
  const isMobile = useMediaQuery("only screen and (max-width: 1204px)");
  return isMobile;
}
export default useDetectMbile;
