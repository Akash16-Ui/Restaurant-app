import React from "react";
import { Row, Col } from "react-bootstrap";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandCollapse from "./ExpandCollapse";
import "../Styles/Card.css";
class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      expandcollapse: false,
      restaurantId: "",
      outlet: [],
    };
  }
  expand = (data, i) => {
    this.setState(
      {
        expandcollapse: true,
        restaurantId: data,
        outlet: this.props.data[i].outlet,
      },
      () => {
        console.log(this.state.outlet);
      }
    );
  };
  Collapse = () => {
    this.setState({
      expandcollapse: false,
    });
  };
  render() {
    return (
      <div className="container">
        <Row>
          {this.props.data
            ? this.props.data.map((item, key, arr) => (
                <Col lg={12} sm={12} md={12} xs={12} className="Colcard">
                  <Row>
                    <Col lg={3} sm={3} md={3} xs={3}>
                      <div className = "image">
                        <img
                          src={item.restaurantImage}
                          width = "100%"
                          height="300px"
                          style={{ marginTop: "20px" }}
                        />
                      </div>
                    </Col>
                    <Col lg={9} sm={9} md={9} xs={9} className="textLeft">
                      <h2>{item.restaurantName}</h2>
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
                        <Col lg={1} sm={1} md={1} xs={1}>
                          <div>
                            {this.state.expandcollapse &&
                            this.state.restaurantId === item.restaurantId ? (
                              <ExpandLessIcon
                                onClick={() => this.Collapse(key)}
                                style={{ color : "orange" , cursor: "pointer" }}
                              />
                            ) : (
                              <ExpandMoreIcon
                                onClick={() =>
                                  this.expand(item.restaurantId, key)
                                }
                                style={{ color : "orange",cursor: "pointer" }}
                              />
                            )}
                          </div>
                        </Col>
                      </Col>
                    </Col>
                    <Col lg={12} sm={12} md={12} xs={12}>
                      {this.state.expandcollapse &&
                      this.state.restaurantId === item.restaurantId ? (
                        <ExpandCollapse outlet={this.state.outlet} />
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                </Col>
              ))
            : []}
        </Row>
      </div>
    );
  }
}
export default Cards;
{
}
