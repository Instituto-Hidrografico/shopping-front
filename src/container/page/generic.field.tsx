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
        paddingBottom: '12rem',
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
            },
        },
    },
})

export const ContainerInput2 = styled('span', {
    position: 'relative',
    display: 'inline-block',
    margin: 'min(.2em) min(.2em) 0em 0em',
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
        border: '0',
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

export const InputGroup = styled('span', {
    // '&::after': {
    //     content: `attr(data-name)`,
    // },
    position: 'relative',
    display: 'inline-block',
    padding: '.2rem',
    'span': {
        opacity: '0',
        position: 'absolute',
        padding: '0 .05rem',
        borderRadius: '.3rem',
        color: '$fourth',
        fontSize: '.75rem',
        backgroundImage: 'linear-gradient($ninth, $sixth)',
        transform: 'translateY(-0.25rem) translateX(-120%)',
    },
    'input:first-child, select:first-child': {
        borderTopLeftRadius: '.3rem',
        borderBottomLeftRadius: '.3rem',
    },
    'input:not(:last-of-type), select:not(:last-of-type)': {
        borderRight: 'none',
    },
    'input:last-of-type, select:last-of-type': {
        borderTopRightRadius: '.3rem',
        borderBottomRightRadius: '.3rem',
    },
    'input, select': {
        height: '2.2rem',
        width: '5rem',
        padding: '0 1rem',
        color: '#354F52',
        fontSize: '15px',
        border: '1px solid #354F52',
        backgroundColor: '$sixth',
    },
    '.label': {
        pointerEvents: 'none',
        // cursor: 'not-allowed',
        padding: '.5em 1em',
        border: 'none',
        backgroundColor: '#354F52',
        color: '#fff',
        fontSize: '15px',
        transition: 'background-color .3s ease-in-out',
    },
    '.label:hover': {
        transform: 'translateY(-1.2rem)',
        backgroundColor: '#52796F',
    },
    'input:placeholder-shown + label + span, select:placeholder-shown + label + span' : {
        opacity: '0',
    },
    'input:not(placeholder-shown) + label + span, input:focus + label + span, input:hover + label + span, select:not(placeholder-shown) + label + span, select:focus + label + span, select:hover + label + span': {
        transition: 'all .4s ease-in-out',
        color: 'gray',
        opacity: '1',
    },
    'input + label, select + label': {
        fontSize: '.8rem',
        visibility: 'hidden',
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '.3rem',
        padding: '.25rem',
        position: 'absolute',
        zIndex: '1',
        top: '150%',
        left: '50%',
        marginLeft: '-60px',
        opacity: '0',
        transition: 'opacity 1s',
    },
    'input:disabled, select:disabled': {
        backgroundColor: '$eleventh',
        cursor: 'not-allowed',
    },
    'input:disabled + label + span, select:disabled + label + span': {
        backgroundImage: 'linear-gradient($ninth, $eleventh)',
    },
    variants: {
        error: {
            true: {
                'input:not(placeholder-shown) + label + span, input:focus + label + span, input:hover + label + span, select:not(placeholder-shown) + label + span, select:focus + label + span, select:hover + label + span': {
                    color: '$sixth',
                    backgroundImage: 'linear-gradient($ninth, $fifteenth)',
                },
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
                'input:hover + .validation, select:hover + .validation': {
                    visibility: 'visible',
                    opacity: '1',
                },
            },
        },
    },
})