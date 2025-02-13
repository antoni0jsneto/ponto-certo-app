import CustomInput from '../custom-input/custom-input.component';
import CustomSelect from '../custom-select/custom-select.component';

const ExpenseModal = () => {
  const options = [
    {
      label: 'Contas',
      options: [
        { label: 'Conta 1', value: 'conta1' },
        { label: 'Conta 2', value: 'conta2' },
      ],
    },
    {
      label: 'Cartões',
      options: [
        { label: 'Cartão 1', value: 'cartao1', icon: 'cartao-icon.png' },
        { label: 'Cartão 2', value: 'cartao2' },
      ],
    },
  ];

  return (
    <div>
      <h2>Nova despesa</h2>
      <div>
        <div>
          <p>Descrição</p>
          <CustomInput />
        </div>
        <div>
          <p>Valor</p>
          <CustomInput />
          <p>Data</p>
          <CustomInput />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div>
            <p>Conta/Cartão</p>
            <CustomSelect
              options={options}
              onChange={(value) => console.log('Selecionado:', value)}
            />
          </div>
          <div>
            <p>Categoria</p>
            <CustomSelect
              options={options}
              onChange={(value) => console.log('Selecionado:', value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
