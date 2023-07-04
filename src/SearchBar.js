import React from 'react';

function SearchBar(props){
    return (
        <form onSubmit={props.search}>
            <div className="ranking">
            <button onClick={(event) => props.handleSortBy(event, "best_match")}  value="best_match" className="choice"><span>Best</span><span>Match</span></button>
            <button onClick={(event) => props.handleSortBy(event, "rating")} value="rating" className="choice"><span>Highest</span><span>Rated</span></button>
            <button onClick={(event) => props.handleSortBy(event, "review_count")} value="review_count" className="choice"><span>Most</span><span>Reviewed</span></button>

            </div>
            <div className="search">
                <div className="search-bar">
                <input onChange={props.handleTerm} type="search" placeholder='Search Businesses'></input>
                <input onChange={props.handleLoc} type="search" placeholder="Where"></input>

                </div>
            
                <button  type="submit" value="submit">Let's Go</button>

       
                

            </div>
            
            
        </form>

    );

}
export default SearchBar;