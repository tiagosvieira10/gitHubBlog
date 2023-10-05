import { Link } from "react-router-dom";
import { PublicationCardContainer } from "./styles";

export function PublicationCard() {
  return (
    <PublicationCardContainer>
      <Link to={"/cardexplain"}>
        <div className="headerPublicationCard">
          <h5>JavaScript data types and data structures</h5>
          <p>Há 1 dia</p>
        </div>
        <span>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</span>
      </Link>
    </PublicationCardContainer>
  )  
}