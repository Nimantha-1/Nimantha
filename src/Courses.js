import React, {useState} from "react";
import './Courses.css';
import CourseView from "./CourseView";
import  courseimg from './assets/courseimg.jpg';
import { Col, Container, Row } from "react-bootstrap";

const courses = [
    {
        id: 1,
        name: 'Introduction to CS',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 2,
        name: 'Introduction to Web Devolopment',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 3,
        name: 'Programming with JAVA',
        level: 'Intermediate',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
    {
        id: 4,
        name: 'Introduction to JAVA',
        level: 'beginner',
        duration: '4weeks',
        image: courseimg,
        ratings: 5,
    },
];

const Courses = () => {
    return(
        <Container xs={12} fluid className="d-flex flex-coumn">
        <Col xs={10}>
            <Row>
                <Container className="text-center"><h2>Recomended courses</h2></Container>
                {courses.map(course => (
                    <CourseView
                    image={course.image}
                    name={course.name}
                    duration={course.duration}
                    level={course.level}
                    rating={course.ratings}
                    />
                ))}
            </Row>
            <Row>
                <Container className="text-center"><h2>Other Courses</h2></Container>
                {courses.map(course => (
                    <CourseView
                    image={course.image}
                    name={course.name}
                    duration={course.duration}
                    level={course.level}
                    rating={course.ratings}
                    />
                ))}
            </Row>
        </Col>
        <Col>
        notifications
        </Col>
        </Container>
    );
}

export default Courses;