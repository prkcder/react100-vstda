import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TodoItems extends Component {
    render(){
        return(
            
                <div >
                    <p>
                    {/* <input type="checkbox" onChange={this.props.markComplete} /> {' '} */}
                    {this.props.todo}</p>
                </div>
           
        );
    }
}

// TodoItems.propTypes = {
//     todo: PropTypes.object.isRequired
// }

export default TodoItems;