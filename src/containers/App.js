import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
// import {robots} from './robots';
// import Cards from './Cards';




class App extends React.Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}


	render(){
		const filterbots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robots.length === 0){
			return <h1>Loading...</h1>
		}
		else{
			return(
		<div className='tc'>
			<h1 id="thisone" className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filterbots} />
				</ErrorBoundary>
			</Scroll>
		</div>
	);
		}
	
	}
}
export default App;