// next.js components
import Head from 'next/head'
import Image from 'next/image'

//custom components
import Layout, { siteTitle } from '../components/layout'
import Button from "../components/button"


// styles

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section>
      <Image 
          src="/images/making-coffee.jpg"
          alt="Two cups of Coffee"
          width={800}
          height={500}
        />
        <p>The highest quality coffees from around the world, freshly roasted by hand to bring out every ounce, so you can taste the craft in every cup.</p>
        <Button 
          label="View Menu" 
          path="/menu"
          type="primary"
        />
      </section>

      <section>
      <Image 
          src="/images/location.jpg"
          alt="Two cups of Coffee"
          width={800}
          height={500}
        />

        <p>Finds a Starbuck location near you and pick up your favorite coffee and food items today</p>
        
        <Button 
          label="Find a Store" 
          path="/locations"
          type="primary"
        />

      </section>
    </Layout>
  )
}