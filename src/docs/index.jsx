import React, { Fragment } from "react";
import { render } from "react-dom";
import { AppleMaps, Annotation } from "../../lib";
import "./styles.css";
import { CurrentLocationOverride } from "../lib";

function Demo() {
	return (
		<Fragment>
			<AppleMaps 
			token="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRISDlQM1JLTlkifQ.eyJpc3MiOiI3TVE4MjM2RzM0IiwiaWF0IjoxNTM0OTY3Njc1LCJleHAiOjE1Mzc2NDYwODZ9.AZndjH8VBADrpYYHJO4C9OMQ0Yl0Ncr5BgGXcJe2Y08ILeYV6YUK8VdlxnbfoeX83A4kHFasOU-Y54-Ouo1ufQ"
			longitude={53.8008}
			latitude={-1.5491}
			>
				<Annotation 
					longitude={53.8158}
					latitude={-1.6017}
					color="#969696"
					title="Apple"
					subtitle="work"
					selected="true"
					glyphText=""
				/>
				<Annotation 
					longitude={53.8158}
					latitude={-1.5017}
					color="#349576"
					title="Apple"
					subtitle="work"
					selected="true"
					glyphText=""
				/>
				<CurrentLocationOverride />
			</AppleMaps>
		</Fragment>
	);
}

render(<Demo />, document.getElementById("app"));
