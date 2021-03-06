import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import HeaderLinks from "../Header/HeaderLinks.jsx";

import imagine from "assets/img/sidebar-3.jpg";
import logo from "assets/img/reactlogo.png";

import dashboardRoutes from "routes/dashboard.jsx";
import { connect } from "react-redux";
import { isEqual } from 'lodash/isEqual';
import { isAdmin, getUserId } from "components/common/Auth";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
     const {
         isAuthenticated
     } = this.props;

     console.log("TUMA", isAdmin())

    const sidebarBackground = {
      backgroundImage: "url(" + imagine + ")"
    };
    return (
        <div
            id="sidebar"
            className="sidebar"
            data-color="black"
            data-image={imagine}
            >
            <div
                className="sidebar-background"
                style={sidebarBackground} />
            <div className="logo">
                <a
                    href="https://www.creative-tim.com"
                    className="simple-text logo-mini"
                    >
                    <div className="logo-img">
                        <img src={logo} alt="logo_image" />
                    </div>
                </a>
                <a
                    href="https://www.creative-tim.com"
                    className="simple-text logo-normal"
                    >
                    Election
                </a>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    {this.state.width <= 991 ?
                        <HeaderLinks />
                        : null}
                        {dashboardRoutes.map((prop, key) => {
                            console.log("ISADMIN", isAdmin())
                            if (!prop.redirect && isAdmin() && prop.admin && !prop.hidden)
                                return (
                                    <li
                                        className={
                                            prop.upgrade
                                            ? "active active-pro"
                                            : this.activeRoute(prop.path)
                                        }
                                        key={key}
                                        >
                                        <NavLink
                                            to={prop.path}
                                            className="nav-link"
                                            activeClassName="active"
                                            >
                                            <i className={prop.icon} />
                                            <p>
                                                {prop.name}
                                            </p>
                                        </NavLink>
                                    </li>
                                );
                            else if(!prop.redirect && !isAdmin() && prop.student && !prop.hidden)
                                return (
                                    <li
                                        className={
                                            prop.upgrade
                                            ? "active active-pro"
                                            : this.activeRoute(prop.path)
                                        }
                                        key={key}
                                        >
                                        <NavLink
                                            to={prop.path}
                                            className="nav-link"
                                            activeClassName="active"
                                            >
                                            <i className={prop.icon} />
                                            <p>
                                                {prop.name}
                                            </p>
                                        </NavLink>
                                    </li>
                                );
                            return null;
                        })}
                    </ul>
                </div>
            </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        isAdmin: state.LoginReducer.user.is_staff,
        isAuthenticated: state.LoginReducer.isAuthenticated
    }
}
export default connect(mapStateToProps)(Sidebar);
