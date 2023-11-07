import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const CourseView = ({image,name,duration,level,rating}) => {
    return(
        <Card style={{overflow: 'hidden' ,width:'18rem', padding: '0px'}}>
            <Card.Img src={image} variant='top'/>
            <Card.Title>{name}</Card.Title>
            <Row>
                <Col xs={6}>
                    <Card.Text>Duration : {duration}</Card.Text>
                </Col>
                <Col xs={6}>
                    <Card.Text>Level : {level}</Card.Text>
                </Col>
            </Row> 
            <Card.Text >Rating : {rating}</Card.Text>   
        </Card>
    );
}

export default CourseView;