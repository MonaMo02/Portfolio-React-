import data from '../../data/data.json'
import React from 'react';

export default function Services(){
    return(
        <section className="serives--section">
            <div className="services--section--title">
                <h2>What Services You Will Get From Me</h2>
            </div>
            <hr className="underline2"/>
            <div className="services--section--container">
                {data?.services?.map((item, index) =>(
                    <div key={index} className={`services--section--card card-${index}`}>
                        <img src={item.img} alt="design" />
                        <h3 className="service--card--title">{item.title}</h3>
                        <hr className='underline3'/>
                        <p className='service--card--desc'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}