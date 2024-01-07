import { stitches } from "../global.styles"

const { styled } = stitches

export const GroupButton = styled('div', {
    'button:first-child': {
        borderRadius: '5px 0px 0px 5px',
    },
    'button:last-child': {
        borderRadius: '0px 5px 5px 0px',
    },
})

export const ButtonPage = styled('button', {
    backgroundColor: '$tenth',
    fontFamily: 'Montserrat,sans-serif',
    height: '2.5em',
    width: '2.5em',
    border: 'solid $eighth 1px',
    variants: {
        selected: {
            true: {
                color: '$seventh',
                backgroundColor: '$fifth',
            },
        },
    },
})