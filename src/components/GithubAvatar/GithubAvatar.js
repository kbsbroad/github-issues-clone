import React from 'react';

const GithubAvatar = ({author, width, height}) => {
  return <img src={`${author.avatarUrl}`} width={width} height={height} alt={`@${author.login}`}/>;
}

export default GithubAvatar;
