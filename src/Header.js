import React, { Component  } from 'react';
import Image from "./Image";
import {  Row, Col, Dropdown } from 'react-bootstrap';

class Header extends Component {
		render(){
				return (
						<Row className="p-3 mb-2 bg-dark text-white">
								<Col md={2}>
										<Dropdown>
												<Dropdown.Toggle variant="primary" id="dropdown-basic">
														Pilih Bahasa
												</Dropdown.Toggle>
										</Dropdown>
								</Col>

								<Col md={{span:3, offset:7}}>
										<Image />

						<center>	<p>Alan Saputra</p> 	</center>
			         	</Col>
		</Row>
				)
		}
}
export default Header;
