import { APPNAME } from '../utils/constants.js'

export const enUs = {
  appName: APPNAME,
  cancel: 'cancel',
  save: 'save',
  login: {
    title: '{0} login',
    alreadyLoggedIn: 'You are already logged in.',
    submit: 'log in'
  },
  restricted: {
    title: 'Restricted access',
    description: 'You must first <a href="login">login</a> to view this page.'
  },
  nav: {
    home: 'home',
    about: 'about',
    login: 'log in',
    logout: 'log out',
    profile: 'profile',
    admin: 'admin'
  },
  about: {
    title: 'About {appName}',
    text: 'We are teaching children English with thought and care.'
  },
  profile: {
    title: 'My Profile',
    id: 'ID',
    created: 'created',
    updated: 'updated'
  },
  admin: {
    title: '{appName} admin',
    newLesson: 'New lesson summary',
    newMaterial: 'New material',
    addGroup: 'Add a group',
    newUser: 'Create a user',
    className: 'Class name'
  },
  material: {
    uri: 'URI',
    title: 'Title',
    type: 'File type',
    notes: 'Notes'
  },
  className: '{name} class',
  welcome: 'Welcome to {appName}',
  chooseClass: 'Choose a class to see the lesson summaries.',
  loading: 'Loading {0} ...',
  loadingFailed: 'Could not load {0}',
  classes: 'classes | class | classes',
  materials: 'materials',
  lessons: 'lessons | lesson | lessons',
  users: 'users | user | users',
  lessonList: {
    title: '{groupName} class lessons',
    none: 'There are no lesson summaries available yet for this class.'
  },
  classNotFound: 'Sorry, the class could not be found.',
  summary: {
    returnToClass: 'Back to {groupName} class',
    heading: 'Lesson #{number}',
    notTranslated:
      'There is no Chinese translation of this lesson summary yet.',
    translate: 'Translate into Chinese',
    date: 'Lesson Date',
    number: 'Lesson number',
    class: 'Class',
    summaryEN: 'Lesson summary (English)',
    summaryZH: 'Lesson summary (Chinese)',
    translateHeading: 'Translate {groupName} class lesson {number}',
    editHeading: 'Edit {groupName} class lesson {number}',
    edit: 'Edit'
  },
  showMaterials: 'Show materials',
  username: 'username',
  password: 'password',
  delete: 'Delete',
  deleteConfirm: 'Confirm delete'
}
