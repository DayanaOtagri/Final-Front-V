import { useState } from 'react'
import { INoticiasNormalizadas } from './useNoticiasNormalizadas';

export const useModal = () => {
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
  return {modal, setModal}
}
