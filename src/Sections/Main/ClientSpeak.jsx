export default function Reviews(){
    return(
        <section className="reviews--section">
            <div className="reviews--section--container">
                <div className="reviews--section--content">
                    <div className="reviews--section--title">
                        <h3 >Client Speak</h3>
                        <hr className="underline"/>
                    </div>
                    <div className="reviews--section--desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus hic reprehenderit ratione accusantium aperiam assumenda, a iste nulla omnis nesciunt quis sunt minima, reiciendis quos facere quo obcaecati, doloribus ex.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quidem incidunt exercitationem amet delectus doloremque quas mollitia veritatis vero iste! Eaque accusantium architecto corporis eveniet ipsum veritatis quia dolores illo!</p>
                        <br />
                        <p className="reviewer--name">Charles Leclerc</p>
                        <hr  className="underline"/>
                        <div className="review--rating">
                        <p>Rating</p>
                        <hr className="underline" />
                        <div className="review--stars">
                            <img className="star" src="./img/star.png" alt="" />
                            <img className="star" src="./img/star.png" alt="" />
                            <img className="star" src="./img/star.png" alt="" />
                            <img className="star" src="./img/star.png" alt="" />
                            <img className="star" src="./img/star.png" alt="" />
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="reviews--section--img">
                    <img src="./img/client (3).png" alt="" />
                </div>

            </div>
            <div className="bubbles"> 
                <img src="./img/mybubbles.png" alt="bubbles" />
            </div>
        </section>
    );
}