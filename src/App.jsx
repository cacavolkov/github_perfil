import { useState } from 'react';

import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import ReposList from './components/ReposList';

// 1 importa, 2 codigo, 3 exporta

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true); 
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    
    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario} />
      <ReposList nomeUsuario="cacavolkov" />
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
