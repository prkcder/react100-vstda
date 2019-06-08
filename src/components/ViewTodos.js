import React, { Component } from 'react';
// import TodoItem from './TodoItem'
// import PropTypes from 'prop-types';

class ViewTodos extends Component {
    render(){
        return(
            
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            View Todos
                        </div>
                        <div className="card-body">
                            hello
                        {/* {this.props.todos.map((todo)=> {
                        return <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />;
                        })} */}
                        </div>
                    </div>
                </div>
           
        );
    }
}

        // ViewTodos.propTypes = {
        //     todo: PropTypes.array.isRequired
        // }

export default ViewTodos;