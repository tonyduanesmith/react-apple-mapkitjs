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
				latitude={53.8008}
				longitude={-1.5491}
				zoomLevel={6}
			>
				<Annotation 
					latitude={53.7967}
					longitude={-1.5438}
					color="#969696"
					title="Apple"
					subtitle="work"
					selected={true}
					glyphText=""
				/>
				<ImageAnnotation 
					latitude={53.8158}
					longitude={-1.4017}
					title="Cat Cafe"
					subtitle="scholes"
					selected={true}
					url='./assets/cat.jpeg'
				/>
				<Annotation 
					latitude={53.7950}
					longitude={-1.5474}
					color="red"
					title="Rail Station"
					subtitle="Leeds"
					selected={false}
					glyphImage='./assets/railicon.png'
				/>
				<CurrentLocationOverride 
					latitude={53.7158}
					longitude={-1.4017}
					direction={90}
				/>
			</AppleMaps>
		</Fragment>
	);
}

render(<Demo />, document.getElementById("app"));
