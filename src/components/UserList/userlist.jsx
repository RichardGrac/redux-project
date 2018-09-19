import React, {Component} from 'react'
import { Table, Container } from 'reactstrap'
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
                    <h1 className='text-left mb-3'
                        style={{border: '1px solid #f5f5f5', borderRadius: '5px', padding: '5px'}}>
                        Current Users Up
                    </h1>
                    {/*<Table dark responsive>*/}
                        {/*<thead>*/}
                        {/*<tr>*/}
                            {/*<th>#</th>*/}
                            {/*<th>Email</th>*/}
                            {/*<th>Type of User</th>*/}
                            {/*<th>Description</th>*/}
                        {/*</tr>*/}
                        {/*</thead>*/}
                        {/*<tbody>*/}
                        {/*{this.state.users.map((user, index) => (*/}
                            {/*<tr key={index}>*/}
                                {/*<th scope="row">#{index}</th>*/}
                                {/*<td>{user.email}</td>*/}
                                {/*<td>{user.userType}</td>*/}
                                {/*<td>{user.description}</td>*/}
                            {/*</tr>*/}
                        {/*))}*/}
                        {/*</tbody>*/}
                    {/*</Table>*/}
                    {
                        JSON.stringify(this.props)
                    }
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

UserList = connect(mapStateToProps)(UserList)
export default UserList;