export default function Subscribe(){
    return(
        <section className="subscribe--section">
            <div className="subscribe--section--title">
                <h1>SUBSCRIBE</h1>
            </div>
            <hr  className="underline"/>
            <div className="subscribe--section--paragraph">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur laboriosam omnis. Doloribus delectus aut quod velit provident, corporis cum similique consectetur, soluta, repudiandae sunt nulla ratione doloremque eum minima!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia officiis sit, veniam dolores corrupti quae labore maxime! Itaque, quia exercitationem.
                </p>
            </div>
            <div className="subscribe--form">
                <form className="form">
                    <div className="subscribe--form--container">
                        <div className="subscribe--from--input">
                            <label htmlFor="emailSub" className="Email_subscription">
                                <input type="text" className="subscribe--input text-md" name="emailSub" id="emailsub" placeholder="Email" required />
                            </label>
                        </div>
                        <div>
                            <button className="btn subscribe--form--btn">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}