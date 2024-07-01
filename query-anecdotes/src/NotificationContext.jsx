import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state = '', action) => {
    if (action.type === 'SET') {
      return action.payload
    }
    return state
}

const NotificationContext = createContext()

export const CounterContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')
  
    return (
      <NotificationContext.Provider value={[notification, notificationDispatch] }>
        {props.children}
      </NotificationContext.Provider>
    )
}

export const useNotificationValue = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
}
  
export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}

export default NotificationContext
