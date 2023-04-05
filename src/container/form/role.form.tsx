import { useState, ChangeEvent, useEffect } from 'react';
import { ErrorMessage } from '../../assets/error/errorMessage';
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { create, retrieve, update, remove, removeAll } from '../../service/crud.service';
import { Container, ContainerInput, ContainerLabel } from './generic.field';
import { AtributeSet } from './generic.atribute';
import { Atribute } from '../../component/atribute/atribute.interface';
import { Tooltip } from '../tootip/Tooltip';
import { Button } from '../template/Button';
import { Table } from '../template/Table';
import { Role } from '../../component/role/role.interface';
import { Pageable } from '../../component/Pageable';
import { initialPageable } from '../../component/initialPageable';

export const RoleForm = <T extends Role>(object: any, url: string) => {
    const [state, setState] = useState<T>(object.object)
    const [states, setStates] = useState<T[]>([object.object])
    const [error, setError] = useState<ErrorMessage[]>([initialErrorMessage])
    const [atribute, setAtribute] = useState<Atribute[]>(AtributeSet(object.object))
    const [page, setPage] = useState<number>(0)
    const [pageable, setPageable] = useState<Pageable>(initialPageable)
    const paginator = 5;

    useEffect(() => {
        retrieveItem()
    }, [])
    const resetItem = () => {
        setState(object.object)
    }
    const validAction = (data: any) => {
        if (data?.id) {
            setState(data)
            setError([initialErrorMessage])
        } else {
            setError(data)
        }
    }
    const selectItem = async (data: any) => {
        setState(data)
    }
    const createItem = async () => {
        let data = await create(object.url.toLowerCase(), state)
        validAction(data)
    }
    const retrieveItem = async () => {
        let data = await retrieve(object.url.toLowerCase(), page, 8, "name")
        setPageable(data)
        setStates(data.content)
    }
    const updateItem = async () => {
        let data = await update(object.url.toLowerCase(), state)
        validAction(data)
    }
    const deleteItem = async () => {
        await remove(object.url.toLowerCase(), state.id)
    }
    const deleteAllItem = async () => {
        await removeAll(object.url.toLowerCase())
    }
    const validation = (name: string): string[] => {
        let vector: string[] = []
        error?.map(element => { if (name == element.field) return vector.push(element?.message) })
        return vector
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setState({ ...state, [event.target.name]: value })
    }
    const handleInputChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    return (
        <>
            {atribute &&
                <Container>
                    {Object.entries(state).map(([key, value], index) => {
                        return (
                            <div>
                                {Array.isArray(atribute[index].worth) ?
                                    <select name={key} onChange={handleInputChangeSelect}>
                                        {atribute[index].worth.map((result: any) => <option placeholder={key} data-value={result} >{result}</option>)}
                                    </select> :
                                    <Tooltip data-tip={validation(key)} hidden={validation(key).length === 0} ><ContainerInput type={atribute[index].type} placeholder={key} name={key} value={value} onChange={handleInputChange} autoComplete='off' /></Tooltip>
                                }
                                {/* <ContainerLabel>{key}</ContainerLabel> */}
                            </div>
                        )
                    })}
                </Container>
            }
            <div>
                <Button onClick={resetItem}>Reset</Button>
                <Button onClick={createItem}>Create</Button>
                <Button onClick={retrieveItem}>Retrieve by ID</Button>
                <Button onClick={updateItem}>Update</Button>
                <Button onClick={deleteItem}>Delete</Button>
                <Button onClick={deleteAllItem}>Delete All</Button>
            </div>
            <Table>
                <tbody>
                    <thead>
                        <tr><th>ID</th><th>NAME</th></tr>
                    </thead>
                    {states.map((element) => {
                        return <tr><td>{element.id}</td><td>{element.name}</td><td><Button onClick={() => selectItem(element)}>Select</Button></td></tr>
                    })}
                    <tfoot>FOOTER</tfoot>
                </tbody>
            </Table>
        </>
    );
}