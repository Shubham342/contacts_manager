import React, {useState, useEffect} from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import axios from 'axios'
import User from '../components/User'

const HomeScreen = () => {
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
        const fetchUsers = async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
        }
        fetchUsers()
    }, [])

  return (
    <div>
        <Container>
            <Row>
                <Col sm={8}>
                <h1>User Contacts</h1>
                </Col>
                <Col sm={4}>
                <input placeholder="Search contact by name" onChange={event => setQuery(event.target.value)} />
                </Col>
            </Row>
        </Container>
        <Row>
            {
        users.filter(user => {

            if (query === "") {
                
                return user;
            } else if (user.name.toLowerCase().includes(query.toLowerCase())) {
                //returns filtered array
                return user;
            }
            }).map(user =>(
                <Col sm={12} md={6} lg={4} xl={3} key={user.id}>
                <User user={user} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen