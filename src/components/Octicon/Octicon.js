import React from 'react';
import octicons from 'octicons';

import './styles/Octicon.scss'

const createOcticonSVG = (name, options = {}) => {
  return {
    __html: octicons[name].toSVG(options)
  }
}

const Octicon = ({ name, options = {} }) => {
  return (
    <span dangerouslySetInnerHTML={createOcticonSVG(name, options)}></span>
  );
}

export default Octicon
