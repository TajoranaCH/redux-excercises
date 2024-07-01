import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ anecdotes, filter }) => {
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
            <button onClick={() => {
              dispatch(voteAnecdote(anecdote))
              dispatch(setNotification(`You voted the anecdote ${anecdote.content}`, 3))
              }}>vote</button>
          </div>
        </div>
      )}</>)
}

export default AnecdoteList