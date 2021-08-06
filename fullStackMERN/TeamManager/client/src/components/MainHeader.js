import { Link } from '@reach/router'
import React from 'react'
import { Header } from '../style/Style'

const MainHeader = () => {
    return (
        <div>
            <Header>
                <Link to="#">Manage Players</Link>
                |
                <Link to="#">Manage Player Status</Link>
            </Header>
        </div>
    )
}

export default MainHeader
