import React from 'react';
import renderer from 'react-test-renderer';
import DemiButton from  '../../../Base/Components/Button/Button'

describe('Base Button', () => {
	it('should match snapshot', () => {
			const tree = renderer.create(<DemiButton/>).toJSON();
			
			expect(tree).toMatchSnapshot();
	})
})