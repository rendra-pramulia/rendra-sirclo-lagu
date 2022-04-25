import React from 'react';

import { getTopTracks, getTopArtists } from '../api/chart';
import pagination from '../hooks/pagination';

import Artist from '../components/artist/Artist';
import Track from '../components/track/Track';

function HomePage() {
    const topTracks = pagination(getTopTracks);
    const topArtists = pagination(getTopArtists);

    const fetchData = () => {
        if (!topTracks.loading) {
            topTracks.request({}, ['tracks', 'track']);
        }
        if (!topArtists.loading) {
            topArtists.request({}, ['artists', 'artist']);
        }
    };

    const loadMore = () => {
        if (!topTracks.loadingMore) {
            topTracks.request({}, ['tracks', 'track']);
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {topArtists.loading ? (
                <p>loading....</p>
            ) : (
                <Artist data={topArtists.data} />
            )}
            {topTracks.loading ? (
                <p>loading....</p>
            ) : (
                <Track data={topTracks} loadMore={loadMore} />
            )}
        </>
    );
}

export default HomePage;
