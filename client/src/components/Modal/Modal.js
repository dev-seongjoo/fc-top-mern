import * as S from "./styled";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.Modal>
        <S.ModalContent>{children}</S.ModalContent>
        <S.ModalCloseBtn onClick={onClose}>X</S.ModalCloseBtn>
      </S.Modal>
    </S.ModalOverlay>
  );
};

export default Modal;
