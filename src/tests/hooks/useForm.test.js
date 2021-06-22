import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from "../../hooks/useForm";


describe('pruebas en useForm', () => {
    const initialForm = {
        name: 'francisco',
        email: 'francisco.email@email.com'
    }

    test('debe de regresar un formulario por defecto ', () => {
        const { result } = renderHook(() => useForm());
        // console.log(result.current);
        const [form, handleInputChange, reset] = result.current;
        expect(form).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')
    })

    test('deabe de cambiar el valor del formulario (cambio del name) ', () => {
        const { result } = renderHook(() => useForm());
        const [,handleInputChange] = result.current;
        act(() => {
            handleInputChange({
                target : {
                    name: 'name',
                    value: 'pepe'
                }
            });
        })
        const [form] = result.current;
        expect(form.name).toEqual('pepe')

    })

    test('debe de re-establecer el formulario con RESET ', () => {
        const { result } = renderHook(() => useForm());
        const [form,handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({
                target : {
                    name: 'name',
                    value: 'pepe'
                }
            });
            reset();
        })
        expect(form).toEqual(initialForm)
    })



})
