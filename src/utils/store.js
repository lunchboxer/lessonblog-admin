import { Store } from 'svelte/store.js'
import { APPNAME } from './constants.js'
import { i18n } from 'svelte-i18n'
import { enUs } from '../locales/en-US.js'
import { zhCn } from '../locales/zh-CN.js'

let store = new Store({
  APPNAME,
  groups: [],
  lessons: null,
  user: null,
  login: null,
  showLessonSummaryForm: false,
  showNewMaterialForm: false,
  showAddGroupForm: false,
  showCreateNewUserForm: false
})

store = i18n(store, {
  dictionary: {
    'en-US': enUs,
    'zh-CN': zhCn
  }
})
store.i18n.setLocale('zh-CN')

export default store
