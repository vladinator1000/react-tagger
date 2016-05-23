import React, {PropTypes} from 'react';
import classNames from 'classnames';

const TagListItem = (props) => {

  const { tag, deleteTag } = props;
  const iconClass = classNames('fa', 'fa-times');

  return (
      <span>
				<span>{tag}</span>
				<button onClick={() => deleteTag(tag)}>
					<i className={iconClass}/>
				</button>
			</span>
  );
};

TagListItem.propTypes = {
  tag: PropTypes.string.isRequired,
  deleteTag: PropTypes.func.isRequired
};

export default TagListItem;

// insert this in the delete onClick =
// {this.props.deleteTask.bind(this, this.props.tag)}