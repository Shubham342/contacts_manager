import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const User = ({user}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/user/${user.id}`}>
            <Card.Img src='../images/image.png' alt={user.name} variant='top' />
        </Link>
        <Card.Body>
        <Link to={`/user/${user.id}`}>
            <Card.Title as='div'>
              <strong>{user.name}</strong>
            </Card.Title>
        </Link>
        <Card.Text as='div'>
            <div className='my-3'>
              Email: {user.email}
            </div>
        </Card.Text>
        <Card.Text as='div'>Phone: {user.phone}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default User