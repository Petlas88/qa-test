import {motion} from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

interface ChevronProps {
  isOpen: boolean;
}

const ChevronContainer = styled(motion.div)`
  height: 24px;
  width: 24px;
`

const Chevron = ({isOpen}:ChevronProps) => {
  return (
    <ChevronContainer animate={{rotate: isOpen ? 180 : 0}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={isOpen ? "#a829cb" : "#333"}
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </ChevronContainer>
  );
};

export default Chevron;
