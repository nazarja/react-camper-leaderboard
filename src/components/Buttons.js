
import React, { Component } from 'react';

class Buttons extends Component {

    render() {
        return (
            <div className="button">
                    <button>
                        <span onClick={ () => this.props.handleClick('reverse')} className="arrows" title="Reverse List Order">&#8693;</span>
                    </button>
            </div>
        );
    }
}

export default Buttons;

