import { Link } from "react-router-dom";
import { BoxExplain, CardExplainContainer, HeaderBoxExplin, InformationPost, PostData } from "./styles";
import voltarIcon from '../../assets/icon/voltar.svg'
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
    </CardExplainContainer>
  )
}