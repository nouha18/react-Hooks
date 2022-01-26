import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div role="region" id="bird-info" aria-live="polite">
        <ul className="list">
          {this.state.persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
