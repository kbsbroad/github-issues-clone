import React from 'react';
import octicons from 'octicons';

const createOcticonSVG = name => {
  return {
    __html: octicons[name].toSVG()
  }
}

const Octicon = ({ name }) => {
  return (
    <span dangerouslySetInnerHTML={createOcticonSVG(name)}></span>
  );
}

export default Octicon
