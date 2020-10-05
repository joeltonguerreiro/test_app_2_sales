import styled from "@emotion/styled";

import * as colors from "../../styles/defaults";

export const StyledWrapper = styled.div`
    height: 100%
    width: 100%;
`;

type BgImageProps = {
  bgImage: string;
};

export const StyledProjectViewBanner = styled.div`
    width: 100%;
    height: 180px;
    background-image: url("${(props: BgImageProps) =>
      props.bgImage ? props.bgImage : "none"}");
    background-position: center center;
    background-size: cover;
`;

export const StyledProjectViewTitle = styled.div`
  height: 60px;
  color: $primaryColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a.project-title {
      color: ${colors.black};
      font-size: 1rem;
      font-weight: 700;
  }

  a.edit-project {
    color: ${colors.secondaryColor};
    font-size: 0.7rem;
    font-weight: 800;
  }
`;

export const StyledActionFiles = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.6rem;
  border-bottom: 1px solid #ddd;

  .icon-group {
      display: flex;
      align-items: center;
      height: 100%;

      &.active {
        border-bottom: 1px solid black;
      }
  }
`