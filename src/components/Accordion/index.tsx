import { ReactElement, useState } from "react";
import "../../styles/accordion.scss";
import chevronRight from "../../assets/chevron-right.svg";
import { CardFood } from "../CardFood";
import { Menu } from "../../pages/RestaurantPage";

interface AccordionProps {
  title: string;
  children?: ReactElement;
  content: Menu[];
  openModal: (data: Menu) => void;
  search: string;
}

export const Accordion = ({
  title,
  content,
  search,
  openModal,
}: AccordionProps) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordion-icon");

  function toggleAccordion() {
    setActive(active === "" ? "active" : "");
    setHeight(active === "active" ? "0px" : `100%`);
    setRotate(active === "active" ? "accordion-icon" : "accordion-icon rotate");
  }

  return (
    <div className="accordion-section">
      <button
        className={`accordion-button ${active}`}
        onClick={toggleAccordion}
      >
        <p className="accordion-title">{title}</p>
        <img className={`${rotate}`} src={chevronRight} alt="chevron-right" />
      </button>
      <div style={{ height: `${height}` }} className="accordion-content">
        {content.map((item) => {
          if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return (
              <CardFood
                key={item.name}
                name={item.name}
                img={item.image}
                price={item.price}
                onClick={() => openModal(item)}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
