import React, {Component} from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import PropTypes from 'prop-types'
import ModalConfirmation from "../Modal/modal";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionTypes from "../../js/actions";

var uniqid = require('uniqid');


class UserForm extends Component {

    constructor(props) {
        super(props)

        const {dispatch} = props
        this.handleSubmit = this.handleSubmit.bind(this)
        this.boundActionCreators = bindActionCreators(actionTypes, dispatch)
    }

    render() {
        let {id, email, password, userType, description, receiveEmail} = this.props.selectedUser
        const submitButton = id === '' ? 'primary' : 'success'

        return (
            <React.Fragment>
                <Container className='mt-3'>
                    <h1 className='text-left mb-3'>
                        New User
                    </h1>

                    <Form onSubmit={this.handleSubmit} id='userForm'>
                        <Input type="text" hidden name='id' value={id} id='id'/>

                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" value={email} onChange={this.props.handleChange}
                                       id="email" placeholder="Type your email"/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" value={password} onChange={this.props.handleChange}
                                       id="password" placeholder="Type your password"/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="userType" sm={2}>Type of User</Label>
                            <Col sm={10}>
                                <Input type='select' name="userType" value={userType} onChange={this.props.handleChange}
                                        id="userType">
                                    <option>USER</option>
                                    <option>ADMIN</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="description" sm={2}>Description</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="description" value={description}
                                       onChange={this.props.handleChange}
                                       id="description"/>

                                <FormText color="muted">
                                    Please, add a description to the new user account.
                                </FormText>
                            </Col>
                        </FormGroup>

                        <FormGroup check className='text-left ml-4'>
                            <Label>
                                <Input type="checkbox"
                                       checked={receiveEmail} onChange={this.props.handleChange}
                                       name='receiveEmail'/>{' '}
                               Receive email notifications.
                            </Label>
                        </FormGroup>

                        <Row className='mt-2'>
                            <Col>
                                <Button color={submitButton}
                                        className='m-1'>
                                    {id === '' ? 'Add User' : 'Accept changes'}
                                </Button>
                                <ModalConfirmation/>
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </React.Fragment>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        const isANewUser = event.target.id.value === ''
        const uniqId = isANewUser ? uniqid() : event.target.id.value

        const user = {
            id: uniqId,
            email: event.target.email.value,
            userType: event.target.userType.value,
            description: event.target.description.value,
            receiveEmail: event.target.receiveEmail.checked
        }
        isANewUser ? this.boundActionCreators.addUser(user) : this.boundActionCreators.updateUser(user)
        this.cleanFields()
    }

    cleanFields = () => {
        const resetUserFields = {
            id: '',
            email: '',
            password: '',
            userType: 'USER',
            description: '',
            receiveEmail: true
        }
        this.props.overrideUser(resetUserFields)
    }
}


UserForm.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,

};

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(UserForm);
