import React from 'react'
import { ItemContainer } from './styles';
import Button from '../Button';

function ItemRepo({repo,handleRemoveRepo}) {
  const handleRemove = () =>{
    handleRemoveRepo(repo.id);
  }
  return (
    <ItemContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a className='remove' rel="noreferrer" href={repo.html_url} target='_blank'>Ver Repositorio</a>
        <button className='remove' onClick={handleRemove}>Remover</button>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;