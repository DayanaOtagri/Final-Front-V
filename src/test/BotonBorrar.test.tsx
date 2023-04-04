import Cita from '../features/quote/Cita';
import {fireEvent, render, screen} from '../test-utils';

describe('Prueba en boton borrar', () => {
    test('El boton borra la cita de la busqueda', async () => {
        render(<Cita/>)
        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        fireEvent.change(input, {target:{value:'Duffman'}});
        const button = screen.getByRole('button', {name: 'Obtener Cita'});
        fireEvent.click(button); 
        expect(await screen.findByText('Oh Yeah!')).toBeInTheDocument();
        const cleanButton = screen.getByRole('button', {name: 'Borrar'});
        fireEvent.click(cleanButton); 
        expect(await screen.findByText('No se encontro ninguna cita')).toBeInTheDocument();
    })
})