import React from 'react';


class Numpad extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleEvaluate = this.handleEvaluate.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        let expression = this.props.expression
        const newExpression = expression.concat(e.target.innerText);
        if (newExpression[0] == '*' || newExpression[0] == '/' || newExpression[0] == '.'
        ) {
            console.log('not allowed')
            return;
        }
        this.props.handleExpression(newExpression);
    }
    handleEvaluate() {
        this.props.handleEvaluate();

    }
    handleClear() {
        this.props.handleClear();
    }
    render() {
        return (
            <div className="numpads">
                <div className="row">
                    <button onClick={this.handleClick}>(</button>
                    <button onClick={this.handleClick}>)</button>
                    <button onClick={this.handleClick}>%</button>
                    <button onClick={this.handleClear}>AC</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClick}>7</button>
                    <button onClick={this.handleClick}>8</button>
                    <button onClick={this.handleClick}>9</button>
                    <button onClick={this.handleClick}>/</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClick}>4</button>
                    <button onClick={this.handleClick}>5</button>
                    <button onClick={this.handleClick}>6</button>
                    <button onClick={this.handleClick}>*</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClick}>1</button>
                    <button onClick={this.handleClick}>2</button>
                    <button onClick={this.handleClick}>3</button>
                    <button onClick={this.handleClick}>-</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClick}>0</button>
                    <button onClick={this.handleClick}>.</button>
                    <button onClick={this.handleEvaluate}>=</button>
                    <button onClick={this.handleClick}>+</button>
                </div>

            </div>
        )
    }
}

export default Numpad;
