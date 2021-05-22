// next.js component
import Head from 'next/head'
import Link from 'next/link'

//custom component
import Layout from '../components/layout'

export default function About(){
    return(
        <Layout>
            <Head>
                <title>About | Starbucks </title>
                <meta name="description" content="An about page"/>
            </Head>
            <h1>About</h1>
            <h2>Our Heritage </h2>
            <p> Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world a little better. It was true when the first Starbucks opened in 1971, and it’s just as true today. <br />
            <br />

            Back then, the company was a single store in Seattle’s historic Pike Place Market. From just a narrow storefront, Starbucks offered some of the world’s finest fresh-roasted whole bean coffees. The name, inspired by Moby Dick, evoked the romance of the high seas and the seafaring tradition of the early coffee traders. <br /> <br />

            In 1981, Howard Schultz (Starbucks chairman and chief executive officer) had first walked into a Starbucks store. From his first cup of Sumatra, Howard was drawn into Starbucks and joined a year later. <br /> <br />

            In 1983, Howard traveled to Italy and became captivated with Italian coffee bars and the romance of the coffee experience. He had a vision to bring the Italian coffeehouse tradition back to the United States. A place for conversation and a sense of community. A third place between work and home. He left Starbucks for a short period of time to start his own Il Giornale coffeehouses and returned in August 1987 to purchase Starbucks with the help of local investors. <br /> <br />

            From the beginning, Starbucks set out to be a different kind of company. One that not only celebrated coffee and the rich tradition, but that also brought a feeling of connection. <br /> <br />

            Our mission to inspire and nurture the human spirit – one person, one cup, and one neighborhood at a time. <br />

            </p>

        <h2>Expect More Than Coffee</h2>
        <p> We’re not just passionate purveyors of coffee, but everything else that goes with a full and rewarding coffeehouse experience. We also offer a selection of premium teas, fine pastries and other delectable treats to please the taste buds. And the music you hear in store is chosen for its artistry and appeal. <br /> <br />

        It’s not unusual to see people coming to Starbucks to chat, meet up or even work. We’re a neighborhood gathering place, a part of the daily routine – and we couldn’t be happier about it. Get to know us and you’ll see: we are so much more than what we brew. <br /> <br />

        We make sure everything we do is through the lens of humanity – from our commitment to the highest quality coffee in the world, to the way we engage with our customers and communities to do business responsibly.</p>

        <p>Read More about it at: (click below) <br/>   
        
            <Link href="https://www.starbucks.com/about-us/company-information"> 
                <a>
                    Starbucks About Us
                </a>
            </Link>
        </p> 
        </Layout>
    )
}