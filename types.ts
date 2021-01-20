import { AsyncAction, Package } from "frontity/types";

export type SubmitContactForm7 = {
  id: number;
  values: [];
};

/**
 * Helper package for Contact Form 7.
 */
export interface ContactForm7Package extends Package {
  /**
   * Package name.
   */
  name: "contact-form-7";

  actions: {
    contactForm7: {
      submitContactForm7: AsyncAction<ContactForm7Package, SubmitContactForm7>;
    };
  };
}
