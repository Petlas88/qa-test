import React from 'react'
import {
  AccordionItemButton,
  AccordionItemContentText,
  AccordionItemContentWrapper,
  AccordionItemWrapper,
} from './style'
import {AnimatePresence} from 'framer-motion'
import Chevron from './Chevron'

interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  testId?: string;
}

const contentWrapperVariants = {
  open: {
    height: "auto",
    transition: {
      ease: "easeOut",
      delayChildren: 10,
    },
  },
  closed: {
    height: 0,
    transition: {
      delayChildren: 10,
    },
  },
};

const contentTextVariants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    scale: 0.5,
  },
};

const AccordionItem = ({
  id,
  title,
  content,
  isOpen,
  onClick,
  testId,
}: AccordionItemProps) => {
  return (
    <AccordionItemWrapper open={isOpen}>
      <AccordionItemButton
        open={isOpen}
        onClick={onClick}
        data-testid={`accordion-item-button-${testId}`}
      >
        {title}
        <Chevron isOpen={isOpen} />
      </AccordionItemButton>
      <AnimatePresence>
        {isOpen && (
          <AccordionItemContentWrapper
            key={`${id}-content`}
            variants={contentWrapperVariants}
            initial={"closed"}
            animate={"open"}
            exit={"closed"}
          >
            <AccordionItemContentText
              key={`${id}-content-text`}
              variants={contentTextVariants}
              initial={"closed"}
              animate={"open"}
              exit={"closed"}
              data-testid={`accordion-item-text-${testId}`}
            >
              {content}
            </AccordionItemContentText>
          </AccordionItemContentWrapper>
        )}
      </AnimatePresence>
    </AccordionItemWrapper>
  );
};

export default AccordionItem;
