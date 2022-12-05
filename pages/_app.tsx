import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../app/store"
// import "../styles/globals.scss"
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette:{
      primary:{
        main:"#FBF7F4",
        contrastText:"#242424",
      },
      secondary:{
        main:"#242424"
      },
      background:{
        default:"#fbf7f4"
      }
      
    }
  })

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>  
    </Provider>
  );
}
