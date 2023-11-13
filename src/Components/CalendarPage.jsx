import React, { useRef, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Calendar from 'react-calendar';
import Form from 'react-bootstrap/Form';
import 'react-calendar/dist/Calendar.css';
import { addNote } from '../Redux/action';
import { useDispatch } from 'react-redux';

export const CalendarPage = () => {
    const [value, setValue] = useState(new Date());
    const titleRef = useRef();
    const bodyRef = useRef();
    const dispatch = useDispatch()
    const handleChange = (selectedDate)=>{
        let currDate = new Date()
        if(selectedDate >= currDate){
            setValue(selectedDate)
        }else{
            if(value != null){
                setValue(null)
            }
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addNote(value.toDateString(), titleRef.current.value, bodyRef.current.value))
    }
  return (
    <div> 
        <Calendar
    onChange={handleChange}
    value={value}
    />
   <Container style={{ marginTop: "1rem"}}>
     <Form onSubmit={handleSubmit}>
      <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" required ref={titleRef} placeholder={`Task for ${value?.toDateString() || "None"}...`} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" ref={bodyRef} placeholder='Description...' rows={3} />
      </Form.Group>
      <Button type='submit' disabled={value === null}>Submit</Button>
    </Form>
    </Container>
</div>
  )
}
