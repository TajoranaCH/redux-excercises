import { useSelector, useDispatch } from 'react-redux'

const Notification = () => {
  const dispatch = useDispatch()
  let notification = useSelector(({ notification }) => {
    if (notification !== '') setTimeout(() => { dispatch({type: 'notification/set', payload: '' })}, 5000)
    return notification
  })
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (notification == '') ? <></> : 
    <div style={style}>
      { notification }
    </div>
}

export default Notification