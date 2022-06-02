import React from 'react';
import Table from "./App.test"
import CreateTable from "./createTable"

class App extends React.Component {
  render() {
    return (
		<div>
		<CreateTable/>
		<Table/>
	</div>
	);
  }
}

export default App;