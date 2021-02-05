import React from 'react'
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';




 const Appform=()=>{
     return(
      <Container className="  row justify-content-center align_content-center m-3">

        <Col lg={6} className='p-0 col-md-12 col-lg-6 ' id="form_img ">
             <Col fluid="true" className=" m-0 text-center pt-5" id="formimg">Fill this form please!!</Col>
             <Form className="p-3" id="form">
              <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

              <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>


              <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

              <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

              <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Col>
      </Container>
        
     )
 }
 export default Appform;