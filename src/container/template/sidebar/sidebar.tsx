import { useState, useEffect, useTransition } from 'react'
import { Icon } from '../../../assets/svg.access'
import { UriToScreenFormat } from '../../../assets/uri.format'
import { logout } from '../../../service/service.crud'
import { accessList } from '../../access.list'
import { vector } from '../../menu'
import logo from '../../assets/image/coffee2.png'
import './sidebar.css'

export const SideContainer = () => {
  // const [ispending, startTransition] = useTransition()
  const [collapsible, setCollapsible] = useState(false)
  const [list, setList] = useState<boolean[]>(accessList())
  const [show, setShow] = useState(true)
  const showCollapsible = () => { setCollapsible(!collapsible) }
  const changeShow = () => { setShow(!show) }

  const collapse: string[][] = [
    ["weather", "bootstrap", "sixth"],
    ["weatherOffShore", "table", "sixth"],
    ["weatherOnShore", "geo-fill", "sixth"],
  ]

  // useEffect(()=> {
  //   startTransition(() => setList(accessList()))
  // },[])
  return (
    <aside>
      <nav>
        <a key={0} href={`#/`} ><Icon name={'home'} /><p>{UriToScreenFormat('home')}</p></a>
        {vector.map((element, index) => {
          return <a key={Math.random()} href={`#/${vector[index][0]}`}><Icon name={vector[index][1]} /><p>{UriToScreenFormat(vector[index][0])}</p></a>
        })}
      </nav>
      {/* <a key={'logout'} href={`#/${'login'}`} element={'final'} onClick={logout}><Icon name={'geo-fill'} /><p>logout</p></a> */}
    </aside>
  )
}