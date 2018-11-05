import React, { Component } from "react";
import axios from 'axios';

import Header from './components/Header.js';
import Table from './components/Table.js'
import Footer from './components/Footer.js'
import Buttons from './components/Buttons.js';

class App extends Component {
    constructor() {
        super();

       this.state = {
			recent: [],
			allTime: [],
			selected: []
		};

	}

	//On Page Load Get Inital Data for leaderboard using Axios to make request for JSON file
	componentDidMount = () => {

		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then( recent => {
			this.setState({
				recent: recent.data,
				selected:recent.data
			})
		});

		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then( allTime => {
			this.setState({
				allTime: allTime.data
			})
		});

	}

	// Decide which to show based on selected
	handleClick = (clicked) => {
		let selected = this.state.recent;

		switch (clicked) {
			case 'recent': 
				 selected= this.state.recent;
				break;
			case 'allTime':
				selected = this.state.allTime;
				break;
			case 'reverse':
				selected = this.state.selected.reverse();
				break;	
			default:
				selected = this.state.recent;
		}

		this.setState({
			selected: selected
		})
	}

    render() {
		return (
			<div>
				<Header />
				<Buttons selected={this.state.selected} handleClick={this.handleClick}/>
				<Table selected={this.state.selected} handleClick={this.handleClick}/>
				<Footer />
			</div>
		);
    }
}

export default App;
