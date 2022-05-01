import React, {useEffect, useState} from 'react'
import {AccordionContainer, ShowMoreButton} from './style'
import AccordionItem from './AccordionItem'
import {AccordionDataType} from '../../types/accordion-data-type'

interface AccordionProps {
  options: AccordionDataType[]; // To make the component reusable it receives data to render as a prop
  numberOfOptionsShown?: number // Also it can receive a number of options to show initially as a prop
  title?: string // Also it can receive a title as a prop
}

const Accordion = ({ options, numberOfOptionsShown = 5, title }: AccordionProps) => {
  const [activeItemId, setActiveItemId] = useState<string | null>("");
  const [optionsShown, setOptionsShown] = useState(numberOfOptionsShown);
  const [hasShowMore, setHasShowMore] = useState(false);


  // Check if the accordion has more options to show to render the show more button
  useEffect(() => {
    if (options.length > optionsShown) {
      setHasShowMore(true)
    }
  }, [])

  const handleOpen = (id: string) => {
    id === activeItemId ? setActiveItemId(null) : setActiveItemId(id);
  };

  const handleShowMoreOrLess = () => {
    options.length > optionsShown
      ? setOptionsShown(options.length)
      : setOptionsShown(numberOfOptionsShown);
  };

  const generateAccordionItems = () =>
    options.slice(0, optionsShown).map((item) => {
      return (
        <AccordionItem
          key={`accordion-item-${item.id}`}
          isOpen={item.id === activeItemId}
          onClick={() => handleOpen(item.id)}
          testId={item.id}
          {...item}
        />
      );
    });

  return (
    <AccordionContainer data-testid={'accordion-container'}>
      {title && <h2>{title}</h2>}
      {generateAccordionItems()}
      {hasShowMore && (
        <ShowMoreButton onClick={handleShowMoreOrLess} data-testid={'show-more-button'}>{
          options.length > optionsShown ? `Vis ${options.length - optionsShown} til` : 'Vis mindre'}</ShowMoreButton>
      )}
    </AccordionContainer>
  );
};

export default Accordion;
