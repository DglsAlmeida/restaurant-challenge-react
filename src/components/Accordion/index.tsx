import { ReactElement, useRef, useState } from 'react';
import '../../styles/accordion.scss';
import chevronRight from '../../assets/chevron-right.svg';

interface AccordionProps {
  title: string;
  children: ReactElement;
}

export const Accordion = ({ title, children }: AccordionProps) => {

  const [ active , setActive ] = useState("");
  const [ height, setHeight ] = useState("0px");
  const [ rotate, setRotate ] = useState("accordion-icon");

  const content = useRef<any>(null)

  function toggleAccordion() {
    setActive(active === "" ? "active" : "");
    setHeight(active === "active" ? "0px" : `${content.current?.scrollHeight}px`);
    setRotate(active === "active" ? "accordion-icon" : 'accordion-icon rotate');
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
      <div ref={content} style={{ maxHeight: `${height}`}} className="accordion-content">
        {children}
      </div>
    </div>
  );
};