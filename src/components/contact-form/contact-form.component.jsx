import React from 'react';
import TextArea from '../../components/common-components/textarea/textarea.component';
import Select from './../../components/common-components/select/select.component';
import Input from './../../components/common-components/input/input.component';
import { getLabels } from '../../modal/contact-labels';
import CustomButton from './../common-components/custom-button/custom-button.component';

const ContactForm = ({ handleSubmit, handleChange, isFormValidated, errors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="Full Name"
          error={errors['name']}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          error={errors['phone']}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="example@domain.com"
          error={errors['email']}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <Input
          label="Website"
          name="website"
          type="url"
          placeholder="http://username.com"
          error={errors['website']}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <Input
          label="Company"
          name="company"
          type="text"
          placeholder="Company Name"
          error={errors['company']}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <TextArea label="Address" name="address" rows={2} error={errors['address']} onChange={handleChange} />
      </div>
      <div className="form-group">
        <TextArea label="Notes" name="notes" rows={3} error={errors['notes']} onChange={handleChange} />
      </div>
      <div className="form-group">
        <Select name="label" label="Label" options={['', ...getLabels()]} onChange={handleChange} />
      </div>
      <CustomButton type="submit" isDisabled={isFormValidated}>
        Sign In
      </CustomButton>
    </form>
  );
};

export default ContactForm;
