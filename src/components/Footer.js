import React from "react";
import {Row,Col} from 'react-bootstrap'

const Footer = () => {


    const CurrentYear = new Date().getFullYear()


    return(
        <>
        <footer>
            <Row className="text-center">
                <Col>
                
                     VTU &copy;{CurrentYear} | All Rights Reserved 

                </Col>
            </Row>
        </footer>
        </>
    )
}
export default Footer