import { useState, ChangeEvent } from 'react';
import { User } from "../../component/user/user.interface";
import { initialUser } from '../../component/user/user.initial';
import { ErrorMessage } from '../../assets/error/errorMessage';
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { login, create, retrieve, update, remove, removeAll } from '../../service/crud.service';
import { Tooltip } from '../tootip/Tooltip';
import { ContainerInput } from './generic.field';

export const UserSignin = () => {
    const [state, setState] = useState<User>(initialUser)
    const [error, setError] = useState<ErrorMessage[]>([initialErrorMessage])
    
    const refresh = () => {
        window.location.reload()
    }
    const resetItem = () => {
        setState(initialUser)
    }
    const validAction = (data: any) => {
        if (data?.id) {
            setState(data)
            setError([initialErrorMessage])
        } else {
            setError(data)
        }
        refresh()
    }
    const loginUser = async() => {
        let data = await login('auth/login', state);
        validAction(data)
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setState({ ...state, [event.target.name]: value })
    }
    return (
        <section>
            <article>
                <Tooltip data-tip={'user'} hidden={true} >
                    <ContainerInput type={'text'} placeholder={'username'} name={'username'} value={state.username} onChange={handleInputChange} autoComplete='off' />
                </Tooltip>
                <Tooltip data-tip={'password'} hidden={true} >
                    <ContainerInput type={'password'} placeholder={'password'} name={'password'} value={state.password} onChange={handleInputChange} autoComplete='off' />
                </Tooltip>
                <button onClick={resetItem}>Reset</button>
                <button onClick={loginUser}>Login</button>
                {/* {loading && <>Loading...</>}
                {error != null && JSON.stringify(error)} */}
            </article>
        </section>
    );
}