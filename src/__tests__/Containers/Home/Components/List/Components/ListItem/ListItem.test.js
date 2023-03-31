import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from  '../../../../../../../Containers/Home/Components/List/Components/ListItem/ListItem';

describe('Base ListItem', () => {
	it('should match snapshot', () => {
			const data = {
				url: 'https://www.youtube.com/watch?v=-PExnC26MMA',
				title: '5-Hour Study with Me / Pomodoro Timer 30-5 / Lo-Fi Relaxing Music / Day 137',
				author: 'Sean Study',
				description: 'Sean Study',
			}
			const tree = renderer.create(<ListItem data={data}/>).toJSON();
			
			expect(tree).toMatchSnapshot();
	})
})