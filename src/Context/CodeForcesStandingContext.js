import axios from 'axios';
import { db } from '../firebase';
import React, { createContext, useEffect, useState } from 'react';

export const CodeForcesContextStanding = createContext();

export const CodeForcesContextStandingProvider = ({ children }) => {
  const [standingData, setStandingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);



  return (
    <CodeForcesContextStanding.Provider value={{ standingData, loading, error, filteredData, setFilteredData }}>
      {children}
    </CodeForcesContextStanding.Provider>
  );
};
