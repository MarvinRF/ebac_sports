import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type carrinhoState = {
  itens: Produto[]
}

const initialState: carrinhoState = {
  itens: []
}
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoAtual = action.payload

      if (state.itens.find((item) => item.id === produtoAtual.id)) {
        state.itens = state.itens.filter((item) => item.id !== produtoAtual.id)
        alert(`O produto ${produtoAtual.nome} foi removido`)
      } else {
        state.itens = [...state.itens, produtoAtual]
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
