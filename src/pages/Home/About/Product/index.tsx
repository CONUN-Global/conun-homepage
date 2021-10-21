import Card from "@/components/Card";
import Button from "@/components/Button";
import DriveIcon from "@/assets/icons/drive_icon.svg";
import { CardProps } from "@/components/Card";

const PRODUCT_CARD = [
  {
    header: "Conun Drive",
    image: <DriveIcon />,
    title: "DECENTRALIZED SUPERCOMPUTING POWER",
    description:
      "Explore free and private digital assets from users across the globe in The Drive desktop application. The platform is easy. Create a profile, public or anonymous, and explore and share content. Users can also monetize their assets - an easy way to earn while you sleep.",
    btnMsg: "Learn more",
  },
];

function Product() {
  return (
    <div>
      <div>
        <Button noStyle>Drive</Button>
        <Button noStyle>Metacon Extension</Button>
        <Button noStyle>Metacon Wallet</Button>
        <Button noStyle>DSC</Button>
      </div>

      <div>
        {PRODUCT_CARD.map((card: CardProps, i) => {
          return (
            <Card
              key={i}
              header={card.header}
              image={card.image}
              title={card.title}
              description={card.description}
              horizontal
            />
          );
        })}
      </div>
    </div>
  );
}
export default Product;
