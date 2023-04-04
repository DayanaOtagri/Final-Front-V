import Modal from "./Modal";
import {
  ContenedorNoticias,
  TituloNoticias,
} from "./styled";

const Noticias = () => {

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
        <Modal></Modal>
    </ContenedorNoticias>
  );
};

export default Noticias;



