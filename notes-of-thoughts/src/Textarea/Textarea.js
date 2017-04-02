import React, { Component } from 'react';
import './Textarea.css';

class TextArea extends Component {

	render() {
		return (
			<div className="w-text-area">
				<textarea name="text" placeholder="Start typing of your thoughts...">
				</textarea>
					<button className="submit-btn">Publish</button>
			</div>
		)
	}

}

export default TextArea;
