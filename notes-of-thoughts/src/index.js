import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './Notes/Notes'
import TextArea from './Textarea/Textarea';
import Header from './Header/Header'
import './index.css';

var AppHome = React.createClass({
	getInitialState () {
		return {
			notes:[
				{
					heading: 'First note',
					content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
					bgc: '#E67E22'
				},
				{
					heading: 'First note',
					content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
					bgc: '#9B59B6'
				},
				{
					heading: 'First note',
					content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
					bgc: '#1ABC9C'
				}
			]
		};
	},
  render () {
    return (
      <div className="container">
				<Header />
        <TextArea />
				<Notes notes={this.state.notes} />
      </div>
    )
  }
});

ReactDOM.render(
	<AppHome />,
	document.getElementById('root')
);
