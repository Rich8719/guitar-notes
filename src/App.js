import React, { Component } from 'react'
import './App.css'

const notes = ["E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb"]
const strings = ["E", "A", "D", "G", "B"]
const string = strings[Math.floor(Math.random() * Math.floor(5))] //gets random string
const fret = (Math.floor(Math.random() * Math.floor(22))) // gets random fret
const answer = notes[(fret + notes.indexOf(string)) % 12]
const buttons = notes.map((note) => <button key={note.toString()} className="buttons">{note}</button>)


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			string: "",
			fret: Number,
			answer: ""
		}
	}

	generateQuestion = () => {
		this.setState({
			string: string,
			fret: fret,
			answer: answer
		})
	}

	componentDidMount() {
		this.generateQuestion()
	}

	render() {
		return (
			<div className="App">
				<div className="question">
					{this.state.string} {this.state.fret}
				</div>
				<div className="button-wrapper">
					{buttons}
				</div>
			</div>
		)
	}
}

export default App
