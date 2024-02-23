import data from '../../data/data.json'
import React from 'react';


export default function Count(){
    return(
        <section id='Statistics' className="counts--section">
    <div className="counts--section--container">
        {data?.counts?.map((item, index) => (
            <div key={index} className='count--section--card' >
                <div className='count--section--content'>
                    <h3 className='count--count'>
                        {item.count}
                    </h3>
                    <p className='count--description'>{item.description}</p>
                </div>
                {index !== data.counts.length - 1 && <hr className='divider' />}
            </div>
        ))}
    </div>
</section>

    );
};
