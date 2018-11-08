import React from 'react'

const UserRowExpanded = (props) => {
    const {user} = props
    return (
        <tr key={`expanded-${user.id}`}>
            <td colSpan={6}>Hello There!</td>
        </tr>
    )
}

export default UserRowExpanded
