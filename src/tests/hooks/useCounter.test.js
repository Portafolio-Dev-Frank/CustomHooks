import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'


describe('pruebas useCounter ', () => {
    test('debe de retornar valores por defecto ', () => {
        const { result } = renderHook(() => useCounter());
        console.log(result.current);
        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
    })


    test('debe de retornar el counter en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.state).toBe(100);
    })

    test('debe de incrementar el counter en 1 ', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        // act => acciones dentro de hook
        act(() => {
            increment();
        })
        const { state } = result.current;
        expect(state).toBe(101)
    })

    test('debe de decrementar el counter en 1 ', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        // act => acciones dentro de hook
        act(() => {
            decrement();
        })
        const { state } = result.current;
        expect(state).toBe(99)
    })
    
    test('debe de retornar 100 por reset', () => {
        const { result } = renderHook(() => useCounter(100));
        const { reset } = result.current;
        // act => acciones dentro de hook
        act(() => {
            reset();
        })
        const { state } = result.current;
        expect(state).toBe(100)
    })

})
