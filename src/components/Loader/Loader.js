import React from 'react';

import GridLoader from 'react-spinners/GridLoader';

import { Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <Spinner>
      <GridLoader color="#0000a0" aria-label="Loading Spinner" size={20} />
    </Spinner>
  );
};

export { Loader };
