import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search-box/search-box.component";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((robots) => this.setState({ robots }));
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { robots, search } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>RoboFighters</h1>
        <Search handleChange={this.handleChange} />
        <CardList robots={filteredRobots}></CardList>
      </div>
    );
  }
}

export default App;
