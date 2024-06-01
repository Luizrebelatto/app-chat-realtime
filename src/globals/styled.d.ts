import "styled-components/native"

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            background: string,
            navyBlue: string,
            beige: string,
            white: string,
            black: string
        },
    }
}