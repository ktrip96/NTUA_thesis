const USER_DATA = [
  {
    id: 334,
    surname: 'Τριπαλιτάκης',
    name: 'Kωνσταντίνος',
    capacity: 'S',
    email: 'ktrip96@gmail.com',
  },
  {
    id: 334,
    surname: 'Τριπαλιτάκης',
    name: 'Kωνσταντίνος',
    capacity: 'T',
    email: 'ktrip96@gmail.com',
  },
  {
    id: 334,
    surname: 'Τριπαλιτάκης',
    name: 'Kωνσταντίνος',
    capacity: 'G',
    email: 'ktrip96@gmail.com',
  },
]

const PROJECT_DATA = [
  {
    id: 'L04328947',
    title: 'Δημιουργία Κοινωνικού Δικτύου',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    lesson: 'Τεχνολογίες Υπηρεσιών Λογισμικού',
    teacher: 'Τσανάκας',
    goals:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea   commodo consequat.',
    prequisites: ['ReactJS', 'NextJS', 'Python 3.0', 'Python 2.0'],
    communication: 'tsanakas@gmail.com',
    bibliography: '[1].NextJS Handbook',
    path: 'software',
    isAccepted: false,
  },

  {
    id: 'L04328948',
    title: 'Δημιουργία Κοινωνικού Δικτύου222',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    lesson: 'Τεχνολογίες Υπηρεσιών Λογισμικού',
    teacher: 'Τσανάκας',
    goals: 'Be a software engineer',
    prequisites: ['ReactJS', 'NextJS'],
    communication: 'tsanakas@gmail.com',
    bibliography: '[1].NextJS Handbook',
    path: 'electronics',
    isAccepted: false,
  },
  {
    id: 28,
    title: 'Δημιουργία Κοινωνικού Δικτύου',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    lesson: 'Τεχνολογίες Υπηρεσιών Λογισμικού',
    teacher: 'Τσανάκας',
    goals: 'Be a software engineer',
    prequisites: ['ReactJS', 'NextJS'],
    communication: 'tsanakas@gmail.com',
    bibliography: '[1].NextJS Handbook',
    path: 'software',
    isAccepted: false,
  },
]

const ASSIGN_DATA = [
  {
    id: 231,
    student: 312,
    teacher: 3124,
    projectId: 3812,
    date: Date.now(),
    isStudent: false, // εκδήλωση ενδιαφέροντος από σπουδαστή
  },
]

export function getProjects() {
  return PROJECT_DATA
}

export function getProjectById(id) {
  return PROJECT_DATA.find((project) => project.id === id)
}
