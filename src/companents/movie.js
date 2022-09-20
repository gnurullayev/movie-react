import React from 'react';

export default function Movie(props) {
    const {Poster, Title, Year, Type} = props.movie
    return (
        <div>
            <div className="card" style={{minHeight: "520px"}}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator card-img" src={Poster}/>
                </div>

                <div className="card-content">

                    <span className="card-title activator grey-text text-darken-4">{Title}</span>
                    
                    <span> Year: <span className='orange-text text-lighten-2'>{Year}</span></span>
                    
                    <span className='right blue-text text-darken-2'>{Type}</span>
                </div>
            </div>
        </div>
    );
}