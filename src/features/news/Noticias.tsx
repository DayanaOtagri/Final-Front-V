import Modal from "./Modal";
import {
  ContenedorNoticias,
  TituloNoticias,
} from "./styled";

/**
 * 
 * Se crearon tres Custom Hooks y un componente : 
 * 
 * El primero es el de useNoticiasNormalizadas que contiene la interfaz y 
 * un estado, esto permitió ser consumida para el llamado a la API y el renderizado de las Noticias. 
 * 
 * El segundo es el de useObtenerInformación que es que hace el llamado a la API
 * 
 * El tercero es el useModal contiene el estado que permite abrir y cerrar el modal que activa el botón ver
 * más. Este Custom Hook también consume la interfaz contenida en el useNoticiasNormalizadas
 * 
 * Finalmente se crea el Componente Modal, hace uso del useModal y el useObtenerInformación 
 * para poder renderizar la información en una lista. Este componente Modal se importa en el componente
 * Noticias para que se pueda renderizar la lista de noticias. Como anotación queda que puede tener otro nombre
 * como ListaDeNoticias O ListaDeInformación. 
 * 
 * Estas modificaciones respoden al principio de SOLID de Responsabilidas Única, ya que, se
 * quita el llamado a la API, se quita la intefaz y los estados para tener un componente más limpio y con 
 * una solafunción mostrar las las noticias. 
 * 
 * 
 * 
 * 
 */
const Noticias = () => {

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
        <Modal></Modal>
    </ContenedorNoticias>
  );
};

export default Noticias;



