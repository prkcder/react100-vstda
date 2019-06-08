import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TodoItems extends Component {
    render(){
        return(
            
                <div style={this.getStyle()}>
                    <p>
                    <input type="checkbox" onChange={this.props.markComplete} /> {' '}
                    {this.props.todo.title}</p>
                </div>
           
        );
    }
}

// TodoItems.propTypes = {
//     todo: PropTypes.object.isRequired
// }

export default TodoItems;