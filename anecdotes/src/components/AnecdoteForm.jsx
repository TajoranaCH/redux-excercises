import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch({ type: 'anecdotes/createAnecdote', payload: content })
    dispatch({ type: 'notification/set', payload: `You created the anecdote ${content}` })
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm