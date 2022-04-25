import axios from './axios';

const searchArtists = ({page, limit, keyword}) => {
    return axios.get(``, {
        params: {
            method: "artist.search",
            page,
            limit,
            artist: keyword
        }
    });
};

export { searchArtists };