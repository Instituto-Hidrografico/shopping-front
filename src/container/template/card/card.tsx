import { UriToScreenFormat } from '../../../assets/uri.format'
import { Icon } from '../../../assets/svg.access'
import { vector } from '../../category'
import './card.css'

export const Cards = () => {
    return (
        <div className='card'>
            {vector.map((element, index) => {
                return <span key={Math.random()}><a key={Math.random()} href={`#/${vector[index][0]}`}><Icon name={vector[index][1]} /><p>{UriToScreenFormat(vector[index][0])}</p></a></span>
            })}
        </div>
    )
}