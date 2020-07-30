import React from "react";
import { render } from "react-dom";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";
import App from "components/App";
import messages from "locales/messages";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const usersLocale = navigator.language.split("-")[0];
const store = configureStore();

const locale =
  (navigator.languages && usersLocale) ||
  navigator.language ||
  navigator.userLanguage ||
  "en";

render(
  <ReduxProvider store={store}>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <App />
      </Router>
    </IntlProvider>
  </ReduxProvider>,
  document.getElementById("app")
);
