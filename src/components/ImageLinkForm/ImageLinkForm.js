import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () =>{
    return (
        <div>
        <p className="f3 black">
            {'This Magic face will detect faces in your pictures.'}
        </p>
        <p className="f3 black">
    {'Go for it!!!'}
       </p>
       <div className='center'>
       <div className=' form center pa3 br3 shadow-5'>
        <input className='f4 pa2 w-70 center' type='tex' />
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-gray'>Detect</button>
        </div>
       </div>
        </div>
    )
}

export default ImageLinkForm