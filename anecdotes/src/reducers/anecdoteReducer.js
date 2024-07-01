import { createSlice } from '@reduxjs/toolkit'
import { createNew, getAll, vote } from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action)  {
      const newAnecdote = action.payload
      return [...state, newAnecdote]
    },
    voteAnecdote(state, action) {
      const id = action.payload.id
      return state
      .map(a => a.id === id ? { ...a, votes: a.votes + 1 } : a)
      .sort((a1, a2) => a2.votes - a1.votes)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(anecdoteSlice.actions.setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const anecdote = await createNew(content)
    dispatch(anecdoteSlice.actions.createAnecdote(anecdote))
  }
}

export const voteAnecdote = content => {
  return async dispatch => {
    const anecdote = await vote(content)
    dispatch(anecdoteSlice.actions.voteAnecdote(anecdote))
  }
}
export default anecdoteSlice.reducer