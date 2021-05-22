import Layout from '../../components/layout';

import Image from 'next/image';
import Link from 'next/link';

import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'


import {getAllPeopleSlugs, getPeopleBySlug} from "../../lib/api";

//getstaticpaths

export async function getStaticPaths(){
    const allPeopleSlugs  = await getAllPeopleSlugs()

    const paths = allPeopleSlugs.edges.map(edge => {
        const {slug} = edge.node
        return {
            params: {
                id: slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

//getstaticprops

export async function getStaticProps({params}){
    const peopleData = await getPeopleBySlug(params.id)
    return{
        props: {
            peopleData
        }
    }
}

// initialize the compent

export default function PeopleInfo({peopleData}){
    const {title, featuredImage, content, locationInformation, relatedLocations} = peopleData;
    const { sourceUrl, mediaDetails, altText } = featuredImage.node;
    const { width, height } = mediaDetails;
    return(
        <Layout>
            <Row>
                <Col>
                    <Link href="/people">
                        <a>
                            Back to People
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

            <Section title='Locations'>
            <Row justifyContentCenter>
                {relatedLocations.locationsEmployees.map((edge, index) => {
                    return <Col sm={6} md={4} lg={3}key={index}>
                    <Card node={edge} parentPath='locations' />
                </Col>
                })}
            </Row>

            </Section>
        </Layout>
    )
}