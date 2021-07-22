import React from "react";
import colors from "../../styles/colors";
import { SectionStyled } from "./SectionStyled";
const Section = ({ children, title }) => {
  return (
    <SectionStyled colors={colors}>
      <h2 className='sectionTitle'>{title.toUpperCase()}</h2>
      {children}
    </SectionStyled>
  );
};

export default Section;
