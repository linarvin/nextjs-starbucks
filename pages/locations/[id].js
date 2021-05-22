import Layout from "../../components/layout";

import Image from 'next/image';
import Link from 'next/link';

import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'

import {getAllLocationSlugs,getLocationBySlug} from "../../lib/api";

//getstaticpaths
export async function getStaticPaths(){
    const allLocationSlugs = await getAllLocationSlugs()
    const paths = allLocationSlugs.edges.map(edge => {
        const {slug} = edge.node
        return {
            params:{
                id: slug
            }
        }

    })
    
    return{
        paths,
        fallback: false
    }
}

//getstaticprops
export async function getStaticProps({params}){
    const locationData = await getLocationBySlug(params.id)
    return {
        props: {
            locationData
        }
    }
}

// initialize the compent
export default function LocationInfo({locationData}){
    const {title, featuredImage, content, menuTypes, locationInformation, relatedPeople} = locationData;
    const {sourceUrl, mediaDetails, altText} = featuredImage.node;
    const {width, height} = mediaDetails;
    return(
        <Layout>
            <Row>
                <Col>
                    <Link href="/locations">
                        <a>
                            Back to Locations
                        </a>
                    </Link>
                </Col>
            </Row>
            <Image 
                src={sourceUrl}
                height={height}
                width={width}
                alt={altText}
            />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}} />

            {menuTypes.edges.map(edge => {
                const {name, items} = edge.node;
                return <Section title={name}>
                    <Row justifyContentCenter>
                        {items.edges.map((edge, index) => {
                            const { node } = edge;
                            return <Col sm={6} md={4} lg={3}key={index}>
                                <Card node={node} parentPath='menu' />
                            </Col>
                        })}
                    </Row>
                </Section>
                // section, row, then a loop
            })}
            <Section title='Staff'>
            <Row justifyContentCenter>
                {relatedPeople.locationsEmployees.map((edge, index) => {
                    return <Col sm={6} md={4} lg={3}key={index}>
                    <Card node={edge} parentPath='people' />
                </Col>
                })}
            </Row>

            </Section>
            
        </Layout>
    )
}