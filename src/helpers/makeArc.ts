export interface ArcProps {
  imgSrc?: number[];
  className?: string;
  howMany?: number;
  boxHeight?: number;
  boxWidth?: number;
  angleCorrection?: number;
  heightCorrection?: number;
  widthCorrection?: number;
}

function degToRadian(deg: number) {
  return deg * (Math.PI / 180);
}

function getXcoord(deg: number, hypo: number) {
  const radA = degToRadian(deg);
  const sinA = Math.sin(radA);
  return sinA * hypo;
}

function getYcoord(deg: number, hypo: number) {
  const radA = degToRadian(deg);
  const cosA = Math.cos(radA);
  return cosA * hypo;
}

function getTrigoXY(deg: number, height: number, width: number) {
  const y = getYcoord(deg, height);
  const x = getXcoord(deg, width);
  return { x, y };
}

function makeArc(
  imgSrc: number[],
  howMany: number = 7,
  boxHeight: number = 60,
  boxWidth: number = 50,
  angleCorrection: number = 3,
  heightCorrection: number = 0,
  widthCorrection: number = -2
) {
  const circles = [];
  for (let i = 0; i <= howMany - 1; i++) {
    const angle =
      (90 / howMany + 1) * i -
      ((90 / howMany) * (howMany / 2) - angleCorrection);
    const position = getTrigoXY(angle, boxHeight * -1, boxWidth);
    circles.push({
      position: "absolute",
      top: position.y + boxHeight + heightCorrection,
      left: position.x + boxWidth + widthCorrection,
      year: imgSrc[i],
    });
  }

  return circles;
}

export default makeArc;
