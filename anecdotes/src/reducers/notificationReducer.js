import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    set(state, action) {
      return action.payload
    }
  }
})

let clearingNotification = null

export const setNotification = (text, seconds) => {
  return async dispatch => {
    dispatch(notificationSlice.actions.set(text))
    if (clearingNotification) {
      clearTimeout(clearingNotification)      
    }
    clearingNotification = setTimeout(() => dispatch(notificationSlice.actions.set('')) , seconds * 1000)
  }
}

export default notificationSlice.reducer