import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="container">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Back</Link>
  </div>
);

export default NotFound;
