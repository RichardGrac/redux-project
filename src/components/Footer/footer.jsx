import React from 'react'
import logo from '../../assets/github-mark.png'

const Footer = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <a href="https://github.com/RichardGrac/redux-project">
                <img style={{margin: '10px 0 20px 0', height: '40px'}} src={logo} alt="github-icon.png"/>
                <span style={{color: '#999999'}}>CRUD with React-Redux</span>
            </a>
        </div>
    )
}

export default Footer
