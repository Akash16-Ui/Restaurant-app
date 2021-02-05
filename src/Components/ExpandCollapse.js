import React from "react";
import { Row, Col } from "react-bootstrap";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../Styles/Expandcollapse.css";
class ExpandCollapse extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div >
        <Row>
          {this.props.outlet
            ? this.props.outlet.map((item, key) => (
                <Col lg={12} sm={12} md={12} xs={12} className="outletcard">
                  <Col lg={3} sm={3} md={3} xs={3}>
                    <img
                      src={item.image}
                      width="100%"
                      height="300px"
                      style={{ marginTop: "20px" }}
                    />
                  </Col>
                  <Col lg={9} sm={9} md={9} xs={9} className="textLeft">
                    <h2>{item.outletName}</h2>
                    <h2 style={{ fontSize: "25px" }} className="fontweight">
                      North Indian,South Indian,chine..
                    </h2>
                    <Col
                      lg={12}
                      sm={12}
                      md={12}
                      xs={12}
                      className="disFlex adjustRow margin-top fontweight"
                    >
                      <Col lg={4} sm={4} md={4} xs={4}>
                        <div>Time</div>
                      </Col>
                      <Col lg={4} sm={4} md={4} xs={4}>
                        <div>Price</div>
                      </Col>
                      <Col lg={3} sm={3} md={3} xs={3}>
                        <div>Ratings</div>
                      </Col>
                    </Col>

                    <Col
                      lg={12}
                      sm={12}
                      md={12}
                      xs={12}
                      className="disFlex adjustRow"
                      style={{ fontSize: "20px" }}
                    >
                      <Col
                        lg={4}
                        sm={4}
                        md={4}
                        xs={4}
                        className="adjustRow "
                        style={{ fontSize: "20px" }}
                      >
                        <div>{item.displayTime || ""}</div>
                      </Col>
                      <Col lg={4} sm={4} md={4} xs={4}>
                        <div>{item.displayCostForTwo || ""}</div>
                      </Col>
                      <Col lg={3} sm={3} md={3} xs={3}>
                        <div>
                          {item.averageReview || ""}
                          <StarHalfIcon
                            style={{
                              color: "orange",
                              marginLeft: "10px",
                              marginBottom: "5px",
                            }}
                          />
                        </div>
                      </Col>
                    </Col>
                  </Col>
                </Col>
              ))
            : ""}
        </Row>
      </div>
    );
  }
}
export default ExpandCollapse;
