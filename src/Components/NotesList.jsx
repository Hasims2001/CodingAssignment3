import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const NotesList = () => {
    let notes = useSelector(store=> store.notes)
   
  return (
    <div style={{maxHeight: "90vh", overflowY: 'scroll'}}>
      {notes.length > 0 &&  notes.map((item)=><>
        <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
        <Card.Text>
          {item.body}
        </Card.Text>
       
      </Card.Body>
    </Card>
      </>)}
    </div>
  )
}
