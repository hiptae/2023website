import { Button, Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return(
        <div className="header">
            <Container className='pt-5'>
                <Row className='d-flex pb-2'>
                    <Col>
                        <h1 className='logo'>
                            <a href="#1">밀레</a>
                        </h1>
                    </Col>
                    <Col className='search'>
                        <div className='d-flex justify-content-center'>
                            <input type="text" placeholder='검색할 키워드를 입력해주세요.' />
                            <button><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" /></button>
                        </div>
                    </Col>
                    <Col>
                        <ul className='d-flex justify-content-end'>
                            <li><a href='#' className='btn icon'><FontAwesomeIcon icon={faHeart}/></a></li>
                            <li><a href='#' className='btn icon '><FontAwesomeIcon icon={faUser}/></a></li>
                            <li><a href='#' className='btn icon '><FontAwesomeIcon icon={faShoppingBag}/></a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className='py-2'>
                    <Col>
                        <ul className='cate d-flex justify-content-start gap-3 ps-0'>
                            <li>BRANDS</li>
                            <li>BEST</li>
                            <li>MEN</li>
                            <li>WOMEN</li>
                            <li>SHOES</li>
                            <li>ACC</li>
                            <li>OUTLET</li>
                            <li>COLDZERO</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='productCate d-flex justify-content-end' style={{color:"#888"}}>
                            <li><a href="#" className='me-2'>BRAND STROY</a></li>
                            <li><a href="#" className='me-2'>CAMPAIGN</a></li>
                            <li><a href="#" className='me-2'>PROMOTION</a></li>
                        </ul>                
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;