import { useState } from 'react'

// next.js components
import Image from 'next/image'
import Link from 'next/link'

//custom components
import Container from './container'
import Row from './row'
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'

// styles
import styles from './header.module.scss'


// export allows it to be imported elsewhere
export default function Header(){

    // first ele: hold true or false, second ele: updates
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (

        <header className={styles.header}>
            <Container>
                <Row justifyContentSpaceBetween>
                    <ButtonUI icon="search" />
                    <Link href="/">
                        <a>
                            <Image 
                                src="/images/starbucks-logo.svg"
                                width={100}
                                height={100}
                                alt="Starbucks logo"
                            />
                        </a>
                    </Link>
                    <ButtonUI 
                        icon="menu" 
                        clickHandler={() => {setIsMenuVisible(true)}}
                    />
                    {
                        isMenuVisible && 
                        <NavOverlay 
                            closeClickHandler={() => {
                                setIsMenuVisible(false)
                            }}
                        />
                    }

                </Row>

            </Container>
            
            
        </header>
    )

} // header export ends here 