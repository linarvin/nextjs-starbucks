
import Col from '../../components/col'
import Layout from '../../components/layout'
import Row from '../../components/row'

import {getPeople} from '../../lib/api'

import Card from '../../components/card'

// get static props

export async function getStaticProps(){
    
    const persons = await getPeople()
    
    return {
        props: { persons }
    }
}

export default function People({persons}){
    return(
        <Layout>
            <h1>People</h1>
            <Row justifyContentCenter>
                {persons.edges.map((edge, index) => {
                    const {node} = edge;
                    return <Col sm={6} md={4} lg={3} key={index}>
                        <Card node={node} parentPath='people'/>
                    </Col>

                })}

            </Row>
        </Layout>
    )
}