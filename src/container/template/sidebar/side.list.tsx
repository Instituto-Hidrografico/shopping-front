import { useState, useLayoutEffect, useTransition, startTransition } from 'react'
import { SideTitle, SideItem, Sidebar, SidebarHeader, SidebarCollapsible } from '../flex'
import { Icon } from '../../../assets/svg.access'
import { UriToScreenFormat } from '../../../assets/uri.format'
import { logout, retrieve } from '../../../service/service.crud'
import { accessList } from '../../access.list'
import { vector } from '../../category'
import logo from '../../../assets/image/coffee2.png'
import { ErrorMessage } from '../../../assets/error/errorMessage'
import { initialErrorMessage } from '../../../assets/error/errorMessage.initial'

export const SideList = () => {
  // const [ispending, startTransition] = useTransition()
  const [collapsible, setCollapsible] = useState(false)
  const [show, setShow] = useState(true)
  const [state, setState] = useState<string>('')
  const [states, setStates] = useState<[]>([])
  const [error, setError] = useState<ErrorMessage[]>([initialErrorMessage])

  const searchByCategory = async (url: string) => {
    // console.log('s')
    await retrieve(url).then((data: any) => {
      // setStates(data.content)
      startTransition(() => setStates(data.content))
    }).catch(() => { networkError() })
  }
  const networkError = () => {
    setError([{ field: 'DTO', message: 'Network Error' }])
  }
  const collapse: string[][] = [
    ["weather", "bootstrap", "sixth"],
    ["weatherOffShore", "table", "sixth"],
    ["weatherOnShore", "geo-fill", "sixth"],
  ]

  // useEffect(()=> {
  //   startTransition(() => setList(accessList()))
  // },[])
  return (
    <Sidebar>
      <SidebarHeader>
        <SideTitle sidehide={show} key={0} href={`#/`} >
          <p>Home</p><img src={logo} />
        </SideTitle>
      </SidebarHeader>
      <SidebarHeader>
      {vector.map((element, index) => {
          return <SideItem key={Math.random()} onMouseOver={()=>searchByCategory(vector[index][0])} href={`#/${vector[index][0]}`}><Icon name={vector[index][1]} /><p>{UriToScreenFormat(vector[index][0])}</p></SideItem>
      })}
      </SidebarHeader>
    </Sidebar>
  )
}