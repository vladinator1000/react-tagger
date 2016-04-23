import _ from 'lodash';
import React from 'react';
import TagsListItem from './tags-list-item'

export default class TagsList extends React.Component {
	
	renderItems(){
		const props = _.omit(this.props, 'tags');
		return _.map(this.props.tags, (tag, index) => <TagsListItem key={index} {...tag} {...props}/>);
	}


	render() {

		return (
			<span>
				{this.renderItems()}
			</span>
		);
	}
}