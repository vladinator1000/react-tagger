import _ from 'lodash';
import React from 'react';
import TagsList from './tags-list';

const tags = [ 
				{tag: 'sexy'},
				{tag: 'beautiful'}
			 ];

export default class App extends React.Component {
	
	constructor(props) {
			super(props);

			this.state = {
				tags
			};
		}

	render() {

		return (
			<div>
				<TagsList 
					tags = {this.state.tags}
					addTag = {this.addTag.bind(this)}
					deleteTag = {this.deleteTag.bind(this)}
				/>
				<input 
					type = "text" 
					placeholder = "Put some tags here."
					ref = "tagsInput"
					onKeyDown = {this.handleKeyDown.bind(this)}
				/>
			</div>
		);
	}

	

	handleKeyDown(event) {

		let tag = this.refs.tagsInput.value;
		
		// If the space/enter key is pressed, add a new tag and reset the newTag variable
		if(event.keyCode === 32 || event.keyCode === 13) { 

			// Clean it up
			tag = tag.trim();

			// Hand the tag name to the add function
			this.addTag(tag);

			// Clear the tag variable and input field
			tag = '';
			this.refs.tagsInput.value = '';
		 };
		// if the backspace key is pressed, the input isn't empty and the tags array has something in it
		 if(event.keyCode === 8 && tag === '' && tags.length > 0) {
		 	//Get the last tag and hand it to deleteTag()
		 	this.deleteTag(tags[tags.length-1].tag);
		 }
		
	}

	// If the input isn't empty push a new tag to the tags[] array and re-render
	addTag(tag) {
		if(tag !== '') {
			this.state.tags.push({ tag });
			this.setState({ tags: this.state.tags });
		}
	}


	deleteTag(tagToDelete) {
		//find the specific tag name, delete it and re-render
		_.remove(this.state.tags, tag => tag.tag === tagToDelete);
    	this.setState({ tags: this.state.tags });
	}
}