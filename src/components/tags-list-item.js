import React from 'react';
import classNames from 'classnames';

export default class TagsListItem extends React.Component {
	constructor(props){
		super(props);
	}

    

	render() {
		const { tag } = this.props;
		const iconClass = classNames('fa','fa-times');

		return (
			<span ref = "tagItem">
				<span>{tag}</span>
				<button onClick = {this.props.deleteTag.bind(this, this.props.tag)}>
					<i className = {iconClass} ></i>
				</button>		
			</span>
		);
	}
}

// insert this in the delete onClick =
// {this.props.deleteTask.bind(this, this.props.tag)}