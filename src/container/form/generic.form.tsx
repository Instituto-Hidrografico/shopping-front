import { useState, ChangeEvent, useEffect, useTransition } from 'react';
import { isValidToken } from '../../service/service.token'
import { ErrorMessage } from '../../assets/error/errorMessage';
import { initialErrorMessage } from '../../assets/error/errorMessage.initial';
import { create, retrieve, update, remove, removeAll } from '../../service/crud.service';
import { Container, ContainerInput, ContainerInput2, ContainerLabel } from './generic.field';
import { AtributeSet } from './generic.atribute';
import { Atribute } from '../../component/atribute/atribute.interface';
import { Tooltip } from '../tootip/Tooltip';
import { Table } from '../template/Table';
import { Button, ButtonPage, GroupButton } from '../template/Button';
import { Pageable } from '../../component/Pageable';
import { initialPageable } from '../../component/initialPageable';
import { ErrorBoundary } from 'react-error-boundary';

export const GenericForm = <T extends { id: string, name: string }>(object: any, url: string) => {
    const [state, setState] = useState<T>(object.object)
    const [states, setStates] = useState<T[]>([object.object])
    const [error, setError] = useState<ErrorMessage[]>([initialErrorMessage])
    const [atribute, setAtribute] = useState<Atribute[]>(AtributeSet(object.object))
    const [page, setPage] = useState<number>(0)
    const [pageable, setPageable] = useState<Pageable>(initialPageable)
    const paginator = 5;
    const [ispending, startTransition] = useTransition();

    // Pendente (Pending).
    // Resolvida (Resolved) (não está na documentação, mas gosto de definir esse estado também).
    // Rejeitada (Rejected).
    // Realizada (Fulfilled).
    // Estabelecida (Settled).

    useEffect(() => {
        retrieveItem()
    }, [page])
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
        startTransition(() => setStates(data.content))
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
    const validationDTO = (): string[] => {
        let vector: string[] = []
        error?.map(element => { if (element.field?.startsWith("DTO")) return vector.push(element?.message) })
        return vector
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setState({ ...state, [event.target.name]: value })
    }
    const handleInputChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const numberPage = (page: number) => {
        setPage(page)
    }

    return (
        <>
            {/* <Container>
                <ContainerInput type="text" required/>
                    <ContainerLabel>Username</ContainerLabel>
            </Container> */}
            {/* https://cdpn.io/agrimsrud/fullpage/RwKbwXN?anon=true&view= */}
            {isValidToken() && atribute &&
                <>
                    <Container>
                        {Object.entries(state).map(([key, value], index) => {
                            return (
                                <div>
                                    {Array.isArray(atribute[index].worth) ?
                                        <select name={key} onChange={handleInputChangeSelect}>
                                            {atribute[index].worth.map((result: any) => <option placeholder={key} data-value={result} >{result}</option>)}
                                        </select> :
                                        // <Tooltip data-tip={validation(key)} hidden={validation(key).length === 0} >
                                        //     <ContainerInput type={atribute[index].type} placeholder={key} name={key} value={value} onChange={handleInputChange} autoComplete='off' />
                                        // </Tooltip>
                                        <Tooltip data-tip={validation(key)} hidden={validation(key).length === 0} >
                                            <ContainerInput2>
                                                <input type={atribute[index].type} required name={key} value={value} onChange={handleInputChange} autoComplete='off' />
                                                <label htmlFor={key} hidden={atribute[index].type === 'hidden' ? true : false}>{key}</label>
                                            </ContainerInput2>
                                        </Tooltip>
                                    }
                                </div>
                            )
                        })}
                        <div>{validationDTO()}</div>
                    </Container>
                    <div>
                        <Button onClick={resetItem}>Reset</Button>
                        <Button onClick={createItem}>Create</Button>
                        <Button onClick={retrieveItem}>Retrieve</Button>
                        <Button onClick={updateItem}>Update</Button>
                        <Button onClick={deleteItem}>Delete</Button>
                        <Button onClick={deleteAllItem}>Delete All</Button>
                    </div>
                </>
            }
            {isValidToken() &&
                <Table>
                    <thead>
                        <tr><th>id</th><th>name</th></tr>
                    </thead>
                    <ErrorBoundary fallback={<div> Algo deu errado </div>} >
                        <tbody>
                            {states.map((element) => {
                                return <tr onClick={() => selectItem(element)}><td>{element.id}</td><td>{element.name}</td></tr>
                            })}
                        </tbody>
                    </ErrorBoundary>
                    <tfoot>
                        <GroupButton>
                            <ButtonPage onClick={() => numberPage(0)}>{'<<'}</ButtonPage>
                            <ButtonPage onClick={() => numberPage(page - 1)} disabled={page <= 0 ? true : false}>{'<'}</ButtonPage>
                            <ButtonPage onClick={() => numberPage(page - 1)} hidden={page <= 0 ? true : false}>{page}</ButtonPage>
                            <ButtonPage selected={true} disabled  >{page + 1}</ButtonPage>
                            <ButtonPage onClick={() => numberPage(page + 1)} hidden={page >= pageable.totalPages - 1 ? true : false}>{page + 2}</ButtonPage>
                            <ButtonPage onClick={() => numberPage(page + 1)} disabled={page >= pageable.totalPages - 2 ? true : false}>{'>'}</ButtonPage>
                            <ButtonPage onClick={() => numberPage(pageable.totalPages - 1)}>{'>>'}</ButtonPage>
                        </GroupButton>

                    </tfoot>
                </Table>
            }
            {/* <GroupButton>
                <ButtonPage onClick={() => numberPage(0)}>{'<<'}</ButtonPage>
                <ButtonPage onClick={() => numberPage(page - 1)} disabled={page >= pageable.totalPages + 2 ? true : false}>{'<'}</ButtonPage>
                {Array(paginator).fill(0).map((p, index) => {
                    return <ButtonPage selected={page === page + index - 2} onClick={() => numberPage(page + index - 2)} 
                    >{page + index - 1}</ButtonPage>
                })}
                <ButtonPage onClick={() => numberPage(page + 1)} disabled={page >= pageable.totalPages - 2 ? true : false}>{'>'}</ButtonPage>
                <ButtonPage onClick={() => numberPage(pageable.totalPages - 1)}>{'>>'}</ButtonPage>
            </GroupButton> */}

            {/* <Crud initialObject={initialUser} name={url} object={state} error={error}/> */}
            {/* {loading && <>Loading...</>}
                {error != null && JSON.stringify(error)} */}
        </>
    );
}