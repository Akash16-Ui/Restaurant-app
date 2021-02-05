import React from "react";
import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import qs from "qs";
import Axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Action from "../Action/Action";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../Styles/Card.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class HeaderComponent extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const key = { latitude: 13.0358481, longitude: 80.244455 };
    let data = qs.stringify(key);
    Axios.post(
      "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",
      data
    )
      .then((response) => {
        this.props.getDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <Col lg={12} md={12} sm={12} xs={12}>
          <Navbar bg="light" variant="light">
            <Navbar.Brand
              style={{ fontSize: "25px", marginLeft: "20px" }}
              href="#home"
            >
              Restaurant <span style={{color : "orange"}}>{this.props.count}</span>
            </Navbar.Brand>
            <Nav className="" style={{ justifyContent: "space-evenly" }}>
              <Nav.Link
                style={{ fontSize: "18px", marginLeft: "300px" }}
                href="#home"
              >
                Relevance <ExpandMoreIcon style={{color : "orange"}} />
              </Nav.Link>
              <Nav.Link
                style={{ fontSize: "18px", marginLeft: "360px" }}
                href="#features"
              >
                Filter <i class="fa fa-filter" aria-hidden="true" style={{color : "orange"}}></i>
              </Nav.Link>
            </Nav>
          </Navbar>
          <Cards data={this.props.listRestaurants} />
        </Col>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { getDetails } = state;
  return {
    listRestaurants: state && state.item ? state.item : "",
    count: state && state.count ? state.count : "",
  };
};

export default connect(mapStateToProps, Action)(HeaderComponent);
