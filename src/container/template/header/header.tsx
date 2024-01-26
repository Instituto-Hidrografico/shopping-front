import { element } from 'prop-types'
import { UriToScreenFormat } from '../../../assets/uri.format'
import { getPayload } from '../../../service/service.token'
import { Button } from '../button/button'
import { vector } from '../../menu/category'
import './header.css'
import { InputGroup } from '../../page/generic.field'
import './../inputgroup/inputgroup.css'

interface IHeader {
    title: string,
    function?: any,
}

export const Header = (header: IHeader) => {
    return (
        <header className='header'>
            {vector.find((element)=> element.includes(header.title)) && <Button category={'primary'} function={header.function} name={'New'}/>}
            <h1>{UriToScreenFormat(header.title)}</h1>


            <span className='.inputgroup'>
                <input disabled={false} type="text" name={"ddddddd"} placeholder={'ddddddd'} />
                <label htmlFor={"ddddddd"}>{}</label>
                <span>{"ddddddd"}</span>
            </span>


            <a href={`#/${'profile'}`}><Button category={'secondary'} name={getPayload().sub} /></a>
        </header>
    )
}