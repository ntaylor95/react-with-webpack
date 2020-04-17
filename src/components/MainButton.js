import React from 'react';

import './MainButton.scss';

class MainButton extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { name } = this.props;
  
      return (
        <div className="main-button" onClick={this.props.onClick}>
          {name}
        </div>
      );
    }
}

export default MainButton;