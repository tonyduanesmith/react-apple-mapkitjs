import React, { Component } from "react";

class AppleMaps extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}
  	componentDidMount(){
		const { token, longitude, latitude, children } = this.props

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

		//	CurrentLocationOverride
		children.forEach(child => {
			if (child.type.name === 'CurrentLocationOverride'){
				this.createCurrentLocationOverride(map, child.props)
			}
		})

		//	Annotations
		children.forEach(child => {
			if(child.type.name === "Annotation"){
				this.createAnnotation(map, child.props)
			}
		})
	}

	createAnnotation(map, options){
		const { longitude, latitude, color, glyphText, selected, title, subtitle } = options
		let MarkerAnnotation = mapkit.MarkerAnnotation
		let coords = new mapkit.Coordinate(longitude, latitude)
		let newAnnotation = new MarkerAnnotation(coords);
		newAnnotation.color = color;
		newAnnotation.title = title;
		newAnnotation.subtitle = subtitle;
		newAnnotation.selected = selected;
		newAnnotation.glyphText = glyphText;

		map.showItems([newAnnotation])
	}

	createCurrentLocationOverride(map, options){
		const coordinate = new mapkit.Coordinate(53.8158, -1.6017)
		const currentLocation = new mapkit.Annotation(
			coordinate,
			(coordinate, options) => {
				let canvas = document.createElement("canvas")
				let ctx = canvas.getContext("2d");
				ctx.beginPath();
				ctx.translate(150, 135);
				ctx.rotate(0 * Math.PI / 180)
				ctx.lineCap = "round";
				ctx.moveTo(0, 7)
				ctx.lineTo(10, 12)
				ctx.lineTo(0, -13)
				ctx.lineTo(-10, 12)
				ctx.lineTo(0, 7)
				ctx.fillStyle = '#08F'
				ctx.strokeStyle = '#08F'
				ctx.stroke()
				ctx.fill()
				return canvas;
			}
		);
		map.showItems([currentLocation])
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
			<div 
				id="map" 
				style={{
					width: width, 
					height: height
				}}
			>
			</div>
    	);
  	}
}

AppleMaps.defaultProps = {
	width: '100wh',
	height: '100vh',
	zoomLevel: 6
}

export default AppleMaps;
