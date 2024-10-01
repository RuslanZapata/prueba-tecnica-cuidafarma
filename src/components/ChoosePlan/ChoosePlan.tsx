import Cards from "../Cards/Cards";
import "../../sass/components/chooseplan/chooseplan.scss";
import { cardProps } from "../../core/constants";

const ChoosePlan = () => {
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
        {cardProps.map(({title, items, price}, index) => (
          <Cards key={index} title={title} items={items} price={price}/>
        ))}
      </div>
    </div>
  );
};

export default ChoosePlan;
