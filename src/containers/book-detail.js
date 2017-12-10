import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {

 render() {
    if (!this.props.book) {
        return <div>Please select a book</div>
        }
    return (
            <div>
                <h3>Checked Out Book</h3>
                <div>{this.props.book.title}</div>
            </div>
        );
    };
};
function mapStateToProps(state) {
      return {
        book: state.activeBook
      }
    };

export default connect(mapStateToProps)(BookDetail);
    