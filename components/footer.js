// next.js components
import Image from 'next/image'
import Link from 'next/link'

//custom components
import Container from './container'
import Col from './col'
import Row from './row'
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'

import styles from './footer.module.scss'

//different way to create compents and export
const Footer = () => {
    return(
        <footer className={styles.footer}>
            
            <Container >
                <Row justifyContentLeft>
                    <ButtonUI icon="facebook" /> 
                    <ButtonUI icon="twitter" />
                    <ButtonUI icon="instagram" />

                    <p> 2021 Starbucks Coffee Company.   All rights reserved.   Privacy Policy Terms of use</p>
                    
                    
                </Row>

            </Container>
            
        
        </footer>
    )
}
export default Footer;