import './button.css'

interface IButtonPage {
    name: string,
}

export const ButtonPageT = (button: IButtonPage) => {
    return(
        <button typeof={button.name} className='page'/>
    )
}