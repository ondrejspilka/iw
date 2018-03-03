/*
 * action types
 */
 
export const LOGOUT = 'LOGOUT'
 
/*
 * other constants
 */
 
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}
 
/*
 * action creators
 */
 
export function logout(text) {
  return { type: LOGOUT, text }
}
 
