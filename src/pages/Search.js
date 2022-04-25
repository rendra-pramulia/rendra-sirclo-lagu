import React from 'react';
import Search from '../components/search/Search';
import Spinner from '../components/spinner/Spinner';
import Artist from '../components/artist/Artist';
import Track from '../components/track/Track';
import pagination from '../hooks/pagination';
import { searchArtists } from '../api/artists';
import { searchTracks } from '../api/tracks';

function SearchPage() {
    const searchTrack = pagination(searchTracks);
    const searchArtist = pagination(searchArtists);

    const [keyword, setKeyword] = React.useState('');

    const onSearch = (keyword) => {
        setKeyword(keyword);
        if (keyword) {
            Promise.all([searchTrack.request({}, ['results', 'trackmatches', 'track'], {keyword}),searchArtist.request({}, ['results', 'artistmatches', 'artist'], {keyword})]).then((values) => {
                console.log(values);
            });
        }
    };

    return (
        <>
            <Search onSearch={(keyword) => onSearch(keyword)} />
            {!searchTrack.loading && !searchArtist.loading && keyword ? (
                <>
                    <Artist data={searchArtist.data} type="search" />
                    <Track data={searchTrack} type="search" />
                </>
            ) : keyword ? (
                <Spinner size="medium" />
            ) : false 
            }
        </>
    );
}

export default SearchPage;
