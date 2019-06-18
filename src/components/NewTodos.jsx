import React, { Component } from 'react';

class NewTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addTodo: "",
            selectPriority: "select"
        }
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
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
                                <textarea className="create-todo-text" 
                                name="addTodo" 
                                value={this.state.addTodo}
                                 onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>How much of a priority is this?</label>
                                <div>
                                    <select className="create-todo-priority form-control" 
                                    name="selectPriority" 
                                    value={this.state.selectPriority} 
                                    onChange={this.handleChange} >
                                        <option value="select"disabled >
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
                            <button className="btn btn-success btn-block" 
                            onClick={() => this.props.handleSubmit(this.state.addTodo, this.state.selectPriority)} >Add</button>
                        </div>
                    </div>
                </div>
        );
    }
}

export default NewTodos;