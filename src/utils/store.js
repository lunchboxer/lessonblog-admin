import { Store } from 'svelte/store.js'
import { APPNAME } from './constants.js'

let store = new Store({
  APPNAME,
  groups: null,
  lessons: null,
  materials: null,
  user: null,
  login: null,
  showLessonSummaryForm: false,
  showNewMaterialForm: false,
  showAddGroupForm: false,
  showCreateNewUserForm: false,
  authStatus: null,
  page: 1
})

export default store
