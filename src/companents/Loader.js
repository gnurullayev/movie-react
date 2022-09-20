import React from 'react';

function Loader(props) {
    return (
       <div className='loader'>
            <div className='preloader-wrapper big active'>
                <div class="spinner-layer spinner-blue">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Loader;