import { Link } from '@reach/router'
import React from 'react'
import { Header } from '../style/Style'

const ListHeader = () => {
    return (
        <div>
            
            <Header>
            <Link to="/">List</Link>
            <Link to="/players/addplayer">AddPlayer</Link>
            </Header>
        </div>
    )
}

export default ListHeader
