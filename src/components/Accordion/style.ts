import {motion} from 'framer-motion'
import styled from 'styled-components'

interface AccordionProps {
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

export const AccordionItemWrapper = styled.div<AccordionProps>`
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #f3f3f3;
  overflow: hidden;
  box-shadow: ${props => props.open ? '0px 0px 0px 1px #a829cb' : 'none'};
  transition: box-shadow 0.3s ease;
`;

export const AccordionItemButton = styled.button<AccordionProps>`
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
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AccordionItemContentWrapper = styled(
  motion.div
)`
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
