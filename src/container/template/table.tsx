import { stitches } from "../global.styles"

const { styled } = stitches

export const Table = styled('table', {
    width: '100%',
    maxHeight: '75vh',
    overflowY: 'auto',
    fontFamily: 'arial, sans-serif',
    fontSize: '0.95rem',
    color: '$sixteenth',
    padding: '$sm',
    margin: '$xxs',
    boxSizing: 'border-box',
    borderSpacing: '0',
    backgroundColor: '$tenth',
    borderRadius: '.3rem',
    display: 'block',
    borderCollapse: 'collapse',
    // border: 'solid $third 1px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    '.header': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '$fourth',
        'div span:after': {
            content: " ",
        },
    },
    'thead': {
        position: 'sticky',
        top: '-.25rem',
    },
    'thead > tr': {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        backgroundColor: '$tenth',
    },
    'td, th': {
        borderBottom: '1px solid $eighth',
        paddingLeft: '1em',
        textAlign: 'left',
        height: '3em',
        width: '10%',
    },
    'tr:nth-child(even)': {
        backgroundColor: '$tenth',
    },
    'tr:nth-child(odd)': {
        backgroundColor: '$sixth',
    },
    'th': {
        backgroundColor: '$tenth',
    },
    'tr:hover': {
        cursor: 'pointer',
        backgroundColor: '$seventh',
    },
    'tfoot': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        'th': {
            border: 'none',
        },
    },
    '@bp1': {
        '.header': {
            flexWrap: "wrap",
            'div': {
                fontSize: '75%',
                padding: '.25rem',
                input: {
                    boxSizing: 'border-box',
                    width: '6rem',
                },
            },
        },
        'td:nth-child(3), th:nth-child(3), td:nth-child(4), th:nth-child(4)': {
            display: "none",
        }
    },
    '@bp2': {
        '.header': {
            flexWrap: "wrap",
            'div': {
                fontSize: '75%',
                padding: '.25rem',
                input: {
                    boxSizing: 'border-box',
                    width: '6rem',
                },
            },
        },
        'td:nth-child(5), th:nth-child(5), td:nth-child(6), th:nth-child(6)': {
            display: "none",
        }
    },
})