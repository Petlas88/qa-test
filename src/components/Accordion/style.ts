import {motion} from 'framer-motion'
import styled from 'styled-components'

interface AccordionItemButtonProps {
  open: boolean;
}

interface AccordionItemContentProps {
  open: boolean;
}

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
`;

export const AccordionItemWrapper = styled(motion.div)`
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #f3f3f3;
  overflow: hidden;
`;

export const AccordionItemButton = styled.button<AccordionItemButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  padding: 20px;
  border: none;
  font-size: 20px;
  color: ${(props) => (props.open ? '#a829cb' : '#333')};
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: #a829cb;
  }
`;

export const AccordionItemContentWrapper = styled(
  motion.div
)<AccordionItemContentProps>`
  width: 100%;
  overflow: hidden;
  padding-left: 20px;
  padding-right: 20px;
`;

export const AccordionItemContentText = styled(motion.p)`
  margin: 0;
  font-size: 16px;
  line-height: 1.25;
  padding-bottom: 20px;
  color: #333;
`;

export const ShowMoreButton = styled.button`
  background-color: transparent;
  width: 100%;
  padding: 20px;
  border: 1px solid #a829cb;
  border-radius: 4px;
  font-size: 20px;
  color: #a829cb;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #a829cb;
  }
`;
