import { css } from 'styled-components'

export const media = {
    $1040: (...args) => css`
        @media screen and (max-width:1040px) {
            ${css(...args)}
        }
    `
}