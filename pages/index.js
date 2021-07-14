
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations.js';

function ProfileSidebar(propriedades){
  return(
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`}style={{borderRadius: '8px'}}/>
    </Box> 
    )
}
export default function Home() {
  const githubUser = 'victorhugof94';
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
      <div className="profileArea" style= {{gridArea : 'profileArea'}}>
        <ProfileSidebar githubUser= {githubUser}/>
      </div>
      <div className="welcomeArea" style= {{gridArea : 'welcomeArea'}}>
        <Box>
          <h1 className="Title">
            Bemvindo(a)
          </h1>
          <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div className="profileRelationsArea" style= {{gridArea : 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className= "smallTitle">
          Pessoas da Comunidades ({pessoasFavoritas.length})
          </h2>
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
            return(
              <li>
              <a href={`/users/${itemAtual}`} key={itemAtual}>
              <img src={`http://github.com/${itemAtual}.png`}/>
              <span>{itemAtual}</span>
              </a>
              </li>
            )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        
      </div> 
      
      </MainGrid>
    </>
  )
}
