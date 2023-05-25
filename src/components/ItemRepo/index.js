import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Nome</h3>
        <p>Descricao/doRepositorio</p>
        <a className='remove' href='#'>Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;