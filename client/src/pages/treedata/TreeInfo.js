import React from 'react';
import DataTable from './DataTable';

export const TreeLocation = (props) => (
  <div className="flex-grid border-top">
    <div className="treehistory-list text-left">
      <h4 className="text-center">Location</h4>
      <DataTable
        data={props}
        keys={Object.keys(props)}
      />
    </div>
  </div>
);

export const TreeMoreInfo = (props) => (
  <div className="flex-grid border-top">
    <div className="treehistory-list text-left">
      <h4 className="text-center">More info</h4>
      <DataTable
        data={props}
        keys={Object.keys(props)}
      />
      <div>
        <a href="https://standards.opencouncildata.org/#/trees" name="opencouncildata.org trees">
          Open Tree Standards
        </a>
      </div>
    </div>
  </div>
);
