import React from "react";
import { render } from "react-dom";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";
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
    <Router>
      <App />
    </Router>
  </IntlProvider>,
  document.getElementById("app")
);
