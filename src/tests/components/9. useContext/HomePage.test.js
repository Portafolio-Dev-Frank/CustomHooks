import { shallow } from "enzyme"
import { HomePage } from "../../../components/9. useContext/HomePage"
import { UserContext } from "../../../components/9. useContext/UserContext"


describe('pruebas en <HomePage></HomePage>', () => {

    const user = {
        name: 'francisco',
        email: 'francisco.email.co'
    }

    const wrapper = shallow(
        <UserContext.Provider value={{
            user,
        }}>
            <HomePage></HomePage>
        </UserContext.Provider>
    )

    test('debe renderizar el homePage', () => {
        expect(wrapper).toMatchSnapshot();
    })
    

})
