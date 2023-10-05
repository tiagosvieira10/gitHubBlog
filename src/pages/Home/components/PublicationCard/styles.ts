import styled from "styled-components";

export const PublicationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 16.25rem;
  width: 26rem;

  padding: 2rem;

  background-color: ${({theme}) => theme.colors["base-post"]};
  border-radius: 10px;


  .headerPublicationCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`