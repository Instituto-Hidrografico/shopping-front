import './button.css'

interface IButton {
    name: string,
}

export const ButtonT = (button: IButton) => {
    return(
        <button typeof={button.name}/>
    )
}