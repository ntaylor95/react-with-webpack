import React from 'react';

class ListItems extends React.Component {
    constructor(props) {
      super(props);
      this.onItemClicked = this.onItemClicked.bind(this);
    }

    onItemClicked(id) {
        console.log(`The is is ${id}`);
    }
  
    render() {
      const listItems = this.props.items.map((item) =>
        <li onClick={this.onItemClicked.bind(this, item.Id)} key={item.Id}>
          {item.Name}
        </li>
      );
  
      return (
        <ul>
            {listItems}
        </ul>
      );
    }
}

export default ListItems;