import styled from "styled-components";

export const CardExplainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`
export const BoxExplain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
  width: 54rem;

  margin-top: -4.5rem;

  background-color: ${({theme}) => theme.colors["base-profile"]};
  border-radius: 10px;

  h2 {
    font-size: ${({theme}) => theme.fontSizes["title-l"]};
    color: ${({theme}) => theme.colors["base-title"]};
  }
`

export const HeaderBoxExplin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    color: ${({theme}) => theme.colors.blue};
    font-size: ${(props) => props.theme.fontSizes.link};
  }
`

export const InformationPost = styled.div`
  display: flex;
  gap: 2rem;
`

export const PostData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color:${({theme}) => theme.colors["base-span"]} ;
`

export const ContentExplain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  max-width: 54rem;

  gap: 1.5rem;
  padding: 2rem;

  p {
    font-size: ${({theme}) => theme.fontSizes["text-m"]};
    color: ${({theme}) => theme.colors["base-text"]};

    h4 {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-weight: ${({theme}) => theme.fontWeights.text};
      color: ${({theme}) => theme.colors.blue};
      text-decoration: underline;
    }
  }
`
