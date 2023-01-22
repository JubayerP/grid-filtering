import React, { useEffect } from 'react';

const Filter = ({setActiveGenre, activeGenre, setFiltered, popular}) => {
    const buttons = [
        {
            name: 'All',
            genre: 0,
            onClick: () => setActiveGenre(0)
        },
        {
            name: 'Comedy',
            genre: 35,
            onClick: () => setActiveGenre(35)
        },
        {
            name: 'Action',
            genre: 28,
            onClick: () => setActiveGenre(28)
        },
    ]

    useEffect(() => {
        if(activeGenre === 0){
            setFiltered(popular)
            return;
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre))
        setFiltered(filtered)
    },[activeGenre])



    return (
        <div className='filter-container'>
            {
                buttons.map(btn => {
                    return <button className={activeGenre === btn.genre ? "active" : ""} onClick={btn.onClick} key={btn.name}>{btn.name}</button>
                })
            }
        </div>
    );
};

export default Filter;