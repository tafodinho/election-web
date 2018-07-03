import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class TextFieldGroup extends Component{

    render() {
        const {
            type,
            placeholder,
            label,
            error,
            value,
            onChange,
            name
        } = this.props;

        return (
            <div className={classnames("form-label-group", {'has-error': error})}>

                <input
                  type={type}
                  className="form-control"
                  placeholder={placeholder}
                  name={name}
                  value={value}
                  onChange={onChange}/>
                  {error && <span className="help-block red">{error}</span>}
                  <label>{label}</label>
            </div>
        )
    }
}

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;
