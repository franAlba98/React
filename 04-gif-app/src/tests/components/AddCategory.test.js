import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"


describe('AddCategory component tests', () => {

    //the function I need to pass to AddCategory
    const anyNameICanUseTheNameOfTheUseState = () => {

    }

    test('must show correctly', () => {
        const wrapper = shallow(<AddCategory anyNameICanUseTheNameOfTheUseState={anyNameICanUseTheNameOfTheUseState} />);

        expect(wrapper).toMatchSnapshot();

    })


})
