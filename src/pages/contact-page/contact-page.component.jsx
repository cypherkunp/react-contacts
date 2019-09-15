import React, { Component } from 'react';
import Joi from 'joi-browser';
import shortId from 'shortid';

import { saveContact } from '../../modal/contact-data';
import { incrementLabelCount } from './../../modal/contact-labels';

import ContactForm from '../../components/contact-form/contact-form.component';

class ContactPage extends Component {
  state = {
    contact: { name: '', email: '', phone: '', company: '', website: '', address: '', notes: '', label: '' },
    errors: {}
  };

  schema = {
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .allow('')
      .optional(),
    phone: Joi.string()
      .trim()
      .required(),
    company: Joi.string()
      .allow('')
      .optional(),
    website: Joi.string()
      .allow('')
      .optional(),
    address: Joi.string()
      .allow('')
      .optional(),
    notes: Joi.string()
      .allow('')
      .optional(),
    label: Joi.string()
      .allow('')
      .optional()
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.contact, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const contactWithId = { ...this.state.contact };
    contactWithId._id = shortId.generate();

    saveContact(contactWithId);
    incrementLabelCount(contactWithId.label);

    this.props.history.push('/');
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const contact = { ...this.state.contact };
    contact[input.name] = input.value;

    this.setState({ contact, errors });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container contact-page mt-5">
        <div className="row">
          <div className="col-sm" />
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Create Contact</h1>
                <ContactForm
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  isFormValidated={!!this.validate()}
                  errors={errors}
                />
              </div>
            </div>
          </div>
          <div className="col-sm" />
        </div>
      </div>
    );
  }
}

export default ContactPage;
