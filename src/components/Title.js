import React from 'react';

class Title extends React.Component {
  render() {
    return (
        <div className="title">
          <h1>To do title</h1>
          <h2>Tasks to do: {this.props.item.length}</h2>
        </div>
    );
  }
}

export default Title;