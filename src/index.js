import React from "react";
import { render } from "react-dom";
import { IntlProvider } from "react-intl";
import App from "components/App";
import messages from "locales/messages";

const usersLocale = navigator.language.split("-")[0];

const locale =
  (navigator.languages && usersLocale) ||
  navigator.language ||
  navigator.userLanguage ||
  "en";

render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <App />
  </IntlProvider>,
  document.getElementById("app")
);
