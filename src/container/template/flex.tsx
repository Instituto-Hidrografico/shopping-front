import { stitches } from "../global.styles"

const { styled } = stitches

export const FlexCointainer = styled('div',{
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    // alignItems: 'center',
    overflow: 'hidden',
    variants: {
        element:{
            all: {
                alignItems: 'stretch',
                backgroundColor: '$ninth',
            },
            main: {
                flexBasis: '0',
                flexGrow: '1.5',
                flexDirection: "column",
                color: '$fifth',
                backgroundColor: '$ninth'
            },
            content: {
                height: '94vh',
                flexDirection: "row",
                
                color: '$fourth',
                backgroundColor: '$fifth'
            },
            nav: {
                height: '6vh',
                backgroundPosition: '50%',
                padding: '.5rem',
                flexDirection: "row",
                justifyContent: 'space-between',
                
                color: '$third',
                backgroundColor: '$ninth'
            },
        },
    },
})
export const SideTitle = styled('a',{
    textDecoration: 'none',
    color: '$third',
    backgroundColor: '$tenth',
    height: '$md',
    width: '$xss',
    userSelect: 'none',
    borderRadius: '.3rem',
    padding: '$xs',
    margin: '$xxxs',
    textTransform: 'capitalize',
    transition: '.5s',
    p : {
        display: 'inline',
    },
    boxShadow: '0 .3rem .6rem rgba(0,0,0,0.16), 0 .3rem .6rem rgba(0,0,0,0.23), 0 0 .25rem #AAA inset',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    variants: {
        sidehide: {
            false: {
                'span:first-child': {
                    display: 'none',
                },
                'svg': {
                    transform: 'rotate(180deg)',
                }
            },
        },
    },
})
export const SideItem = styled('a',{
    textDecoration: 'none',
    color: '$ninth',
    height: '$xss',
    width: '$xss',
    userSelect: 'none',
    borderRadius: '.3rem',
    padding: '$xs',
    margin: '$xxxs',
    textTransform: 'capitalize',
    transition: '.3s',
    '&:hover': {
        color: '$second',
        backgroundColor: '$ninth',
        boxShadow: '0 .3rem .6rem rgba(0,0,0,0.16), 0 .3rem .6rem rgba(0,0,0,0.23), 0 0 .25rem #AAA inset',
    },
    '&:focus': {
        color: '$first',
        backgroundColor: '$tenth',
        boxShadow: '0 .3rem .6rem rgba(0,0,0,0.16), 0 .3rem .6rem rgba(0,0,0,0.23), 0 0 .25rem #AAA inset',
    },
    p : {
        display: 'inline',
    },
    variants: {
        element:{
            final: {
                alignSelf: 'stretch',
            },
        },
    },
})

export const Sidebar = styled('aside',{
    width: '256px',
    minHeight: '20rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '$xxs',
    margin: '$xxs',
    borderRadius: '.3rem',
    backgroundColor: '$third',
    backgroundImage: 'linear-gradient(to bottom, $fourth, $third)',
    boxShadow: '0 .3rem .6rem rgba(0,0,0,0.16), 0 .3rem .6rem rgba(0,0,0,0.23), 0 0 .1rem #AAA inset',
    // scrollBehavior: 'smooth',
    // overflowY: 'auto',
    // overflowX: 'hidden',
    '@bp1': {
        width: '2.9rem',
        'p': {
            display: 'none',
        },
    },
    variants: {
        sidehide: {
            true: {
                // '@bp4': {
                //     display: 'none',
                // },
            },
            false: {
                width: '2.9rem',
                'p': {
                    display: 'none',
                },
                // '@bp4': {
                //     display: 'none',
                // },
            },
        },
    },
})
export const SidebarHeader = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    color: '$ninth',
})
export const CenterContainer = styled('div',{
    backgroundColor: '$second',
    backgroundImage: 'linear-gradient(to bottom, $second, $fourth)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
export const CenterItem = styled('div', {
    color: '$fourteenth',
    backgroundColor: '$fifth',
    padding: '5rem 0rem 5rem 0',
    borderRadius: '.3rem',
    width: '18rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(132, 169, 140, 0.85)',
    'span': {
        height: '2em',
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