import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"



describe('pruebas en useFetch', () => {
    test('debe retornar la informacion por defecto', () => {
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null)
    })

    test('debe tener la info deseada, loadging false, error false ', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate({ timeout: 2000 });
        const { data, loading, error } = result.current;
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
    })

    test('debe de majar el error del API ', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
        await waitForNextUpdate({ timeout: 2000 });
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('error en llamado del API');
    })


})
