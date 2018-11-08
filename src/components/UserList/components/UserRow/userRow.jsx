import React from 'react'
import {Button} from 'reactstrap'

const UserRow = (props) => {
    let {user, index} = props
    return (
        <tr key={`userRow-${user.id}`} onClick={() => props.onHandleExpand(user)}>
            <td className={user.printUser ? 'background-selected-print' : ''}>
                <label className={"isCheckbox-container"}>
                    <input name={`print-${user.id}`}
                           type="checkbox"
                           checked={user.printUser}
                           onChange={(e) => props.addUserToSelected(e, user)}
                    />
                    <span className="checkmark" />
                </label>
                {/*<input type="checkbox" onChange={(e) => props.addUserToSelected(e, user.id)}/>*/}
            </td>
            <th scope="row">#{index+1}</th>
            <td>{user.email}</td>
            <td>{user.userType}</td>
            <td>{user.description}</td>
            <td>{user.receiveEmail ? 'Yes' : 'No'}</td>
            <td>
                <Button color='danger' className='m-1'
                        onClick={(event) => props.onDeleteUser(event, user)}>
                    Delete
                </Button>
                <Button color='secondary'
                        onClick={(event) => props.onOverrideUser(event, user)}>
                    Modify
                </Button>
            </td>
        </tr>
    )
}

export default UserRow
