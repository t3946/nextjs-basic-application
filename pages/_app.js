import "@styles/globals.css";
import { Provider } from "react-redux";
import getStore from "../redux/Store";
import React from "react";
import { SSRProvider } from "react-bootstrap";
import axios from "axios";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={getStore(pageProps.storeInitialData)}>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const catalog = await axios
    .get("http://localhost:3001/api/get-catalog")
    .then((res) => {
      return res.data.catalog;
    });

  const appProps = await App.getInitialProps(appContext);

  appProps.pageProps.storeInitialData = { catalog };

  return { ...appProps };
};

export default MyApp;
