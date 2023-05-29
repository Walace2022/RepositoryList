import { useState } from "react";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { Container } from "./styles";
import { api } from "../services/api";
import github_logo from "../assets/img/github_logo.png";

function App() {
const [currentRepo, setCurrentRepo] = useState('');
const [repos, setRepos] = useState([]);

const handleSearchRepo = async () =>{
  let repo=null;
  try{
  repo = await api.get(`repos/${currentRepo}`);
  if(repo.data.id){
    const isExist = repos.some(el => el.id === repo.data.id);

    if(!isExist){
      setRepos(prev => [...prev, repo.data]);
      setCurrentRepo(''); 
      return;

    }else{
      alert('Repositorio ja adicionado.');
    }

  }
  }catch(err){
    alert('Repositorio nao encontrado.');
    console.log(err);
  }
}

const handleRemoveRepo = (id) => {
  setRepos(repos.filter(repo => repo.id !== id));
}

  return (
    <Container>
      <img src={github_logo} width={75} height={75} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} placeholder={'nomedoUsuario/nomedoRepositorio'}/>
      <Button onClick={handleSearchRepo} text='Buscar'/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
