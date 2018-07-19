import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import { connect } from "react-redux";

import { getVotesRequest, deleteVoteRequest } from "reducers/Vote/VoteAction";

const thArray = ["Vote Id", "Student Id", "Candidate Id", "Date"];

class Vote extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.deleteVote = this.deleteVote.bind(this);
    }
    componentWillMount() {
        this.props.getVotesRequest();
    }

    shouldComponentUpdate() {
        return true;
    }

    deleteVote(id) {
        const confirm = window.confirm("Delete student?");

        if(confirm) {
            this.props.deleteVoteRequest(id);
        }

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
            <Col md={12}>
              <Card
                title="List of Vote"
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
                            <td>{prop.id}</td>
                            <td>{prop.student}</td>
                            <td>{prop.candidate}</td>
                            <td>{prop.date}</td>
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
    getVotesRequest,
    deleteVoteRequest
}

const mapStateProps = (state) => {
    return {
        votes: state.VoteReducer.votes,
    }
}
export default connect(mapStateProps, mapDispatchToProps)(Vote);
