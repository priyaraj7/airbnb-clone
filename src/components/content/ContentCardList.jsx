import React from "react";
import ContentCard from "./ContentCard.jsx";
import image4 from "../../assets/4.webp";
import image5 from "../../assets/5.webp";
import image6 from "../../assets/6.webp";
import image7 from "../../assets/7.webp";
import "./content.css";

const masterCardList = [
  {
    img: image4,
    paragraph: "Mix secret sangria with Pedro from Lison",
  },
  {
    img: image5,
    paragraph: "Stretch. Breathe. Relax. Yoga class with friends",
  },
  {
    img: image6,
    paragraph: "Meditate to music with Janice from Amsterdam",
  },
  {
    img: image7,
    paragraph: "Support African penguins by drawing with Jon",
  },
];

function CardList() {
  return (
    <React.Fragment>
      <div className="footer-grid">
        {masterCardList.map((card, index) => {
          return (
            <ContentCard
              img={card.img}
              paragraph={card.paragraph}
              key={index}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default CardList;
