import { useContext } from 'react';
import { ModalContext } from '../context/modalProvider';

export const useForModal = () => useContext(ModalContext);