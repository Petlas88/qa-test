import React, {useState} from 'react'
import {AccordionContainer} from './style'
import AccordionItem from './AccordionItem'
import {AccordionDataType} from '../../types/accordion-data-type'

interface AccordionProps {
  options: AccordionDataType[];
}

const Accordion = ({ options }: AccordionProps) => {
  const [activeItemId, setActiveItemId] = useState<string | null>("");

  const handleClick = (id: string) => {
    id === activeItemId ? setActiveItemId(null) : setActiveItemId(id);
  };

  const generateAccordionItems = () =>
    options.map((item) => {
      return (
        <AccordionItem
          key={`accordion-item-${item.id}`}
          isOpen={item.id === activeItemId}
          onClick={() => handleClick(item.id)}
          {...item}
        />
      );
    });

  return <AccordionContainer>{generateAccordionItems()}</AccordionContainer>;
};

export default Accordion;
