import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import axios from 'axios'

const UserScreen = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    const [address, setAddress] = useState({})
    const [company, setCompany] = useState({})
    useEffect(() => {
        const fetchUser = async () => {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(data)
            setAddress(data.address)
            setCompany(data.company)
        }
        fetchUser()
        
    }, [])

  return (<>
    <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
    <Row>
        <Col md={6}>
            <Image src='../images/image.png' alt={user.name} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{user.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    Username: {user.username}
                </ListGroup.Item>
                <ListGroup.Item>
                    Email: {user.email}
                </ListGroup.Item>
                <ListGroup.Item>
                    Phone: {user.phone}
                </ListGroup.Item>
                <ListGroup.Item>
                    Website: {user.website}
                </ListGroup.Item>
                <ListGroup.Item>
                    Address: {address.suite} {address.street} {address.city} {address.zipcode}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <strong>Company Details</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Name: 
                            </Col>
                                
                            <Col>
                                {company.name}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Catch Phrase: 
                            </Col>
                                
                            <Col>
                                {company.catchPhrase}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                BS: 
                            </Col>
                                
                            <Col>
                                {company.bs}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
  </>
    
  )
}

export default UserScreen