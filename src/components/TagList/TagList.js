import React, {Component, PropTypes} from 'react';
import TagListItem from './TagListItem'

class TagList extends Component {
  constructor(props) {
    super(props);
    this.state = { tags: props.tags, input: '' };
    this.deleteTag = this.deleteTag.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.addTagKeys = [32, 13];
    this.tabKey = 9;
    this.backspaceKey = 8;
  }

  render() {
    const { tags } = this.state;

    return (
        <div>
          <span>
            {tags.map((tag, index) => <TagListItem key={index} {...tag} deleteTag={this.deleteTag} />)}
          </span>
          <input
              type="text"
              placeholder="Put some tags here."
              value={this.state.input}
              onKeyUp={this.handleKeyUp}
              onKeyDown={this.handleKeyDown}
              onChange={this.handleChange}
          />
        </div>
    )
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleKeyDown(e) {
    const { input, tags } = this.state;
    // If tab
    if (e.keyCode === this.tabKey && input !== '') {
      this.addTag(input);
      e.preventDefault();
    }
    // if the backspace key is pressed, the input isn't empty and the tags array has something in it
    else if (e.keyCode === this.backspaceKey && input === '' && tags.length > 0) {
      this.deleteTag(tags[tags.length - 1].tag);
    }

  }

  handleKeyUp(e) {
    const { input } = this.state;

    // If the space/enter key is pressed, add a new tag and reset the newTag variable
    if (input !== '' && (this.addTagKeys.includes(e.keyCode))) {
      this.addTag(input);
    }
  }

  // If the input isn't empty push a new tag to the tags[] array and re-render
  addTag(tag) {
    const { tags } = this.state;
    const { onTagAdded } = this.props;

    const containsTag = tags.map(x => x.tag).includes(tag);

    if (tag !== '' && !containsTag) {
      this.setState({
        tags: this.state.tags.concat({ tag }),
        input: ''
      }, () => onTagAdded(tag));
    }
  }


  deleteTag(tagToDelete) {
    //find the specific tag name, delete it and re-render
    this.setState({ tags: this.state.tags.filter(x => x.tag !== tagToDelete) });
  }
}

TagList.propTypes = {
  tags: PropTypes.array,
  onTagAdded: PropTypes.func
};

TagList.defaultProps = {
  tags: [],
  onTagAdded: (tag) => {
    console.log(`Tag added: ${tag}`);
  }
};

export default TagList;