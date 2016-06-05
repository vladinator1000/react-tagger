import React from 'react';
import TagList from './TagList';

const tags = [
  { tag: 'sexy' },
  { tag: 'beautiful' },
  { tag: 'default tags here' },
];

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tags };
    this.handleTagAdded = this.handleTagAdded.bind(this);
  }

  render() {
    return <TagList
        tags={tags}
        onTagAdded={tag => this.setState({tags: this.state.tags.concat(tag)})}
    />;
  }

  handleTagAdded(tag) {
    this.setState({tags: this.state.tags.concat(tag)});
  }
}