import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

// Components
import App from './App';

function setup() {

    const wrapper = shallow(<App />);
    return { wrapper };
}

describe('WelcomeMessage Test Suite', () => {
    it('Should have an image', () => {
        const { wrapper } = setup();
        expect(wrapper.find('h1').exists()).toBe(true);
    });
});

/*it('should be called once', async () => {
    const autoLogin = jest.fn();
    const wrapper = shallow(<App store={mockStore()} autoLogin={autoLogin} />);
    await wrapper.dive();
    expect(autoLogin.mock.calls.length).toBe(1);
})*/