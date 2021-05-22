// next.js component
import Head from 'next/head'
import Link from 'next/link'

//custom component
import Layout from '../components/layout'

export default function Contact(){
    return(
        <Layout>
            <Head>
                <title>Contact | Starbucks </title>
                <meta name="description" content="An about page"/>
            </Head>
            <h1>Contact Us</h1>
            <p>
              If you didn't find your answer in our FAQs, please feel free to contact one of the departments listed below. Simply click on the appropriate link and send us your questions, concerns and/or feedback.
            </p> 

            <h2>Customer Service</h2>

            <h3>Chat</h3>
            <p>Chat with a member of our support team for US and Canada <br />
              Hours: 4AM - 10PM PT, 7 days a week</p>

            <h3>Email</h3>
            <p>Please use the links on this page to email a specific department.</p>

            <h3>Phone</h3>
            <p>800-Starbuc (800-782-7282) <br />
            Hours: 5AM – 8PM PT, 7 days a week </p>

            <h3>Holiday Closures</h3>
            <p>Our Customer Contact Center will be closed to observe the following US Holidays: </p>
            <p>
            New Years Day <br />
            Memorial Day <br />
            Independence Day <br />
            Labor Day <br />
            Thanksgiving <br />
            Christmas
            </p>

            <p>More Information at: (click below) <br/>   
        
            <Link href="https://customerservice.starbucks.com/app/contact/ask/"> 
                <a>
                    Starbucks Contact Us
                </a>
            </Link>
        </p> 
           
        </Layout>
    )
}