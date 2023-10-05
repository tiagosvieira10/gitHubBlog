import { Link } from "react-router-dom";
import { BoxExplain, CardExplainContainer, ContentExplain, HeaderBoxExplin, InformationPost, PostData } from "./styles";
import voltarIcon from '../../assets/icon/voltar.svg'
import imgPost from '../../assets/icon/code.png'
import { data, gitHub, linkGit, mensagem } from "../../assets/icon";

export function CardExplain() {
  return (
    <CardExplainContainer>
      <BoxExplain>
        <HeaderBoxExplin>
          <Link to={"/"}>
            <img src={voltarIcon} alt="" />
            VOLTAR
          </Link>
          <Link to={"https://github.com/tiagosvieira10"} target="blank">
            VER NO GITHUB
            <img src={linkGit} alt="" />
          </Link>
        </HeaderBoxExplin>

        <h2>JavaScript data types and data structures</h2>

        <InformationPost>
          <PostData>
            <img src={gitHub} alt="" />
            <span>tiagosvieira10</span>
          </PostData>
          <PostData>
            <img src={data} alt="" />
            <span>Há 1 dia</span>
          </PostData>
          <PostData>
            <img src={mensagem} alt="" />
            <span>5 comentários</span>
          </PostData>
        </InformationPost>

      </BoxExplain>

      <ContentExplain>
        <p>
          <strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong>This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

          <h6>Dynamic typing</h6>
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
        <img src={imgPost} alt="" />
      </ContentExplain>
    </CardExplainContainer>

  )
}