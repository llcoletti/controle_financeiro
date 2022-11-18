import React from 'react';
import GridItem from '../GridItem/GridItem';
import * as GridStyles from './GridStyle';

const Grid = ({ itens, setItens }) => {
  const onDelete = (id) => {
    const newArray = itens.filter((transaction) => transaction.id !== id);
    setItens(newArray);
    localStorage.setItem('transactions', JSON.stringify(newArray));
  };
  return (
    <GridStyles.Table>
      <GridStyles.Thead>
        <GridStyles.Th width={40}>Descrição</GridStyles.Th>
        <GridStyles.Th width={40}>Valor</GridStyles.Th>
        <GridStyles.Th width={10} alignCenter>
          Tipo
        </GridStyles.Th>
        <GridStyles.Th width={10}></GridStyles.Th>
      </GridStyles.Thead>
      <GridStyles.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </GridStyles.Tbody>
    </GridStyles.Table>
  );
};

export default Grid;
