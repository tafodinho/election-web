import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../common/validations';
import { connect } from 'react-redux';
import { loginRequest } from  '../../reducers/login/actions';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

class LoginForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isLoading: false,
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        console.log(errors, isValid)
        if(!isValid) {
            this.setState({ errors: errors })
        }

        return isValid;
    }
    onSubmit(e) {
        e.preventDefault();

        this.setState({errors: {}})
        if(this.isValid()) {
            console.log(this.state);
            this.props.loginRequest(this.state).then(
                (res) => {
                    console.log("DKJKL", res);
                        this.context.router.history.push('/dashboard/dashboard')

                },
                (err) => {

                }
            );
        }

    }
    render() {

        const {errors, isLoading, username, password} = this.state;

        return (
            <form onSubmit={this.onSubmit} className="form-signin">
              <div className="text-center mb-4">

                <h1 className="h3 mb-3 font-weight-normal">Login Page</h1>
                <p>Welcome to the election management platformm</p>
              </div>

              <TextFieldGroup
                  name="username"
                  value={username}
                  onChange={this.onChange}
                  error={errors.username}
                  label="username"
              />

              <TextFieldGroup
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  error={errors.password}
                  label="Password"
                  type="password"
              />

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button disabled={isLoading} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
            </form>
        )
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired,
}
const mapDispatchToProps = {
  loginRequest
}

export default connect(null, mapDispatchToProps)(LoginForm);
