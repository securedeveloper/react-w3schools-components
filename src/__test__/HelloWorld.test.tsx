import * as React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../components/HelloWorld';

describe('<HelloWorld />', () => {
    it('should render without throwing an error', function () {
        expect(shallow(<HelloWorld/>).find('.hello-world')).toHaveLength(1);
    });
});
