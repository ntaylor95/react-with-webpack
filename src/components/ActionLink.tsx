import React, { MouseEvent } from 'react';

type ActionLinkProps = {
    actionText: string
}

class ActionLink extends React.Component<ActionLinkProps> {
    constructor(props: ActionLinkProps) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e: MouseEvent) {
      e.preventDefault();
      console.log('The link was clicked.');
      const target = e.target;
      console.log(`The target is`);
      console.log(target);
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