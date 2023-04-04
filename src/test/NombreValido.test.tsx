import Cita from '../features/quote/Cita';
import {fireEvent, render, screen} from '../test-utils';

describe('Prueba para nombre invalido', () => {
    test('Al ingresar un nombre invalido sale el mensaje para corregirlo', async () => {
        render(<Cita/>)
        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        fireEvent.change(input, {target:{value:'NSFS'}});
        const button = screen.getByRole('button', {name: 'Obtener Cita'});
        fireEvent.click(button); 
        expect(await screen.findByText('CARGANDO...')).toBeInTheDocument();
    })
})

