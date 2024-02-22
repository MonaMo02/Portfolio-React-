import Hero from "../Hero"
import Count from '../Counts';
import AboutMe  from "../AboutMe";
import Services from "../Services.jsx";
import Works from "../Working.jsx";

export default function Home(){
    return(
        <>
        <Hero />
        <Count />
        <AboutMe />
        <Services />
        <Works />
        </>
    );
}