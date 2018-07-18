import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { ElectionCard } from "components/ElectionCard/ElectionCard";
import { Tasks } from "components/Tasks/Tasks.jsx";
import { isAdmin, getUserId } from "components/common/Auth";

import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
import { createVoteRequest, getVoteResultRequest, getVoteCandidatesRequest } from 'reducers/Vote/VoteAction';
import { getCandidatesRequest } from 'reducers/Candidates/CandidateAction';

import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [

            ],
            vote: {
                student: "",
                candidate: "",
            },
            voted: false

        }

        this.onClick = this.onClick.bind(this);
        this.options = this.options.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.props.getVoteResultRequest()
        .then(res => {
            this.setState({candidates : res.data})
        })
    }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
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

  onClick(e, id) {
      this.setState({vote: {student: getUserId(), candidate: id}, voted: !this.state.voted}, () => {
          this.props.createVoteRequest(this.state.vote)
          .then(res => {
                console.log("VOTE RESPONSE", res)
              }
          )
      });
      // this.props.createVoteRequest(this.state);
  }
  onChange(e) {
      this.props.getVoteCandidatesRequest(e.target.value);
  }

  render() {
      const {
          candidates
      } = this.props;

    return (
      <div className="content">
        <Grid fluid>
            <Row>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select </ControlLabel>
                    {this.options()}
                </FormGroup>
            </Row>
          <Row>
              {candidates.map((prop, key) => {
                  return (
                      <Col lg={3} sm={6}>
                        <ElectionCard
                          bigIcon={<i className="pe-7s-graph1 text-success" />}
                          statsText={prop.name}
                          statsValue={prop.vote}
                          statsIcon={prop.position}
                          voted={this.state.voted}
                          statsIconText="Updated now"
                          onClick={(e) => this.onClick(e, prop.id)}
                        />
                      </Col>
                  )
              })}
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        candidates: state.VoteReducer.candidates
    }
}
export default connect(mapStateToProps, {
    createVoteRequest,
    getCandidatesRequest,
    getVoteResultRequest,
    getVoteCandidatesRequest
})(Dashboard);
