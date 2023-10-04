import { Link } from "react-router-dom";
import { gitHub, local, seguidores } from "../../assets/icon";
import { CountData, DataProfileContainer, HomeContainer, PhotoProfile, ProfileGithub } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <ProfileGithub>
        <PhotoProfile>
          <img src="https://github.com/tiagosvieira10.png" alt="" />
        </PhotoProfile>  

        <DataProfileContainer>
          <div className="nameAndDescription">
            <h2>Tiago Vieira</h2>
            <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
          </div>
          <Link to={"https://github.com/tiagosvieira10"} target="blank">
            GITHUB
          </Link>

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

      {/* <PublicationSearch>

      </PublicationSearch>

      <Publications>

      </Publications> */}
    </HomeContainer>
  )
}