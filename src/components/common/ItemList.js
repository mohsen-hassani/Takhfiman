import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    state = {albums: [] };
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
            Response => this.setState({albums: Response.data}));
    }

    renderAlbum(){
        return this.state.albums.map(
            album => <AlbumDetail album={album} key={album.title} />
        );
    }

    render(){
        console.log(this.renderAlbum());
        return(
            <ScrollView style={{ backgroundColor: '#fff' }}>
                {this.renderAlbum()}
            </ScrollView>
        );
    }
}

export default AlbumList;