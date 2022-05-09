import "@styles/globals.css";
import { Provider } from "react-redux";
import Store from "../redux/Store";
import React from "react";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </Provider>
  );
}

export default MyApp;
