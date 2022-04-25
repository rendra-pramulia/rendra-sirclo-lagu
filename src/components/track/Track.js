import React from 'react';
import Spinner from '../spinner/Spinner';
import './index.css';

function Track({data, loadMore, type}) {
    const isSearchPage = React.useMemo(() => {
        return type === 'search';
    }, [type]);
    const format = (dt) => {
        if (isSearchPage) {
            return new Intl.NumberFormat().format(dt.listeners)
        } else {
            return new Intl.NumberFormat().format(dt.playcount)
        }
    };
    return (
        <section className="tracks">
            <div className="tracks-header">
                {isSearchPage ? (
                    <h2>Tracks</h2>
                ) : (
                    <h2>Top Tracks</h2>
                )}
            </div>
            <div className="tracks-header">
                <div className="tracks-list tracks-list-header">
                    <span>#</span>
                    <span>TITLE</span>
                    <span>ARTIST</span>
                    <span>PLAYS</span>
                    {!isSearchPage && <span>TIME</span>}
                </div>
            </div>
            <div className="tracks-item">
                {data.data.map((dt, index) => (
                    <div key={'track'+index} className="tracks-list tracks-list-item">
                        <span>{index+1}</span>
                        <span>{dt.name}</span>
                        <span>{isSearchPage ? dt.artist : dt.artist.name}</span>
                        <span>{format(dt)}</span>
                        {!isSearchPage && <span>{dt.duration}</span>}
                    </div>
                ))}
            </div>
            {!data.ended && !isSearchPage && (
                <div className="center-item">
                    <button type="button" className="load-more" onClick={() => loadMore()}>
                        {data.loadingMore ? (
                            <Spinner />
                        ) : (
                            <span className="button-text">load more</span>
                        )}
                    </button>
                </div>
            )}
        </section>
        
    );
}

export default Track;
