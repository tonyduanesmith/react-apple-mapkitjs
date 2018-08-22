import React, { Fragment } from "react";
import { render } from "react-dom";
import AppleMaps from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <Fragment>
      <AppleMaps 
        width={1000}
        height={1000}
        token="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRISDlQM1JLTlkifQ.eyJpc3MiOiI3TVE4MjM2RzM0IiwiaWF0IjoxNTM0OTY3Njc1LCJleHAiOjE1Mzc2NDYwODZ9.AZndjH8VBADrpYYHJO4C9OMQ0Yl0Ncr5BgGXcJe2Y08ILeYV6YUK8VdlxnbfoeX83A4kHFasOU-Y54-Ouo1ufQ"
        longitude={37.3382}
        latitude={-121.8863}
        zoomLevel={6}
      />
    </Fragment>
  );
}

render(<Demo />, document.getElementById("app"));
