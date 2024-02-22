import data from '../../data/data.json'
import React from 'react';

export default function Works(){
    return(
        <section className="works--section">
            <div className="works--section--title">
                <h2>My Working Process</h2>
            </div>
            <hr className="underline4"/>
            <div className="works--section--container">
                {data?.works?.map((item, index) =>(
                    <div key={index} className={`works--section--card wcard-${index}`}>
                        <img src={item.img} alt="process" />
                        <h3 className="works--card--title">{item.title}</h3>
                        <hr className='underline5'/>
                        <p className="works--card--desc">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}