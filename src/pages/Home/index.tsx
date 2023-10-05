import { Link } from "react-router-dom";
import { gitHub, linkGit, local, seguidores } from "../../assets/icon";
import { CountData, DataProfileContainer, HeaderProfileGitHub, HomeContainer, PhotoProfile, ProfileGithub, PublicationSearch, Publications } from "./styles";
import { PublicationCard } from "./components/PublicationCard";

export function Home() {
  return (
    <HomeContainer>
      <ProfileGithub>
        <PhotoProfile>
          <img src="https://github.com/tiagosvieira10.png" alt="" />
        </PhotoProfile>  

        <DataProfileContainer>
          <HeaderProfileGitHub>
            <div className="nameAndDescription">
              <h2>Tiago Vieira</h2>
              <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
            </div>
            <Link to={"https://github.com/tiagosvieira10"} target="blank">
              GITHUB
              <img src={linkGit} alt="" />
            </Link>
          </HeaderProfileGitHub>

          <div className="dataProfile">
            <CountData>
              <img src={gitHub} alt="" />
              <span>tiagosvieira10</span>
            </CountData>
            <CountData>
              <img src={local} alt="" />
              <span>Software</span>
            </CountData>
            <CountData>
              <img src={seguidores} alt="" />
              <span>51 seguidores</span>
            </CountData>

          </div>
        </DataProfileContainer> 
      </ProfileGithub>

      <PublicationSearch>
        <div className="headerSearchPublications">
          <h4>Publicações</h4>
          <p>6 publicações</p>
        </div>
        <textarea placeholder="Buscar conteúdo"/>
      </PublicationSearch>

      <Publications>
        <PublicationCard/>
        <PublicationCard/>
        <PublicationCard/>
        <PublicationCard/>
        <PublicationCard/>
        <PublicationCard/>
      </Publications>
    </HomeContainer>
  )
}