import axios from './axios';

const searchTracks = ({page, limit, keyword}) => {
    return axios.get(``, {
        params: {
            method: "track.search",
            page,
            limit,
            track: keyword
        }
    });
};

export { searchTracks };