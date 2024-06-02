import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaBookOpenReader } from 'react-icons/fa6'
import IMAGES from '../../../assets'
import CustomHeadingSecondary from "../../../components/GenericComponents/CustomHeadingSecondary"

const CardsHome = () => {

    const cardsData = [
        {
            icon: <FaBookOpenReader size="25px" color='#fff' />,
            title: "Full Stories",
            desc: "Interesting and complex, with a good development and ending",
        },
        {
            // icon: <FaBookOpenReader size="25px" color='#fff' />,
            icon: <span><img alt='icon' src={IMAGES.CHECK_ICON} /> </span>,
            title: "Full Stories",
            desc: "Interesting and complex, with a good development and ending",
        },
        {
            icon: <FaBookOpenReader size="25px" color='#fff' />,
            title: "Full Stories",
            desc: "Interesting and complex, with a good development and ending",
        }
    ]

    return (
        <Container>
            <Row className='d-flex align-items-center justify-content-between'>
                <Col md={4}>
                    <CustomHeadingSecondary text="Quality Content In just One click" />
                </Col>
                <Col md={5}>
                    <p>Wether you need it urgently or just don't like to wait, our AI takes just seconds to deliver a complete work, no more waiting in commission queue.</p>
                </Col>
            </Row>

            <div className='cards-content mt-5 pt-5'>
                <Row>
                    {cardsData.map((data) => (
                        <Col md={4}>
                            <div className='card-item  border rounded-3'>
                                <div className='card-icon bg-black rounded-circle d-flex align-items-center justify-content-center'>
                                    {data.icon}
                                    {/* <FaBookOpenReader size="25px" color='#fff' /> */}
                                </div>
                                <h3 className='fw-bold fs-3 my-3'>{data.title}</h3>
                                <p>{data.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    )
}

export default CardsHome