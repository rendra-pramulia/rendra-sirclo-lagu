import axios from './axios';

const getTopTracks = ({page, limit}) => {
    return axios.get(``, {
        params: {
            method: "chart.gettoptracks",
            page,
            limit,
        }
    });
};

const getTopArtists = ({page, limit}) => {
    return axios.get(``, {
        params: {
            method: "chart.gettopartists",
            page,
            limit,
        }
    });
};

export {
    getTopTracks,
    getTopArtists,
};