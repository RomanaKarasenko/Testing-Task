import { createContext, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import BackDropModal from '../components/BackDropModal/BackDropModal';

export const ModalContext = createContext();
const modalRoot = document.querySelector('#modal-root');

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const handleSetModal = useCallback(modal => {
    setModal(modal);
  }, []);

  return (
    <ModalContext.Provider value={handleSetModal}>
      {children}
      {modal &&
        createPortal(<BackDropModal onClose={handleSetModal}>{modal}</BackDropModal>, modalRoot)}
    </ModalContext.Provider>
  );
};