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

const DEVELOPING_DATA = [
  {
    path: 'Η',
    teacher: 'Γιώργιος Σιόλας',
    status: 'Απορρίφθηκε',
    name: 'Artificial Intelligence',
    id: 'L04328947',
  },
  {
    path: 'Λ',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Haskell Project',
    status: 'Σε αναμονή',
    id: 'L04328946',
  },
  {
    path: 'Λ',
    teacher: 'Νίκος Παπασπύρου',
    status: 'Απορρίφθηκε',
    name: 'Βελτιστοποίηση τοποθέτησης και επιλογής Κόμβων Αναμετάδοσης σε Ετερογενή Δίκτυα επόμενης γενιάς (5G και Beyond) με χρήση τεχνικών Μηχανικής Μάθησης (ML). (1 Άτομο)',
    id: 'L04328948',
  },
  {
    path: 'Τ',
    teacher: 'Βασίλης Βεσκούκης',
    name: 'Telecommunications',
    status: 'Σε αναμονή',
    id: 'L04328946',
  },
  {
    path: 'Λ',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Haskell Project',
    id: 'L04328948',
  },
  {
    path: 'Ε',
    teacher: 'Παναγιώτης Τσανάκας',
    name: 'Theseus Project',
    id: 'L04328948',
  },
  {
    path: 'Τ',
    teacher: 'Βασίλης Βεσκούκης',
    name: 'Telecommunications',
    id: 'L04328947',
  },
  {
    path: 'Η',
    teacher: 'Γιώργιος Σιόλας',
    name: 'Artificial Intelligence',
    status: 'Σε αναμονή',
    id: 'L04328947',
  },
  {
    path: 'Λ',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Haskell Project',
    id: 'L04328946',
  },
  {
    path: 'Τ',
    teacher: 'Βασίλης Βεσκούκης',
    name: 'Telecommunications',
    id: 'L04328946',
  },

  {
    path: 'Ε',
    teacher: 'Παναγιώτης Τσανάκας',
    status: 'Απορρίφθηκε',
    name: 'Theseus Project',
    id: 'L04328948',
  },
  {
    path: 'Τ',
    teacher: 'Βασίλης Βεσκούκης',
    status: 'Απορρίφθηκε',
    name: 'Telecommunications',
    id: 'L04328947',
  },
  {
    path: 'Λ',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Haskell Project',
    status: 'Σε αναμονή',

    id: 'L04328948',
  },
  {
    path: 'Ε',
    teacher: 'Παναγιώτης Τσανάκας',
    name: 'Theseus Project',
    status: 'Σε αναμονή',

    id: 'L04328948',
  },
  {
    path: 'Τ',
    teacher: 'Βασίλης Βεσκούκης',
    name: 'Telecommunications',
    status: 'Σε αναμονή',

    id: 'L04328947',
  },
  {
    path: 'Η',
    teacher: 'Γιώργιος Σιόλας',
    name: 'Artificial Intelligence',
    status: 'Απορρίφθηκε',

    id: 'L04328947',
  },
  {
    path: 'Λ',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Haskell Project',
    status: 'Σε αναμονή',

    id: 'L04328946',
  },
  {
    path: 'Τ',
    teacher: 'Βασίλης Βεσκούκης',
    name: 'Telecommunications',
    status: 'Σε αναμονή',

    id: 'L04328946',
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
    path: 'Η',
    isAccepted: false,
  },
  {
    id: 'L04328946',
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

const TEACHER_DATA = [
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Ανάπτυξη Εφαρμογής για τη Διάταξη και Αξιολόγηση Πολλαπλών Βαθιών Νευρωνικών Δικτύων σε Κινητές Συσκευές - Application Development for the Layout and Evaluation ',
    id: 'L04328148',
    status: 'Ολοκληρωμένη',
  },
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Reverse engineering πηγαίου κώδικα για παραγωγή μοντέλων UML',
    id: 'L04328248',
    status: 'Σε εξέλιξη',
  },
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Ανάπτυξη Εφαρμογής για τη Διάταξη και Αξιολόγηση Πολλαπλών Βαθιών Νευρωνικών Δικτύων σε Κινητές Συσκευές - Application Development for the Layout and Evaluation ',
    id: 'L04328348',
    status: 'Σε εξέλιξη',
  },
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Βελτιστοποίηση τοποθέτησης και επιλογής Κόμβων Αναμετάδοσης σε Ετερογενή Δίκτυα επόμενης γενιάς (5G και Beyond) με χρήση τεχνικών Μηχανικής Μάθησης (ML). (1 Άτομο)',
    id: 'L04328448',
    status: 'Διαθέσιμη',
  },
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Ανάπτυξη Εφαρμογής για τη Διάταξη και Αξιολόγηση Πολλαπλών Βαθιών Νευρωνικών Δικτύων σε Κινητές Συσκευές - ',
    id: 'L04328548',
    status: 'Διαθέσιμη',
  },
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Ανίχνευση και Καταστολή Παρεμβολών σε P2P Ζεύξεις με Τεχνικές Διαμόρφωσης Δέσμης. (1 Άτομο)',
    id: 'L04328648',
    status: 'Ολοκληρωμένη',
  },
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Σχεδίαση MIMO κεραίας φιλικής προς τον τελικό χρήστη και κατάλληλου ανθρώπινου ομοιώματος για εφαρμογές υψηλών συχνοτήτων. (2 Άτομa)',
    id: 'L04328748',
    status: 'Σε εξέλιξη',
  },
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Σχεδίαση MIMO κεραίας φιλικής προς τον τελικό χρήστη και κατάλληλου ανθρώπινου ομοιώματος για εφαρμογές υψηλών συχνοτήτων. (2 Άτομa)',
    id: 'L04328848',
    status: 'Ολοκληρωμένη',
  },
]

export function getProjects() {
  return PROJECT_DATA
}

export function getSearchbarData() {
  return DEVELOPING_DATA
}

export function getTeacherData() {
  return TEACHER_DATA
}

export function getProjectById(id) {
  return PROJECT_DATA.find((project) => project.id === id)
}
