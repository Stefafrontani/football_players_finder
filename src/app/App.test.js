import React from 'react';
import ReactDOM from 'react-dom';
import ProviderApp from './App';
import renderer from 'react-test-renderer';

describe('ProviderApp Component', () => {
  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(ProviderApp, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot', () => {
    const component = renderer.create(ProviderApp);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});