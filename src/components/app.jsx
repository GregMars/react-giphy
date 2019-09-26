import React, { Component } from 'react';
import giphy from 'giphy-api'
import SearchBar from './search_bar';
import Gif from './gif'
import GifList from './gif_list'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gifs: [],
			selectedGifId: 'l0HlDmzCz0GWW9XDa'
		}
	}
	selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }
	search = (query) => {
		giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm').search({	
			q: query, 
			rating: 'g',
			limit: 10
		}, (err, result) => {
			if (err) {
				console.log(err);
			}
			this.setState({
				gifs: result.data
			});
		});
	}
	render() {
		return (
			<div>
				<div className="left-scene">
					<SearchBar searchFunction={this.search} />
					<div className="selected-gif">
						<Gif id={this.state.selectedGifId} />
					</div>
				</div>
				<div className="rigth-scene">
					<GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
				</div>
			</div>
		);
	 }
}
export default App;