import React from 'react';
import './index.css';

function Search({onSearch}) {
    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 1000);
        };
    };

    const optimizedFn = React.useCallback(debounce(onSearch), []);

    return (
        <form className="search">
            <input className="search-input" type="search" placeholder="Search artist or track" onChange={(e) => optimizedFn(e.target.value)} />
        </form>
    );
}

export default Search;