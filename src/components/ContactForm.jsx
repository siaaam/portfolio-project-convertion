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
      onSubmit={handleSubmit(onSubmit)}
      className="form contact_message wow animated fadeInRight"
      id="contact-form"
      action="#"
      method="post"
    >
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Your Name"
              {...register('name')}
            />

            {errors.name && <p className="red">{errors.name.message}</p>}
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email Address"
              {...register('email')}
            />

            {errors.email && <p className="red">{errors.email.message}</p>}
          </div>
        </div>
        <div className="col-md-12 col-lg-12">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="subject"
              placeholder="Subject"
              {...register('subject')}
            />

            {errors.subject && <p className="red">{errors.subject.message}</p>}
          </div>
        </div>
        <div className="col-md-12 col-lg-12">
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              rows="7"
              placeholder="Message"
              {...register('messages')}
            ></textarea>

            {errors.messages && (
              <p className="red">{errors.messages.message}</p>
            )}
          </div>
        </div>
        <div className="col-md-12 col-lg-12">
          <div className="form-group">
            <input
              className="btn btn-default"
              id="send"
              value="Send Massage"
              type="submit"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
