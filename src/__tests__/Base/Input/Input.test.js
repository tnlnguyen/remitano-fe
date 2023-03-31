import React from 'react';
import renderer from 'react-test-renderer';
import Input from  '../../../Base/Components/Input/Input'

describe('Base Input', () => {
	it('should match snapshot', () => {
			const tree = renderer.create(<Input/>).toJSON();
			
			expect(tree).toMatchSnapshot();
	})
})