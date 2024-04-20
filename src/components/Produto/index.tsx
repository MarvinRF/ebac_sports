import { useDispatch } from 'react-redux'

import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favorito'
import { useState } from 'react'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const [adicionadosAoCarrinho, setAdicionadosAoCarrinho] = useState(false)
  const [adicionadosAosFavoritos, setAdicionadosAosFavoritos] = useState(false)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          dispatch(adicionar(produto))
          setAdicionadosAoCarrinho(!adicionadosAoCarrinho)
        }}
        type="button"
      >
        {adicionadosAoCarrinho
          ? 'Remover Do Carrinho'
          : 'Adicionar Ao Carrinho'}
      </S.BtnComprar>
      <S.BtnFavorito
        onClick={() => {
          dispatch(favoritar(produto))
          setAdicionadosAosFavoritos(!adicionadosAosFavoritos)
        }}
        type="button"
      >
        {adicionadosAosFavoritos ? 'Remover Favoritos' : 'Adicionar Favorito'}
      </S.BtnFavorito>
    </S.Produto>
  )
}

export default ProdutoComponent
