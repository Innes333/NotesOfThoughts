import React, { Component } from 'react';
import './Notes.css';

class Notes extends Component {
	componentDidMount() {
		const grid = this.refs.grid;
		
	};

	render() {
		return (
			<div className="note-grid" ref="grid">

					 {this.props.notes.map((item,index) =>
						<div className="note"
								 key={index}
								 style={{ 'background':item.bgc }}>
							<div className="note-heading">
							 	{ item.heading}
							</div>
							<div className="note-text">
								{ item.content }
							</div>
						</div>
					)}

			</div>
		);
	}
}

export default Notes;
