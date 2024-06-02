import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import IMAGES from "../../../assets/index"
import CustomHeadingSecondary from '../../../components/GenericComponents/CustomHeadingSecondary'
import CustomDesc from '../../../components/GenericComponents/CustomDesc'
import { FaCheckCircle } from "react-icons/fa"
import { FaArrowRightLong } from 'react-icons/fa6'

const AnimationSection = () => {

    const listData = [
        { title: "Powered by GPT-3 from OpenAI" },
        { title: "Different genres and tones" },
        { title: "Powered by GPT-3 from OpenAI" },
    ]

    return (
        <Container className='mt-5 pt-5'>
            <Row>
                <Col md={6}>
                    <img className='w-100' src={IMAGES.ANIMATE_IMG} alt="" />
                </Col>
                <Col md={6}>
                    <div className='ps-5 mt-5'>
                        <div className='mb-4'>
                            <CustomHeadingSecondary text="Animate Text in ablink Automatic and Immediate" />
                        </div>
                        <CustomDesc className="" text="The technology our AI assure a great writing, without waiting, without creative block, instant content only" />

                        <div className='pt-4 mb-5'>
                            <ul className='list-unstyled'>
                                {listData.map((data) => (
                                    <li className='d-flex align-items-center gap-3 mb-3'><FaCheckCircle color="#31A6F4" size="24" />
                                        <h5 className='fw-bold mb-0'>{data.title}</h5>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a style={{ color: "#963BB2", textDecoration: 'none' }} className='' href="/#">Read More <FaArrowRightLong /></a>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default AnimationSection
