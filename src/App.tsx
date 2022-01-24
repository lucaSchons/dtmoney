import styled from 'styled-components'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenIsNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseIsNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>   
      <Header onOpenNewTransactionModal={handleOpenIsNewTransactionModal}/>   

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseIsNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

