import React from 'react';
import PropTypes from 'prop-types';

import { SectionStyle, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <Title>{title}</Title>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
