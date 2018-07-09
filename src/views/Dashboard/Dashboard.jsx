import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

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
import { createVoteRequest } from 'reducers/Vote/VoteAction';
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
            }
        }

        this.onClick = this.onClick.bind(this);
    }

    componentWillMount() {
        const id = getUserId();
        this.setState({vote: {student: id}})
        this.props.getCandidatesRequest()
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

  onClick(e) {
      console.log("STATE", this.state)
      // this.props.createVoteRequest(this.state);
  }

  render() {
      const {
          candidates
      } = this.state;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
              {candidates.map((prop, key) => {
                  return (
                      <Col lg={3} sm={6}>
                        <ElectionCard
                          bigIcon={<i className="pe-7s-graph1 text-success" />}
                          statsText={prop.student.name}
                          statsValue="105"
                          statsIcon={prop.position}
                          statsIconText="Updated now"
                          onClick={this.onClick}
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

export default connect(null, {createVoteRequest, getCandidatesRequest})(Dashboard);
