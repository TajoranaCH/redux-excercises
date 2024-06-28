import { useDispatch, useSelector } from 'react-redux'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({anecdotes, filter}) => {
      return anecdotes.filter(a => a.content.includes(filter))
    })

    return (<>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch({ type: 'anecdotes/voteAnecdote', payload: anecdote.id })}>vote</button>
          </div>
        </div>
      )}</>)
}

export default AnecdoteList