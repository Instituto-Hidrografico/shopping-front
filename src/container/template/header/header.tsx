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


            {/* <span className='inputgroup tooltip' data-tip={['']}>
                <input disabled={true} className="title" value="4" tabIndex={0} />
                <input disabled={true} type="text" name={"ddddddd"} placeholder={'ddddddd'} />
                <label htmlFor={"ddddddd"} className={'validation'}>{"ddddddd"}</label>
                <input disabled={false} type="text" name={"123"} placeholder={'123'} />
                <label htmlFor={"123"} className={'validation'}>{"123"}</label>
            </span> */}


            <a href={`#/${'profile'}`}><Button category={'secondary'} name={getPayload().sub} /></a>
        </header>
    )
}