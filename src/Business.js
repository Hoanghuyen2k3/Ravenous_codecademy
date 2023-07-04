import React from 'react';
function Business(props){
    const ex =props.business;
    return(

        ex&&<div className="show">
            {
                ex.map((e)=>{
                    return (
                        <div className="business" key={e.id}>
                            <div className='img-container'>
                                <img className="business-pic" src={e.image_url} alt="img-pic" />
                            </div>
                            <h3>{e.name}</h3>
                            <div className="body-business">
                                <div className="location">
                                    <p>{e.location.address1}</p>
                                    <p>{e.location.city}</p>
                                    <p>{e.location.state} {e.location.zip_code}</p>
        
                                </div>
                                <div className="business-name">
                                    <h2>{e.location.country}</h2>
                                    <h5>{e.rating} stars</h5>
                                    <p>{e.review_count} reviews</p>
                                    
        
                                </div>
                            </div>
        
                        </div>
                    )
                })


            }
        </div>
        
    )

    


    
}
export default Business;
