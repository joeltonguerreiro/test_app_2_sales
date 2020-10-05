import styled from "@emotion/styled";

export const StyledGridProjects = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 15vh 15vh;
  row-gap: 10px;
  column-gap: 10px;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 1920px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 25vh 25vh;
    row-gap: 25px;
    column-gap: 25px;
  }

  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 25vh 25vh;
    row-gap: 25px;
    column-gap: 25px;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 15vh 15vh 15vh;
  }
`;

type BgImageProps = {
  bgImage: string;
};

export const StyledProjectItem = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("${(props: BgImageProps) =>
      props.bgImage ? props.bgImage : "none"}");
    background-position: center center;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    position: relative;
    border-radius: 5px;
`;
