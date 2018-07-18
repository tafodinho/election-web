import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

export class ElectionCard extends Component {
  render() {
    return (
      <div className="card card-stats">
        <div className="content">
            <div className="header">
              <div className="stats">
                <p>{this.props.statsText}</p>
              </div>
              <hr />
            </div>
          <Row>
            <Col sm={12}>
              <div className="numbers">
                <p>{this.props.statsIcon}</p>
                {this.props.statsValue} Votes
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="stats">
              <Button type="submit" onClick={this.props.onClick} className="btn btn-primary" disabled={this.props.voted}>Vote</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ElectionCard;
