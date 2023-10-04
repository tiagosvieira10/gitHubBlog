import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ProfileGithub = styled.div`
  display: flex;
  padding: 2rem;
  gap: 1.5rem;
  width: 54rem;

  margin-top: -4.5rem;

  background-color: ${({theme}) => theme.colors["base-profile"]};
  border-radius: 10px;

`
export const PhotoProfile = styled.div`
  display: flex;
 
  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }
`
export const HeaderProfileGitHub = styled.div`
  display: flex;
  justify-content: flex-end;
  
  a {
    gap: 0.5rem;
    display: flex;
    position: absolute;
    color: ${({theme}) => theme.colors.blue};
    font-size: ${(props) => props.theme.fontSizes.link};
  }
`

export const DataProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  .nameAndDescription {
    h2 {
      font-size: ${(props) => props.theme.fontSizes["title-l"]};
      color: ${({theme}) => theme.colors["base-title"]};
      margin-bottom: 0.5rem;
    }

    span {
      line-height: 1.75;
      font-size: ${(props) => props.theme.fontSizes["text-m"]};
    }
  }

  .dataProfile {
    display: flex;
  }
`
export const CountData = styled.div`
  display: flex;
  gap: 0.25rem;

  align-items: center;
  margin-right: 1.5rem;
  margin-top: 2rem;

  span {
    font-weight: ${({theme}) => theme.fontWeights.text};
    font-size: ${(props) => props.theme.fontSizes["text-m"]};
    color: ${({theme}) => theme.colors["base-subtitle"]};
  }

  img {
    height: 1.125rem;
    width: 1.125rem;
  }
`