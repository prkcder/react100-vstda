import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

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
                        {this.props.todos.map((item)=> {
                        return <TodoItem key={item.id} todo={item.todo}  />;
                        })}
                        </div>
                    </div>
                </div>
           
        );
    }
}

        ViewTodos.propTypes = {
            todos: PropTypes.array.isRequired
        }

export default ViewTodos;