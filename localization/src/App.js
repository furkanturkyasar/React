import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState, useEffect } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Dunya",
    description: "{count} yeni mesajiniz var",
  },
  "en-US": {
    title: "Hello World",
    description: "You have {count} new messages",
  },
};

function App() {
  const isLocal = localStorage.getItem("locale");
  const defaultLocale = isLocal ? isLocal : navigator.language;

  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" values={{ count: 3 }} />
        </p>
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
