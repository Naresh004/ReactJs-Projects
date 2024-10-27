import React from 'react';

const GAllery = ({data}) => {
  return (
    <div className='row'>
        <div>
            {data.map((image)=><div key={image.id}>
        <div>
            <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            height="200"
            width ="250" />
        </div>
      </div>
        )}
    </div>
    </div>
  
  );
}

export default GAllery;
