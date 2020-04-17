import React from 'react';

class ActionLink extends React.Component {
    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    render() {
        return (
        <a href="#" onClick={this.handleClick}>
            {this.props.actionText}
        </a>
        )
    };
}

export default ActionLink;