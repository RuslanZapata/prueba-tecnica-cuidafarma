import React from "react";
import Premim from "../../assets/Premium1.png";
import TickCircle from "../../assets/icons/TickCircle";
interface CardProps {
  items: string[];
  title: string;
  price: string;
}
const Cards: React.FC<CardProps> = ({ items, title, price }) => {
  return (
    <div className="cards">
      <div className="cards__top">
        <img src={Premim} alt="" />
        <strong className="cards__title">{title}</strong>
      </div>
      <ul className="cards__center">
        {items.map((item, index) => (
          <li key={index}>
            <TickCircle />
            {item}
          </li>
        ))}
      </ul>
      <div className="cards__option">
        <div className="cards__option__text">
          <strong>{price !== "Free" && '$'} {price} {price !== "Free" && <span>/</span>}</strong>
          {price !== "Free" && <span> mo</span>}
        </div>
        <button className="cards__option__button">Select</button>
      </div>
    </div>
  );
};

export default Cards;
