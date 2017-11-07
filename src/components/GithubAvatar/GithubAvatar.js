import React from 'react';
import ProTypes from 'prop-types';

const GithubAvatar = ({author, width, height}) => {
  return <img src={`${author.avatarUrl}`} width={width} height={height} alt={`@${author.login}`}/>;
}

GithubAvatar.propTypes = {
  author: ProTypes.shape({
    avatarUrl: ProTypes.string.isRequired,
    login: ProTypes.string
  }).isRequired,
  width: ProTypes.number,
  height: ProTypes.number
}

export default GithubAvatar;
