import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        subject: "",
        message: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          window.location.href = `mailto:tythursby@gmail.com?subject=${values.subject}&body=${values.message}`;
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            id="subjectField"
            component={TextField}
            type="input"
            label="Subject"
            name="subject"
          />
          <Field
            id="messageField"
            component={TextField}
            type="input"
            multiline
            rows={4}
            label="Message"
            name="message"
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
