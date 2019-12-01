import React, {Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state ={
      robotsAsState: [],
      searchField: ''
    }
  }
  componentDidMount () {
    fetch ('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(singleRobot=>this.setState({robotsAsState:singleRobot}))
  }
onSearchChangeFunc = (event) => {
  this.setState({searchField: event.target.value});
}
  render (){
    const {robotsAsState, searchField} = this.state;
    const filteredRobots = robotsAsState.filter(singleRobot => {
      return singleRobot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <SearchBox searchChangeAsProp={this.onSearchChangeFunc}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robotsAsProp={filteredRobots} />
          </ErrorBoundary>          
        </Scroll>        
      </div>
    );
      }
}

export default App;


        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}