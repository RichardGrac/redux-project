import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import PropTypes from 'prop-types'
import ModalConfirmation from "../Modal/modal";

class UserForm extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className='mt-3'>
                    <h1 className='text-left mb-3'
                        style={{border: '1px solid #f5f5f5', borderRadius: '5px', padding: '5px'}}>
                        New User
                    </h1>
                    <Form>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Type your email" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="examplePassword" placeholder="Type your password" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="exampleSelect" sm={2}>Type of User</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" id="exampleSelect" >
                                    <option>USER</option>
                                    <option>ADMIN</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="exampleText" sm={2}>Description</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="text" id="exampleText" />

                                <FormText color="muted">
                                    Por favor, agrega una descripción al usuario que se intenta dar de alta.
                                </FormText>
                            </Col>
                        </FormGroup>

                        <FormGroup check className='text-left ml-4'>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Recibir correo con mis credenciales.
                            </Label>
                        </FormGroup>

                        <Row className='mt-2'>
                            <Col>
                                <Button className='m-1'>Dar de Alta</Button>
                                <ModalConfirmation />
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}

// UserForm.propTypes = {};

export default UserForm;
