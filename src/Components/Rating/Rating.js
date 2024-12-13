import Location from "../Location/Location.js";

import "./Rating.css";
import { BarChart } from '@mui/x-charts/BarChart';
import React from "react";

import { PieChart } from '@mui/x-charts/PieChart';
import Parse from 'parse';
import { useParseQuery } from '@parse/react';

const Rating = () => {
  
  Parse.enableLocalDatastore();
  const parseQuery = new Parse.Query('Location');
  const {
    results, // Stores the current results in an array of Parse Objects
  } = useParseQuery(
    parseQuery, // The Parse Query to be used
    {
      enabled: true, // Enables the parse query (default: true)
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true // Enables live query for real-time update (default: true)
    }
  );

  const locations = results ? results.map(item => ({
    id: item.id,
    value: item.get("Rating"),
    label: item.get("Name")
  })) : [];
  const data0 = locations;
 
  const locations2 = results ? results.map(item => ({
    label: item.get("Name")
  })) : [];
  const data1 = locations2.map((x) => x.label);
  
  const locData = results ? results.map(item => ({
    data: Number(item.get("Rating"))
  })) : [];
  const data2 = locData.map((x) => x.data);

  return (
    <div>
        <div className="container">
            <PieChart
              series={[
                {data: data0},
              ]}
              width={400}
              height={200}
              slotProps={{
                legend: {
                    direction: 'column',
                    position: { vertical: 'middle', horizontal: 'right' },
                    padding: 0
                },
            }}
            />
        </div>
        < br />
        <div className="container">
            <BarChart
              series={[{data: data2}]}
              height={290}
              xAxis={[{ data: data1, scaleType: 'band' }]}
              // color map as an option to add later
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
        </div>
        < br />
        <Location/>
    </div>
  );
};

export default Rating