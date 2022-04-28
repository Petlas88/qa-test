import {motion} from 'framer-motion'
import styled from 'styled-components'

interface AccordionItemButtonProps {
  isOpen: boolean
}

interface AccordionItemContentProps {
  isOpen: boolean
}

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
`

export const AccordionItemWrapper = styled.div`
  margin-bottom: 10px;
`
export const AccordionItemButton = styled(motion.button)<AccordionItemButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 15px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  background-color: ${props => props.isOpen ? '#e3bcf3' : '#f5f5f5'};
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e3bcf3;
  }

  &:focus {
    background-color: #e3bcf3;
  }
`

export const AccordionItemContentWrapper = styled(motion.div)<AccordionItemContentProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 10px;
  max-height: ${props => props.isOpen ? '1000px' : '0'};
  border-radius: 5px;
`

export const AccordionItemContentText = styled.p`
  margin-top: 0;
  font-size: 16px;
  line-height: 1.25;
  color: #333;
`