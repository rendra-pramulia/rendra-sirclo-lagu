import React from 'react';
import './index.css';

function Artist({data, type}) {
    const isSearchPage = React.useMemo(() => {
        return type === 'search';
    }, [type]);
    const getImage = (dt) => {
        let img = '';
        if (dt.image[1] && dt.image[1]['#text']) {
            img = dt.image[1]['#text']
        }
        return img;
    };
    return (
        <section className="artists">
            <div className="artists-header">
                {isSearchPage ? (
                    <h2>Artists</h2>
                ) : (
                    <h2>Top Artists</h2>
                )}
            </div>
            <ul>
                {data.map((dt, index) => (
                    <li key={'artist-'+index}>
                        <figure>
                            <img src={getImage(dt)} alt={dt.name} />
                        </figure>
                        <p className="artists-title">{dt.name}</p>
                        <p className="artists-type">Artist</p>
                    </li>
                ))}
            </ul>
        </section>
        
    );
}

export default Artist;
