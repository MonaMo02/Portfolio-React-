
export default function Hero(){
    return(
        <div className="herosec--main">
            <div className="herosec--main--container">
                <div className="herosec--main--content">
                    <div className="herosec--main--title">
                        <h1>Hello, I'm Danie Gold</h1>
                        <h1> A UI/IX Designer</h1>
                    </div>
                    <div className="herosec--main--description">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus, natus voluptas error quaerat, </p>
                        <p className="text-sm">saepe sit delectus ipsum iusto aut corporis provident? Dicta explicabo rem dolores nostrum minima fugiat harum.</p>
                    </div>
                    <div>
                        <button className="btn btn--explore">Explore</button>
                    </div>
                </div>
                <div className="herosec--main--img">
                    <img src="./img/Finalhero.png" alt="Hero" />
                </div>
            </div>
        </div>
    );
}