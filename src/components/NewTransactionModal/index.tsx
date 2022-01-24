import Modal from 'react-modal';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import { Container, TransactionsTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/Close.svg';
import { FormEvent, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: ModalProps){
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    
    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        console.log({
            title,
            value, 
            category, 
            type
        });
    }

    

    return(
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
            <button type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                
                <input 
                    placeholder="Título" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionsTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => {setType('deposit');}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    
                    <RadioBox
                        type="button"
                        onClick={() => {setType('withdraw');}}
                        isActive={ type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionsTypeContainer>

                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar    
                </button>

            </Container>
            
      </Modal>
    );
}