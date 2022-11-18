import React from 'react';
import * as ResumeStyle from './ResumeStyle';
import Card from '../Card/Card';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';

const Resume = ({ income, expense, total }) => {
  return (
    <>
      <ResumeStyle.Container>
        <Card title="Entradas" value={income} Icon={FaRegArrowAltCircleUp} />
        <Card title="Saídas" value={expense} Icon={FaRegArrowAltCircleDown} />
        <Card title="Saldo" value={total} Icon={FaDollarSign} />
      </ResumeStyle.Container>
    </>
  );
};

export default Resume;
