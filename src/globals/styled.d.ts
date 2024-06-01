import "styled-components/native"

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            navyBlue: string,
            beige: string,
            white: string,
            black: string
        },
    }
}