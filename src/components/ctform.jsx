import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Field should contain a valid e-mail')
      .max(255)
      .required('E-mail is required'),
    subject: yup.string().required('Subject is required'),
    messages: yup.string().required('Message is required'),
  })
  .required();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form
      class="form contact_message wow animated fadeInRight"
      id="contact-form"
      action="#"
      method="post"
    >
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="form-group">
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div class="col-md-12 col-lg-12">
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="subject"
              placeholder="Subject"
            />
          </div>
        </div>
        <div class="col-md-12 col-lg-12">
          <div class="form-group">
            <textarea
              class="form-control"
              name="message"
              rows="7"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div class="col-md-12 col-lg-12">
          <div class="form-group">
            <input
              class="btn btn-default"
              id="send"
              value="Send Massage"
              type="submit"
            />
          </div>
        </div>
        <div class="col-md-12 col-lg-12">
          <div class="error-handel">
            <div id="success">Your email sent Successfully, Thank you.</div>
            <div id="error">
              Error occurred while sending email. Please try again later.
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
