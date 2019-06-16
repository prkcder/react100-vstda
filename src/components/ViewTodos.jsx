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
                        
                        {this.props.todosList.map((item)=> {
                        return <TodoItem key={item.id} todo={item.todo} priority={item.priority} id={item.id} completed={item.completed} handleCheck={this.props.handleCheck} /*handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit}*/ handleSave={this.props.handleSave}/>;
                        })}
                        </div>
                    </div>
                </div>
           
        );
    }
}

        ViewTodos.propTypes = {
            todosList: PropTypes.array.isRequired
        }

export default ViewTodos;