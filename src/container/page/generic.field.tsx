import { stitches } from "../global.styles"

const { styled } = stitches

export const Container = styled('div', {
    overflow: 'auto',
    display: 'flex',
    minHeight: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '$lg',
    '.tab': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: '5rem',
    },
    variants: {
        align: {
            column: {
                display: 'inline-block',
            },
            line: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            inputs: {
                height: '13.5rem',
            },
            response: {
                height: '5rem',
                color: '$first',
            },
        },
    },
})

export const ContainerInput2 = styled('span', {
    position: 'relative',
    display: 'inline-block',
    padding: '.2rem',
    overflowX: 'clip',
    ':has(label)': {
        outline: '2px solid blue',
    },
    'input[type=checkbox]': {
        '+ label, + label + label': {
            height: '1.4em',
        },
    },
    'input': {
        textIndent: '50%',
    },
    'select': {
        textIndent: '15%',
        minHeight: '1.8em',
    },
    'input:disabled': {
        backgroundColor: '$eleventh',
        cursor: 'not-allowed',
    },
    'input, select': {
        display: 'inline-block',
        width: '20em',
        margin: '.25rem',
        padding: '10px 0 10px 35px',
        color: '$fourth',
        background: '$tenth',
        border: '1px solid #354F52',
        borderRadius: '.25rem',
        outline: '0',
        transition: 'all .3s ease-in-out',
        textOverflow: 'ellipsis ellipsis',
        '+ label': {
            pointerEvents: 'none',
            textTransform: 'uppercase',
            display: 'inline-block',
        },
        '+ label + label': {
            display: 'none',
            filter: 'opacity(0)',
        },
        '+ label, + label + label': {
            overflow: 'hidden',
            textOverflow: 'ellipsis ellipsis',
            position: 'absolute',
            top: '.9rem',
            left: '0',
            bottom: '.7rem',
            padding: '.1em 1.5em',
            color: '#032429',
            fontSize: '$sm',
            textShadow: '0 1px 0 rgba(19,74,70,0)',
            transition: 'all .3s ease-in-out',
            borderRadius: '.25rem',
            background: 'rgba(122,184,147,0)',
            '&:after': {
                position: 'absolute',
                content: '""',
                width: '0',
                height: '0',
                top: '100%',
                left: '150%',
                marginLeft: '-3px',
                borderLeft: '3px solid transparent',
                borderRight: '3px solid transparent',
                borderTop: '3px solid rgba(122,184,147,0)',
                transition: 'all .3s ease-in-out',
            },
        },
    },
    'input:not([disabled]):focus, input:not([disabled]):active, input:not([disabled]):hover, select:not([disabled]):focus, select:not([disabled]):active, select:not([disabled]):hover': {
        color: '$fourth',
        textIndent: '0',
        background: '$tenth',
        '+ label': {
            width: '90%',
            margin: '0 5%',
            overflow: 'visible',
            color: '$tenth',
            textShadow: '0 1px o rgba(19, 74, 70, .4)',
            background: 'rgba(122, 184, 147, 1)',
            transform: 'translateY(-1.2rem)',
        },
        '+label+label': {
            width: '90%',
            margin: '0 5%',
            marginTop: '.3rem',
            padding: '.5rem',
            filter: 'opacity(1)',
            color: '$tenth',
            textShadow: '0 1px o rgba(19, 74, 70, .4)',
            background: '$fifteenth',
            transform: 'translateY(+1.1rem)',
        },
    },
    variants: {
        historic: {
            true: {
                'input, select': {
                    width: '10em',
                    '+ label': {
                        width: '8em',
                    },
                },
            },
            false: {
                'input, select': {
                    '+ label': {
                        width: '7rem',
                    },
                },
            },
        },
        error: {
            true: {
                'input, select': {
                    color: '$tenth',
                    background: '$fifteenth',
                },
                'input:focus, input:active, input:hover, select:focus, select:active, select:hover': {
                    '+ label + label': {
                        height: '4rem',
                        background: '$fifteenth',
                        display: 'inline-block',
                        zIndex: '1',
                    },
                },
            },
        },
    },
})