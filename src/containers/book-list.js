import React, { Component } from 'react';
import { connect } from 'react-redux';

// let's import the action creator
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>			
			);
		});
	}

	render() {
		return (
				<ul className="list-group col-sm-4">
					{this.renderList()}
				</ul>
			)
	}
}

function mapStateToProps(state) {
	// What is returned will show up as props
	// inside of BookList
	return {
		books: state.books
	};

}

// define our dispatch to props
// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed
	// to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// add the dispatch as the second argument!
// Promote bookList from component to container, so it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);