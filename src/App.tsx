import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from './components/Layout'
import Routing from './components/Routing'


export default function App(): ReactElement {
  return (
    <Router>
      <Layout>
        <Routing />
      </Layout>
    </Router>


  );
}


