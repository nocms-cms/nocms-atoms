import React, { Component } from 'react';
import events from 'nocms-events';

export default class PageInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    events.trigger('nocms.value-changed', this.props.scope, event.target.value);
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input className="nocms-text-input" type={this.props.type} value={this.props.value} onChange={this.handleChange} />
      </label>
    );
  }
}

PageInput.propTypes = {
  scope: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  config: React.PropTypes.object,
};

PageInput.defaultProps = {
  type: 'text',
};