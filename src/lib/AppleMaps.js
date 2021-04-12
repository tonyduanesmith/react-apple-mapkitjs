import React, { Component } from 'react'

class AppleMaps extends Component {
	componentDidMount() {
		const { token, children } = this.props
		this.canvas = document.createElement('canvas')
		this.canvas.id = 'currentLocationOverride'
		mapkit.init({
			authorizationCallback: function(done) {
				done(token)
			}
		})

		this.map = new mapkit.Map('map')

		//	Annotations
		if (children !== undefined && children.length) {
			children.forEach(child => {
				if (child.props.isAnnotation) {
					this.createAnnotation(child.props)
				}
			})
		} else if (children !== undefined && children.props) {
			if (children.props.isAnnotation) {
				this.createAnnotation(children.props)
			}
		}

		//	Image Annotations
		if (children !== undefined && children.length) {
			children.forEach(child => {
				if (child.props.isImageAnnotation) {
					this.createImageAnnotation(child.props)
				}
			})
		} else if (children !== undefined && children.props) {
			if (children.props.isImageAnnotation) {
				this.createImageAnnotation(children.props)
			}
		}

		// Current Location Override
		if (children !== undefined && children.length) {
			children.forEach(child => {
				if (child.type.name === 'CurrentLocationOverride') {
					this.createCurrentLocationOverride(child.props)
				}
			})
		} else if (children !== undefined && children.props) {
			if (children.type.name === 'CurrentLocationOverride') {
				this.createCurrentLocationOverride(children.props)
			}
		}

		//	Set main coords
		this.setMainCoords()
	}

	componentDidUpdate(prevProps) {
		const { children } = this.props
		let checkLongitudeChange, checkLatitudeChange, checkDirectionChange
		if (typeof children !== 'undefined') {
			const firstChild = children[0] ? children[0] : children;
			const prevFirstChild = prevProps.children[0] ? prevProps.children[0] : prevProps.children;
			checkLongitudeChange =
				firstChild.props.longitude !==
				prevFirstChild.props.longitude
			checkLatitudeChange =
				firstChild.props.latitude !==
				prevFirstChild.props.latitude
			checkDirectionChange =
				firstChild.props.direction !==
				prevFirstChild.props.direction
		}
		if (
			checkLongitudeChange ||
			checkLatitudeChange ||
			checkDirectionChange
		) {
			if (children !== undefined && children.length) {
				children.forEach(child => {
					if (child.type.name === 'CurrentLocationOverride') {
						this.updateCurrentLocationOverride(child.props)
					}
				})
			} else if (children !== undefined && children.props) {
				if (children.type.name === 'CurrentLocationOverride') {
					this.updateCurrentLocationOverride(children.props)
				}
			}
		}
	}

	createAnnotation(annotationOptions) {
		const {
			longitude,
			latitude,
			color,
			glyphText,
			glyphImage,
			selected,
			title,
			subtitle,
			visible
		} = annotationOptions
		let MarkerAnnotation = mapkit.MarkerAnnotation
		let coords = new mapkit.Coordinate(latitude, longitude)
		let newAnnotation = new MarkerAnnotation(coords, {
			color,
			title,
			subtitle,
			selected,
			visible
		})
		glyphText ? (newAnnotation.glyphText = glyphText) : ''
		glyphImage ? (newAnnotation.glyphImage = { 1: glyphImage }) : ''
		this.map.showItems([newAnnotation])
	}

	createImageAnnotation(annotationOptions) {
		const {
			longitude,
			latitude,
			url,
			selected,
			title,
			subtitle,
			visible
		} = annotationOptions
		let ImageAnnotation = mapkit.ImageAnnotation
		let coords = new mapkit.Coordinate(latitude, longitude)
		let newAnnotation = new ImageAnnotation(coords, {
			title,
			subtitle,
			selected,
			visible,
			url: { 1: url }
		})
		this.map.showItems([newAnnotation])
	}

	createCurrentLocationOverride(locationOptions) {
		const { longitude, latitude, direction } = locationOptions
		// AppleMaps needs options structured this way
		const options = {
			data: {
				direction: direction
			}
		}
		const coordinate = new mapkit.Coordinate(latitude, longitude)
		this.currentLocation = new mapkit.Annotation(
			coordinate,
			() => {
				let ctx = this.canvas.getContext('2d')
				ctx.beginPath()
				ctx.translate(150, 135)
				ctx.rotate((options.data.direction * Math.PI) / 180)
				ctx.lineCap = 'round'
				ctx.moveTo(0, 7)
				ctx.lineTo(10, 12)
				ctx.lineTo(0, -13)
				ctx.lineTo(-10, 12)
				ctx.lineTo(0, 7)
				ctx.fillStyle = '#08F'
				ctx.strokeStyle = '#08F'
				ctx.stroke()
				ctx.fill()
				return this.canvas
			},
			options
		)
		this.map.showItems([this.currentLocation])
	}

	updateCurrentLocationOverride(locationOptions) {
		const { longitude, latitude } = locationOptions
		const coordinate = new mapkit.Coordinate(latitude, longitude)
		this.currentLocation.coordinate = coordinate
	}

	setMainCoords() {
		const { longitude, latitude } = this.props
		const mainCoords = new mapkit.CoordinateRegion(
			new mapkit.Coordinate(latitude, longitude),
			new mapkit.CoordinateSpan(this.zoomLevel(), this.zoomLevel())
		)
		this.map.region = mainCoords
	}

	zoomLevel() {
		const { zoomLevel } = this.props
		switch (zoomLevel) {
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
				id='map'
				style={{
					width: width,
					height: height
				}}
			/>
		)
	}
}

AppleMaps.defaultProps = {
	width: '100wh',
	height: '100vh',
	zoomLevel: 6,
	longitude: 53.8008,
	latitude: -1.5491
}

export default AppleMaps
