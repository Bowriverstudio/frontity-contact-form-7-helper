# `Contact Form 7`

This is currently just a POC.

This package contains one action that submits the values to contact form 7.

## Install

`npm install frontity-contact-form-7-helper`

Update `frontity.settings.js`

```js
export default {
  packages: ["contact-form-7"],
};
```

## Usage

Sample usage is in the package `frontity-formik`

````js
        const submitContactForm7 = actions.contactForm7.submitContactForm7;
        const setSuccessfulMessage = actions.formik.setSuccessfulMessage;
        const setServerSideErrorMessage =
          actions.formik.setServerSideErrorMessage;

        submitContactForm7({ values, id })
          .then((message) => {
            formikActions.setStatus({ success: true });
            setServerSideErrorMessage({ key, message: false });
            setSuccessfulMessage({
              key,
              message: "Thank you for joining the waiting list.",
            });
            // TODO why is message unknown.
          })
          .catch((error) => {
            setServerSideErrorMessage({ key, message: error.message });
            setSuccessfulMessage({ key, message: false });
            Object.entries(error.invalid_fields).map(([key, value]) => {
              formikActions.setFieldError(key, value.message);
            });
            formikActions.setStatus({
              error: error.message,
            });
          })
          .finally(() => {
            formikActions.setSubmitting(false);
          });

          ```
````
