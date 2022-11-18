import React from 'react';
import * as CardStyle from './CardStyle';

const card = ({ title, Icon, value }) => {
  return (
    <>
      <CardStyle.Container>
        <CardStyle.Header>
          <CardStyle.HeaderTitle> {title} </CardStyle.HeaderTitle>
          <Icon />
        </CardStyle.Header>
        <CardStyle.Total>{value}</CardStyle.Total>
      </CardStyle.Container>
    </>
  );
};

export default card;
