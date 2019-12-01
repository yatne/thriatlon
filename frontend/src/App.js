import React from 'react';
import './App.css';
import Page from "./components/Page";
import { ReducerProvider } from "./reducer/ReducerProvider";

function App() {
  return (
    <ReducerProvider>
      <Page className="App">
        cośtam
      </Page>
    </ReducerProvider>
  );
}

export default App;
