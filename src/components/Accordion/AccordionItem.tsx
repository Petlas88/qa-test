import React from 'react'
import {
  AccordionItemButton,
  AccordionItemContentText,
  AccordionItemContentWrapper,
  AccordionItemWrapper,
} from './style'
import {AnimatePresence} from 'framer-motion'

interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
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
    }

  },
  closed: {
    opacity: 0,
    scale: 0.5
  },
};

const AccordionItem = ({
  id,
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <AccordionItemWrapper>
      <AccordionItemButton open={isOpen} onClick={onClick}>
        {title}
      </AccordionItemButton>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <AccordionItemContentWrapper
            key={`${id}-content`}
            open={isOpen}
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
