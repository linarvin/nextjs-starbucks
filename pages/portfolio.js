// next.js component
import Head from 'next/head'

//custom component
import Layout from '../components/layout'

export default function Portolio(){
    return(
        <Layout>
            <Head>
                <title>Portfolio | Arvin Lin </title>
                <meta name="description" content="A robust portfolio of web design project"/>
            </Head>
            <h1>Portfolio</h1>
        </Layout>
    )
}