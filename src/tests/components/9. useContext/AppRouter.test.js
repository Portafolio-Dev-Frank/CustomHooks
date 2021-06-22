import { shallow } from "enzyme"
import { AppRouter } from "../../../components/9. useContext/AppRouter"
import { UserContext } from "../../../components/9. useContext/UserContext"



describe('pruebas en <AppRouter></AppRouter>', () => {

    const user = {
        name: 'francisco',
        email: 'francisco.email.co'
    }

    const wrapper = shallow(
        <UserContext.Provider value={{user}}>
            <AppRouter></AppRouter>
        </UserContext.Provider>)

    test('debe de renderizar el <AppRouter></AppRouter> ', () => {
        expect(wrapper).toMatchSnapshot();
    })

})
