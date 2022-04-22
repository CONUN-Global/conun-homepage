import { useMediaQuery } from "@react-hook/media-query";

function useDetectMobile() {
  const isMobile = useMediaQuery("only screen and (max-width: 800px)");
  return isMobile;
}
export default useDetectMobile;
