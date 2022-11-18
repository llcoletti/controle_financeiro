import React from 'react';
import * as GridItemStyles from './GridItemStyle';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa';

const GridItem = ({ item, onDelete }) => {
  return (
    <GridItemStyles.Tr>
      <GridItemStyles.Td>{item.desc}</GridItemStyles.Td>
      <GridItemStyles.Td>{item.amount}</GridItemStyles.Td>
      <GridItemStyles.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </GridItemStyles.Td>
      <GridItemStyles.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </GridItemStyles.Td>
    </GridItemStyles.Tr>
  );
};

export default GridItem;
