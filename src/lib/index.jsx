import React, { Component, Fragment } from "react";

class AppleMaps extends Component {
  	componentDidMount(){
		const { token, longitude, latitude } = this.props

    	mapkit.init({
      		authorizationCallback: function (done) {
        		done(token);
      		}
    	});

    	var coords = new mapkit.CoordinateRegion(
			new mapkit.Coordinate(longitude, latitude),
      		new mapkit.CoordinateSpan(this.zoomLevel(), this.zoomLevel())
    	);

    	var map = new mapkit.Map("map");
    	map.region = coords;
	}

	zoomLevel(){
		const { zoomLevel } = this.props
		switch(zoomLevel){
			case 0:
				return 300
			case 1:
				return 75
			case 2:
				return 18.75
			case 3:
				return 4.68
			case 4:
				return 1.17
			case 5:
				return 0.39
			case 6:
				return 0.073
			case 7:
				return 0.018
			case 8:
				return 0.0045
			default:
				return 0.35
		}
	}

	  
  	render() {
    	const { width, height } = this.props
    	return (
      		<Fragment>
        		<div 
          			id="map" 
          			style={{
            			width: width, 
            			height: height
          			}}>
        		</div>
      		</Fragment>
    	);
  	}
}

export default AppleMaps;
