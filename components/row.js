import classnames from 'classnames/bind'
import styles from './row.module.scss'

let cx = classnames.bind(styles)

export default function Row({children, justifyContentCenter, justifyContentSpaceBetween, justifyContentLeft}){
    
    const rowClasses = cx({
        row : true,
        ['justify-content-center']: justifyContentCenter,
        ['justify-content-space-between']:justifyContentSpaceBetween,
        ['justify-content-left']:justifyContentLeft

    })

    return (
        <div className={rowClasses}>
            {children}
        </div>
    )
}