import Cita from '../features/quote/Cita';
import {fireEvent, render, screen} from '../test-utils';

describe('Prueba en Componente Cita', () => {
    test('Busqueda de una cita por personaje', async () => {
        render(<Cita/>)
        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        fireEvent.change(input, {target:{value:'Duffman'}});
        const button = screen.getByRole('button', {name: 'Obtener Cita'});
        fireEvent.click(button); 

        expect(await screen.findByText('Oh Yeah!')).toBeInTheDocument();
    })
})

