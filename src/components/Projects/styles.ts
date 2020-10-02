import styled from "@emotion/styled";

type BgImageProps = {
    bgImage: string
}

export const StyledProjectItem = styled('div')`
    width: 100%;
    height: 100%;
    background-image: url("${(props: BgImageProps) => props.bgImage ? props.bgImage : 'none' }");
    background-position: center center;
    background-size: cover;
    display: flex;
    align-items: flex-end;
`