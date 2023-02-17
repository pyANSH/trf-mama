# API

<!-- api key -->

## User

- /user
  /user/new => POST, signup:{
  isMentor: boolean,
  userId: string,
  userEmail: string,
  interests: string[],
  userFullName: string,
  socialRefererId: string,
  } => {JWT: string}

  /user/login => POST, login:{
  socialRefererId: string,
  email: string,
  } => {JWT: string}

  /user/:userId => GET, {JWT: string} => {user: User, meetings: Meeting[]}

## schedule

- /meeting
  /meeting/schedule => POST, scheduleDetails:{
  mentorId: string,
  menteeId: string,
  meetingDate: string,
  meetingTime: string,
  meetingDuration: string,
  meetingTopic: string,
  meetingDescription: string,
  } => {
  meetingId: string,
  menteeDetails: {
  userId: string,
  userEmail: string,
  interests: string[],
  userFullName: string,
  },
  mentorDetails: {
  userId: string,
  userEmail: string,
  interests: string[],
  userFullName: string,
  },
  meetingDate: string,
  meetingTime: string,
  meetingDuration: string,
  meetingTopic: string,
  meetingDescription: string,
  status: pending,
  }
  }
  /meeting/:meetingId => GET, {JWT: string} => {meetingDetails: Object[]}
  <!-- //accept reject -->
  /meeting/respond => PUT, {JWT: string, meetingId:string, status: string, } => {meetingDetails: Object[]}
- /notes
  /notes/upload => POST, {
  fileUrl: string,
  userId: string,
  fileName: string,
  fileSize: string,
  noteTitle: string,
  fileType: string,
  category: string,
  description: string,
  } => {
  noteId: string,
  fileUrl: string,
  userId: string,
  }  
  /notes?category=string => GET, {JWT: string} => {notes: Note[]}
  /notes/:noteId => GET, {JWT: string} => {note: Note}

  /notes/delete => DELETE, {JWT: string, noteId:string, userId} => {note: Note}
  /notes/edit => PUT, {JWT: string, category:string,noteTitle:string, description:string} => {noteId: string}

## search

- /search
  /search/user?query=string => GET, {JWT: string} => {users: User[]}
  /search/notes?query=string => GET, {JWT: string} => {notes: Note[]}

## DB Schema

- meeting
- notes
- user
