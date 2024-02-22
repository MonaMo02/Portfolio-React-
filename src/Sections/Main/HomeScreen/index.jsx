import Hero from "../Hero"
import Count from '../Counts';
import AboutMe  from "../AboutMe";
import Service from "../Services.jsx";

export default function Home(){
    return(
        <>
        <Hero />
        <Count />
        <AboutMe />
        <Service />
        </>
    );
}