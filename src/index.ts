import { ContactForm7Package } from "../types";

const contactForm7: ContactForm7Package = {
  name: "contact-form-7",
  actions: {
    contactForm7: {
      submitContactForm7: ({ state }) => async (params) => {
        const { id, values } = params;
        const { api } = state.source;
        const endpoint = `${api}/contact-form-7/v1/contact-forms/${id}/feedback`;
        // Create new form data to send the post request with form data.
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });
        // Post values to ContactForm7's endpoint
        const promise = new Promise<void>((resolve, reject) => {
          fetch(endpoint, {
            method: "post",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              if (data && data.status === "mail_sent") resolve(data.message);
              reject(data);
            });
        });
        return await promise;
      },
    },
  },
};
export default contactForm7;
