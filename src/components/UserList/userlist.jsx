import React, {Component} from 'react'
import {Table, Container, Button} from 'reactstrap'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import './userlist.css'
import {getUsers, removeUser, updateUser} from '../../js/actions'
import UserRow from './components/UserRow/userRow'
import UserRowExpanded from './components/UserRowExpended/userRowExpanded'


class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedUsers: [],
            users: [],
            expandedRowsByUserId: ['asxs73an']
        }
    }

    componentDidMount(){
        // this.props.getUsers()
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps: ', nextProps)
    }

    addUserToSelected = (event, userSearched) => {
        // const userIndex = this.state.selectedUsers.indexOf(userSearched.id);
        // if (userIndex === -1){
        //     this.setState(prevState => {
        //         prevState.selectedUsers.push(userSearched.id)
        //     });
        // }else{
        //     this.setState(prevState => {
        //         prevState.selectedUsers.splice(userIndex, 1)
        //     });
        // }

        const userModified = {
            ...userSearched,
            printUser: !userSearched.printUser
        }
        this.props.updateUser(userModified)
    }

    printSelected () {
        const userIds = this.state.users
            .filter(user => {
                return user.printUser === true
            })
            .map(user => user.id).join(',')
        const url = `/cPrintSelectedItems?usersIds=${userIds}`
        window.open(url, 'Users Window', 'width=730,height=650')
    }

    onHandleExpand = user => {
        const userIndex = this.state.expandedRowsByUserId.indexOf(user.id);
        if (userIndex === -1){
            this.setState(prevState => {
                prevState.expandedRowsByUserId.push(user.id)
            }, () => this.forceUpdate());
        } else {
            this.setState(prevState => {
                prevState.expandedRowsByUserId.splice(userIndex, 1)
            }, () => this.forceUpdate());
        }
    }

    renderRows = () => {
        let itemRows = []
        this.props.users.forEach((user, i) => {
            itemRows = itemRows.concat(
                <UserRow user={user}
                         index={i}
                         onHandleExpand={this.onHandleExpand}
                         addUserToSelected={this.addUserToSelected}
                         onDeleteUser={this.onDeleteUser}
                         onOverrideUser={this.onOverrideUser}
                />
            )

            if (this.state.expandedRowsByUserId.indexOf(user.id) > -1){
                itemRows = itemRows.concat(this.getExpandedRow(user))
            }
        })
        return itemRows
    }

    render() {
        return (
            <React.Fragment>
                <Container className='mt-3'>
                    <h1 className='text-left mb-3'>
                        Current Users Up
                    </h1>
                    {this.props.users.length === 0 ?
                        (<h2 style={{color: 'grey', textAlign: 'center', marginBottom: '40px', border: '1px solid #f5f5f5', borderRadius: '5px', padding: '5px'}}>
                            There are no users registered.</h2> )
                        : (
                            <div>
                                <div style={{textAlign: 'left', margin: '1em 0'}}>
                                    <Button color='success' onClick={() => this.printSelected()}>Print Selected Items</Button>
                                </div>
                                <Table dark responsive>
                                    <thead>
                                    <tr>
                                        <th>Print</th>
                                        <th>#</th>
                                        <th>Email</th>
                                        <th>Type of User</th>
                                        <th>Description</th>
                                        <th>Notifications</th>
                                        <th>Options</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderRows()}
                                    </tbody>
                                </Table>
                            </div>
                        )
                    }

                </Container>
            </React.Fragment>
        );
    }

    getExpandedRow = (user) => {
        return <UserRowExpanded user={user} />
    }

    onDeleteUser = (e, user) => {
        this.props.removeUser(user)
    }

    onOverrideUser = (e, user) => {
        this.props.overrideUser(user)
    }
}

export const actionCreators = {
    getUsers,
    updateUser,
    removeUser
}

export const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}

export const mapStateToProps = state => {
    return {
        users: state.usersData.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);