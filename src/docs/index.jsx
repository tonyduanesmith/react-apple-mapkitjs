import React, { Fragment } from "react";
import { render } from "react-dom";
import { AppleMaps, Annotation, ImageAnnotation } from "../../lib";
import "./styles.css";
import { CurrentLocationOverride } from "../lib";
import { YOUR_ACCESS_TOKEN_HERE } from '../../config'

function Demo() {
	return (
		<Fragment>
			<AppleMaps 
				token={YOUR_ACCESS_TOKEN_HERE}
				longitude={53.8008}
				latitude={-1.5491}
				zoomLevel={6}
			>
				<Annotation 
					longitude={53.8158}
					latitude={-1.6017}
					color="#969696"
					title="Apple"
					subtitle="work"
					selected={true}
					glyphText=""
				/>
				<ImageAnnotation 
					longitude={53.8158}
					latitude={-1.4017}
					title="Cat Cafe"
					subtitle="scholes"
					selected={true}
					url='./assets/cat.jpeg'
				/>
				<Annotation 
					longitude={53.8058}
					latitude={-1.5317}
					color="red"
					title="Rail Station"
					subtitle="Leeds"
					selected={false}
					glyphImage='./assets/railicon.png'
				/>
				<CurrentLocationOverride 
					longitude={53.7158}
					latitude={-1.4017}
					direction={90}
				/>
			</AppleMaps>
		</Fragment>
	);
}

render(<Demo />, document.getElementById("app"));
