import Cards from "../../atoms/cards/cards";
import "../../sass/components/chooseplan/chooseplan.scss";

const ChoosePlan = () => {
  const leftCard = [
    "Unlimited bandwitch",
    "Encrypted connection",
    "Yes trafic logs",
  ];
  const centerCard = [
    "Unlimited bandwitch",
    "Encrypted connection",
    "Yes trafic logs",
    "Works on all devices",
    "Connect anyware",
  ];
  const rightCard = [
    "Unlimited bandwitch",
    "Encrypted connection",
    "Yes trafic logs",
    "Works on all devices",
    "Connect anyware",
    "Get new features",
  ];
  return (
    <div className="choose-plan">
      <div className="choose-plan__top">
        <div className="choose-plan__title">Choose your plan</div>
        <div className="choose-plan__paragraph">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </div>
      </div>
      <div className="choose-plan__bottom">
        <Cards title="Free"items={leftCard} price="Free"/>
        <Cards title="Standard plan" items={centerCard} price="9" />
        <Cards title="Premium plan" items={rightCard} price="12" />
      </div>
    </div>
  );
};

export default ChoosePlan;
