import React from 'react';


class Expression extends React.Component {
    render() {
        return (
            <div>
                <p className="expression-text">{this.props.expression}</p>
            </div>
        )
    }
}

export default Expression;