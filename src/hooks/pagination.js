import React from 'react';
const limit = 7;

const PaginationRequest = (apis) => {
	const [data, setData] = React.useState([]);
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [loadingMore, setLoadingMore] = React.useState(false);
    const [ended, setEnded] = React.useState(false);
    const [page, setPage] = React.useState(1);

	const request = async (params = {}, keyData = [], keyword = {}) => {
		try {
            const newParams = {...params, limit, ...keyword};
            if (data.length === 0) {
                setLoading(true);
                newParams.page = 1;
                setPage(1);
            } else {
                if (data.length % limit === 0 && !ended) {
                    setLoadingMore(true);
                    newParams.page = page + 1;
                } else {
                    setEnded(true);
                    return false;
                }
            }
            let allData = [...data];
            console.log(newParams);
            const response = await apis(newParams);
            if (response && response.status === 200 && response.data) {
                let list = response.data || [];
                keyData.forEach(key => {
                    if (list[key]) {
                        list = list[key];
                    }
                });
                if (list.length) {
                    if (newParams.page > 1) {
                        allData = [...data, ...list];
                        setPage(page + 1);
                    } else {
                        allData = [...list];
                    }
                }
                if (allData.length % limit > 0) {
                    setEnded(true);
                }
                console.log(list);
                console.log(data);
            }
            setData(allData);
			setLoading(false);
			setLoadingMore(false);
			setError(false);
			return allData;
		} catch (e) {
			setData([]);
			setError(true);
			setLoading(false);
			setLoadingMore(false);
			return false;
		}
	};

	const reset = () => {
		setData([]);
		setError(false);
		setLoading(true);
		setLoadingMore(false);
        setEnded(false);
	};

	return { data, error, loading, loadingMore, ended, request, reset };
};

export default PaginationRequest;
