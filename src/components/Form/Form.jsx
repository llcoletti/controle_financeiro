import React, { useState } from 'react';
import Grid from '../Grid/Grid';
import * as FormStyle from './FormStyle';

const Form = ({ handleAdd, transactionList, setTransactionList }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    console.log('handleSave');
    if (!desc || !amount) {
      alert('Informe a descrição e o valor!');
      return;
    } else if (amount < 1) {
      alert('O valor tem que ser positivo!');
      return;
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);
    setDesc('');
    setAmount('');
  };

  return (
    <>
      <FormStyle.Container>
        <FormStyle.InputContent>
          <FormStyle.Label>Descrição</FormStyle.Label>
          <FormStyle.Input
            value={desc}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </FormStyle.InputContent>
        <FormStyle.InputContent>
          <FormStyle.Label>Valor</FormStyle.Label>
          <FormStyle.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormStyle.InputContent>
        <FormStyle.InputContent>
          <FormStyle.RadioGroup>
            <FormStyle.Input
              type="radio"
              id="rIncome"
              defaultChecked
              name="group1"
              onChange={() => setExpense(!isExpense)}
            />
            <FormStyle.Label htmlFor="rIncome">Entrada</FormStyle.Label>
            <FormStyle.Input
              type="radio"
              id="rExpense"
              name="group1"
              onChange={() => setExpense(!isExpense)}
            />
            <FormStyle.Label htmlFor="rExpense">Saída</FormStyle.Label>
          </FormStyle.RadioGroup>
        </FormStyle.InputContent>
        <FormStyle.Button onClick={handleSave}>ADICIONAR</FormStyle.Button>
      </FormStyle.Container>
      <Grid itens={transactionList} setItens={setTransactionList} />
    </>
  );
};

export default Form;
