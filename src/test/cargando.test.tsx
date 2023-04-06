import Cita from '../features/quote/Cita';
import {fireEvent, render, screen} from '../test-utils';

describe('Prueba para comprobar la CARGA', () => {
    test('Se ingresa un nombre y aparece el CARGANDO...',() => {
        render(<Cita/>)
        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        fireEvent.change(input, {target:{value:'Duffman'}});
        const button = screen.getByRole('button', {name: 'Obtener Cita'});
        fireEvent.click(button); 
        expect(screen.getByText('CARGANDO...')).toBeInTheDocument();
    })
})

