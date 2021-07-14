
import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations.js';

function ProfileSidebar(propriedades){
  return(
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`}style={{borderRadius: '8px'}}/>
      <hr/>
      <p>
      <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
        @{propriedades.githubUser}
      </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />

    </Box> 
    )
}
export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '12313132132',
    title: 'Eu odeio acordar cedo',
    image:'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  ///const comunidades = comunidaes[0];
  const githubUser = 'victorhugof94';
  //const comunidades = [`Alurakut`];
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
        <Box>
          <h2 className= "subTitle">O que voce deseja fazer?</h2>
          <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
            }}>
            <div>
            <input placeholder= "Qual vai ser o nome da sua Comunidade?" name="title" aria-label="Qual vai ser o nome da sua Comunidade?" type= "text"/>
            </div>
            <div>
            <input placeholder= "Coloque uma URL para Usarmos de capa" name="image" aria-label="Coloque uma URL para Usarmos de capa" />
            </div>
            <button>
              Criar Comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style= {{gridArea : 'profileRelationsArea'}}>

        <ProfileRelationsBoxWrapper>
        <h2 className= "smallTitle">
          Comunidades ({comunidades.length})
          </h2>
        <ul>
            {comunidades.map((itemAtual) => {
            return(
              <li key = {itemAtual.id}>
              <a href={`/users/${itemAtual.title}`} >
              <img src={itemAtual.image}/>
              <span>{itemAtual.title}</span>
              </a>
              </li>
            )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className= "smallTitle">
          Pessoas da Comunidades ({pessoasFavoritas.length})
          </h2>
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
            return(
              <li key = {itemAtual}>
              <a href={`/users/${itemAtual}`} >
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
