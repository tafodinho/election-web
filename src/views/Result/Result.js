import React, { Component } from "react";
import { Grid, Row, Col, Table, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import { connect } from "react-redux";

import { getVoteResultRequest } from "reducers/Vote/VoteAction";

const thArray = ["Matricule", "Name", "Department", "Category", "Level", "Votes"];

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.options = this.options.bind(this);
    }
    componentWillMount() {
        this.props.getVoteResultRequest();
    }

    shouldComponentUpdate() {
        return true;
    }

    options() {
        return (
            <FormControl componentClass="select" placeholder="select" onChange={this.onChange}>
                <option value="president">president</option>
                <option value="vice-president">vice president</option>
                <option value="secretary">secretary</option>
                <option value="president">treasurer</option>
            </FormControl>

        )
    }
  render() {
      const {
          votes
      } = this.props;

      console.log(votes);
    return (
      <div className="content">
        <Grid fluid>
            <Row>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select Category </ControlLabel>
                    {this.options()}
                </FormGroup>
            </Row>
          <Row>
            <Col md={12}>
              <Card
                title="List of Results"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {votes.map((prop, key) => {
                        if(prop.is_staff)
                            return null
                        return (
                          <tr key={key}>
                            <td>{prop.matricule}</td>
                            <td>{prop.name}</td>
                            <td>{prop.department}</td>
                            <td>{prop.position}</td>
                            <td>{prop.level}</td>
                            <td>{prop.vote}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = {
    getVoteResultRequest
}

const mapStateProps = (state) => {
    return {
        votes: state.VoteReducer.vote
    }
}
export default connect(mapStateProps, mapDispatchToProps)(Result);
