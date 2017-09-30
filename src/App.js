import React from 'react';
import Expression from './Expression.js';
import Numpad from './Numpad';
import Math from 'mathjs';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            expression: '',
        }
        this.handleExpression = this.handleExpression.bind(this);
        this.handleEvaluate = this.handleEvaluate.bind(this);
        this.handleClear = this.handleClear.bind(this);

    }
    handleExpression(expression) {
        this.setState({
            expression: expression
        })
    }
    handleEvaluate() {
        let stringExpression = this.state.expression
        if (stringExpression == '') {
            return;
        }
        console.log(stringExpression);
        try {
            var result = Math.eval(stringExpression);
        } catch (e) {
            console.log('Not allowed');
            var result = 'Invalid Input'
        }
        this.setState({
            expression: result.toString()
        })

    }
    handleClear() {
        this.setState({
            expression: ''
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="heading">React Calculator</h1>
                <Expression expression={this.state.expression} />
                <Numpad expression={this.state.expression}
                    handleExpression={this.handleExpression}
                    handleEvaluate={this.handleEvaluate}
                    handleClear={this.handleClear}
                    result={this.state.result} />
                <small>Made by Pratik Chakravorty <a href="https://github.com/pratik-chakravorty" target="_blank"><i className="fa fa-2x fa-github"></i>
                </a></small>
            </div>
        )
    }
}

export default App;