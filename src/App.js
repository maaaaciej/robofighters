import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import {Search} from './components/search-box/search-box.component'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search:''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((robots) => this.setState({ robots }));
  }

  render() {
    return (
      <div className="App">
        <h1>RoboFighters</h1>
        <input type="search" name="" onChange={e=>this.setState({search: e.target.value})} id="" placeholder="Search RoboFighters"/>
        <CardList robots={this.state.robots}></CardList>
      </div>
    );
  }
}

export default App;
