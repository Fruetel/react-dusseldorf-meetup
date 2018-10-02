import React from 'react';
import { Link } from 'gatsby';
import Map from '../components/map';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Now go build something great.</p>
    <Map />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
