import Cards from "../../atoms/cards/cards";
import "../../sass/components/chooseplan/chooseplan.scss";

const ChoosePlan = () => {
  const plans = [
    {
      title: "Free",
      items: [
        "Unlimited bandwitch",
        "Encrypted connection",
        "Yes trafic logs",
      ],
      preci: 'Free'
    },
    {
      title: "Standard plan",
      items: [
        "Unlimited bandwitch",
        "Encrypted connection",
        "Yes trafic logs",
        "Works on all devices",
        "Connect anyware",
      ],
      preci: '9'
    },
    {
      title: "Premium plan",
      items: [
        "Unlimited bandwitch",
        "Encrypted connection",
        "Yes trafic logs",
        "Works on all devices",
        "Connect anyware",
        "Get new features",
      ],
      preci: '12'
    },
  ]

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
        {plans.map(({title, items, preci}) => (
          <Cards title={title} items={items} price={preci}/>
        ))}
      </div>
    </div>
  );
};

export default ChoosePlan;
