import { stitches } from "../global.styles"
import logo from '../../assets/image/marinha.png'

const { styled } = stitches

export const CenterContainer = styled('div', {
    backgroundColor: '$second',
    backgroundImage: 'linear-gradient(to bottom, $second, $fourth)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
export const CenterItem = styled('div', {
    color: '$fourteenth',
    padding: '5rem 0rem 5rem 0',
    borderRadius: '.3rem',
    width: '18rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    'img': {
        margin: '2em',
    },
    'span': {
        height: '1em',
    },
    'button': {
        margin: '2em',
    },
    variants: {
        direction: {
            column: {
                flexDirection: 'column',
            },
            row: {
                minHeight: '0',
                flexDirection: 'row',
                justifyContent: 'center',
            },
        },
    },
})

export const SidebarCollapsible = styled('div',{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: '.3rem',
    'a:first-child': {
        display: 'flex',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
    },
    variants: {
        collapsible: {
            true: {
                backgroundColor: '$ninth',
                'a:first-child': {
                    color: '$second',
                    backgroundColor: '$ninth',
                    display: 'block',
                    boxShadow: 'none',
                },
                'a': {
                    color: '$ninth',
                    backgroundColor: '$fourth',
                },
                'svg:last-child': {
                    transform: 'rotate(270deg)',
                },
            },
            false: {
                'a:first-child': {
                    display: 'block',
                },
                'a': {
                    display: 'none',
                },
                'svg:last-child': {
                    transform: 'rotate(90deg)',
                },
            },
        },
    },
})