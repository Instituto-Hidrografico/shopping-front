import { stitches } from "../global.styles"
import logo from '../../assets/image/marinha.png'

const { styled } = stitches

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