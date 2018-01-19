import * as React from 'react';
import * as ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentWillMount() {

    const query = 'query { employees { id firstName lastName age } }';
    const variables = null;

    fetch('http://localhost:3020', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables })
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          employees: result.data.employees,
        });
      });

  }

  render() {

    return <div>
      <ul>
        {this.state.employees.map(emp => <li>{emp.firstName}</li>)}
      </ul>
    </div>;
  }

}

// const query = 'query { employees { id firstName lastName age } }';
// const variables = null;

// fetch('http://localhost:3020', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ query, variables })
// })
//   .then(res => res.json())
//   .then(result => {
//     ReactDOM.render(<HelloWorld employees={result.data.employees} />, document.querySelector('main'));
//   });

ReactDOM.render(<HelloWorld />, document.querySelector('main'));


