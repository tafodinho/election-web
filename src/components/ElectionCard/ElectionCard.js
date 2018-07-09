import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

export class ElectionCard extends Component {
  render() {
    return (
      <div className="card card-stats">
        <div className="content">
            <div className="header">
              <div className="stats">
                <p>{this.props.statsIcon}</p>
              </div>
              <hr />
            </div>
          <Row>
            <Col xs={5}>
              <div className="icon-big text-center icon-warning">
                {this.props.bigIcon}
              </div>
            </Col>
            <Col xs={7}>
              <div className="numbers">
                <p>{this.props.statsText}</p>
                {this.props.statsValue} Votes
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="stats">
              <Button type="submit" onClick={this.props.onClick} className="btn btn-primary">Vote</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ElectionCard;
