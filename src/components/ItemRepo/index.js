import React from 'react';
import { ItemContainer } from './styles';


function ItemRepo({repo,handleRemoveRepo}) {
  const handleRemove = () =>{
    handleRemoveRepo(repo.id);
  }
  return (
    <ItemContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a className='remove' rel="noreferrer" href={repo.html_url} target='_blank'>Ver Repositorio</a>
        <a className='remove' href='#' rel='noreferrer' onClick={handleRemove}>Remover</ a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;