import Application from './Application'

const DEVELOPING_DATA = [
  {
    name: 'Παναγιώτης Τσανάκας',
    id: 'LO4219837',
    status: 'pending',
  },
  {
    name: 'Γιώργος Σιόλας',
    id: 'LO4219837',
    status: 'pending',
  },
  {
    name: 'Νίκος Παπασπύρου',
    id: 'LO4219837',
    status: 'pending',
  },
  {
    name: 'Νεκτάριος Κοζύρης',
    id: 'LO4219837',
    status: 'pending',
  },
]

function ApplicationList() {
  return (
    <div>
      {DEVELOPING_DATA.map((item, i) => (
        <Application name={item.name} key={i} />
      ))}
    </div>
  )
}

export default ApplicationList
