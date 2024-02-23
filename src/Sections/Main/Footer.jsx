import data from '../../data/data.json'
import React from 'react';


export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer--container">
                <div className="footer--LOGO">
                    <img className='navbar--img' src="./img/logo (1).png" alt="" />
                    <h3>Contact Me</h3>
                    <div className='img--list'>
                        <img src="./img/facebook.png" alt="" />
                        <img src="./img/linkedin.png" alt="" />
                        <img src="./img/github.png" alt="" />
                    </div>
                </div>
                {data?.footer_lists?.map((item, index) =>(
                        <div key={index} className='footer--lists--container'>
                            <div >
                                <h3>{item.title}</h3>
                                <div className='list'>
                                    {item?.list?.map((item, index) =>
                                        <ul key={index}>
                                            <li>{item.title}</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                
            </div>
            <hr className='footer--divider' />
            <div className='rights'>
                <p>
                    @Made by Mouna Djeraoui | All Rights Reserved 
                </p>
            </div>
        </footer>
    );
}