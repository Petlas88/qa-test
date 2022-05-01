import React from 'react'
import Accordion from './components/Accordion'
import {Column} from './components/base/Column'
import {PageWrapper} from './components/base/PageWrapper'
import {StyledA} from './components/base/StyledA'
import {accordionData} from './utils/accordion-data'
import useMediaQuery from './hooks/useMediaQuery'
import faqImage from './assets/faq.svg'

const App = () => {
  const linkHoverAndFocus = {
    scale: 1.07,
    transition: { type: "spring", stiffness: 900 },
  };

  const isTabletOrSmaller = useMediaQuery("(max-width: 768px)");
  const accordionPositionText = isTabletOrSmaller ? "nedenfor" : "til høyre";

  return (
    <PageWrapper>
      <Column>
        <div>
          <h1>Hei og velkommen! 👋</h1>
          <p>
            I menyen {accordionPositionText} kan du finne svar på ofte stilte
            spørsmål. Om du allikevel ikke skulle finne svarene du leter etter,
            kan du kontakte oss på telefon{" "}
            <StyledA
              href={"tel:+4799999999"}
              whileHover={linkHoverAndFocus}
              whileFocus={linkHoverAndFocus}
              data-testid={'phone-link'}
            >
              99999999
            </StyledA>{" "}
            eller e-post{" "}
            <StyledA
              href={"mailto:info@faq.no"}
              whileHover={linkHoverAndFocus}
              whileFocus={linkHoverAndFocus}
              data-testid={'email-link'}
            >
              info@faq.no
            </StyledA>
            .
          </p>
        </div>
        <img src={faqImage} alt="spørsmål" style={{ width: "100%" }} />
      </Column>
      <Column>
        <Accordion options={accordionData} title={"Ofte stilte spørsmål"} />
      </Column>
    </PageWrapper>
  );
};

export default App;
