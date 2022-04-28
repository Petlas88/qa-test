import React from 'react'
import {
  AccordionItemButton,
  AccordionItemContentText,
  AccordionItemContentWrapper,
  AccordionItemWrapper,
} from './style'

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <AccordionItemWrapper>
      <AccordionItemButton onClick={onClick} isOpen={isOpen}>
        {title}
      </AccordionItemButton>
      {isOpen && (
        <AccordionItemContentWrapper isOpen={isOpen}>
          <AccordionItemContentText>{content}</AccordionItemContentText>
        </AccordionItemContentWrapper>
      )}
    </AccordionItemWrapper>
  );
};

export default AccordionItem;
