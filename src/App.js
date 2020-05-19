// import React, { Component } from 'react'
// import './App.css'

const notes = ["E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb"]
const strings = ["E", "A", "D", "G", "B"]

const string = strings[Math.floor(Math.random() * Math.floor(5))] //gets random string
const indexOfString = notes.indexOf(string) //gets the index of string in the notes array
const fret = (Math.floor(Math.random() * Math.floor(22))) // gets random fret
const note = notes[fret]


const	answer = () => {
	let answer = notes[(fret + indexOfString) % 12];
	
	

	console.log(`The ${fret} fret on the ${string} string is a ${answer}`)

	
	

	// if (fret < 12) {
	// 	answer = notes[fret + stringIndex]
	// } else {
	// 	answer = notes[fret % 12]
	// 	console.log(answer);	
	// }
	// 
	}

	answer()

// class App extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			string: "",
// 			fret: Number,
// 			stringIndex: Number
// 		}
// 	}

	
// 	//get random string
// 	getString = () => {
// 		const stringIndex = Math.floor(Math.random() * Math.floor(6))
// 		this.setState({
// 			string: strings[stringIndex],
// 			stringIndex: stringIndex
// 		})
// 	}

// 	//get random fret
// 	getFret = () => {
// 		this.setState({
// 			fret: Math.floor(Math.random() * Math.floor(22))
// 		})
// 	}

// 	noteButtons = () => {
// 		// made from notes array, for user input
// 	}

// 	correctNote = () => {
// 		console.log(this.state.stringIndex);
		
// 	}

// 	componentDidMount() {
// 		this.getString()
// 		this.getFret()
// 		this.correctNote()
// 	}

// 	render() {
// 		return (
// 			<div className="App">
// 				{this.state.string} {this.state.fret}
// 			</div>
// 		)
// 	}
// }

// export default App
