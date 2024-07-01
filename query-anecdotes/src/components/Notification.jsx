import { useNotificationValue, useNotificationDispatch } from "../NotificationContext"

let clearId = null
const Notification = () => {
  const message = useNotificationValue()
  const dispatch = useNotificationDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (!message) return null
  if (clearId) clearTimeout(clearId)
  clearId = setTimeout(() => dispatch({ type: 'SET', payload: '' }), 5000)
  return (
    <div style={style}>
      { message }
    </div>
  )
}

export default Notification
