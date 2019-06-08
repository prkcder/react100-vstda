import React, { Component } from 'react';

class NewTodos extends Component {
    render() {
        return(
            
                <div className="col-md-4">
                    <div className="card" >
                        <div className="card-header">
                            <h6>Add New Todo</h6>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label> I want to..</label>
                                <textarea className="create-todo-text"></textarea>
                            </div>
                            <div className="form-group">
                                <label>How much of a priority is this?</label>
                                <div>
                                    <select className="create-todo-priority form-control" >
                                        <option defaultValue="true" disabled="disabled">
                                            Select a Priority
                                        </option>
                                        <option value="1">
                                            High Priority
                                        </option>
                                        <option value="2">
                                            Medium Priority
                                        </option>
                                        <option value="3">
                                            Low Priority
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success btn-block" onChange={this.props.handleChange}>Add</button>
                        </div>
                    </div>
                </div>
        
        );
    }
}

export default NewTodos;