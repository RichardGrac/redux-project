import React, {Component} from 'react'
import {Table, Container, Button} from 'reactstrap'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actionTypes from '../../js/actions'


class UserList extends Component {

    constructor(props) {

        super(props)
        const { dispatch } = props
        this.boundActionCreators = bindActionCreators(actionTypes, dispatch)
        this.boundActionCreators.getUsers()
    }

    render() {
        return (
            <React.Fragment>
                <Container className='mt-3'>
                    <h1 className='text-left mb-3'>
                        Current Users Up
                    </h1>
                    {this.props.UsersReducer.users.length === 0 ?
                        (<h2 style={{color: 'grey', textAlign: 'center', marginBottom: '40px', border: '1px solid #f5f5f5', borderRadius: '5px', padding: '5px'}}>
                            There are no users registered.</h2> )
                        : (
                            <Table dark responsive>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Email</th>
                                    <th>Type of User</th>
                                    <th>Description</th>
                                    <th>Notifications</th>
                                    <th>Options</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.UsersReducer.users.map((user,index) => (
                                    <tr key={user.id}>
                                        <th scope="row">#{index+1}</th>
                                        <td>{user.email}</td>
                                        <td>{user.userType}</td>
                                        <td>{user.description}</td>
                                        <td>{user.receiveEmail ? 'Yes' : 'No'}</td>
                                        <td>
                                            <Button color='danger' className='m-1'
                                                    onClick={(event) => this.onDeleteUser(event, user)}>
                                                Delete
                                            </Button>
                                            <Button color='secondary'
                                                    onClick={(event) => this.onOverrideUser(event, user)}>
                                                Modify
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        )
                    }

                </Container>
            </React.Fragment>
        );
    }

    onDeleteUser = (e, user) => {
        this.boundActionCreators.removeUser(user)
    }

    onOverrideUser = (e, user) => {
        this.props.overrideUser(user)
    }
}

const mapStateToProps = state => ({
    ...state
})

UserList = connect(mapStateToProps)(UserList)
export default UserList;