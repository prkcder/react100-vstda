import React, { Component } from 'react';

// const setColor = { color: white }

class Header extends Component {


    render() {
        return (
            <div>
                <header>
                    <h1 className="white" >Very Simple Todo App</h1>
                    <h4 className="white" >Track all of the things</h4>
                </header>
            </div>
        );
    }
}

export default Header;