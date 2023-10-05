import styled from "styled-components";

export const PublicationCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;

  background-color: ${({theme}) => theme.colors["base-post"]};
  border-radius: 10px;

  h5 {
    font-size: ${({theme}) => theme.fontSizes["title-m"]};
    color: ${({theme}) => theme.colors["base-title"]};
  }

  p {
    font-size: ${({theme}) => theme.fontSizes["text-s"]};
    color: ${({theme}) => theme.colors["base-span"]};
  }

  span {
    font-size: ${({theme}) => theme.fontSizes["text-m"]};
    color: ${({theme}) => theme.colors["base-text"]};
  }


  .headerPublicationCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    transform: scale(1.06);
    transition: 0.2s;
  }

`