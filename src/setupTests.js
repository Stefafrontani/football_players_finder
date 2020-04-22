import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

expect.extend({
	toBeType(received, argument) {
		const initialType = typeof received;
        const type = initialType === "object"
            ? Array.isArray(received)
                ? "array"
                : initialType
            : initialType;
		return type === argument ? {
			message: () => `expected ${received} of type ${typeof received} to be type ${argument}`,
			pass: true
		} : {
			message: () => `expected ${received} of type ${typeof received} to be type ${argument}`,
			pass: false
		};
	}
});

global.renderer = renderer;
global.mount    = mount;
global.shallow  = shallow;


configure({ adapter: new Adapter() });