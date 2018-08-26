# react-apple-mapkitjs

## Installation

```javascript
npm install react-apple-mapkitjs
```

Add the script file in your reacts public index.html file

```html
<script src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js"></script>
```

## Getting an access token to use Apple's mapkitjs

Getting your token to get mapkitjs to work is not the most simple of tasks, I recommend watching this video in full to understand how to do this.
https://developer.apple.com/videos/play/wwdc2018/508

If you want a simpler explanation and dont mind giving your private key to some other app to create your access token then the following link is a great resource.
https://mapkitjs.rubeng.nl/#/
***
## Once you have your access token

Import the AppleMaps component into your project
```jsx
    import { AppleMaps } from 'react-apple-mapkitjs'
```
<br>
The only prop that is required is the token prop, without this you will get a "initialization failed" in the console

```jsx
    <AppleMaps 
        token="your access token here"
    />
```
If the access token is correct then the map will default to Leeds, UK
***
## Additional props and components
The AppleMaps component takes additional props to adjust the map view and zoom level

```jsx
    <AppleMaps
        token="your access token here"
        longitude={30.8008}
        latitude={-1.5491}
        zoomLevel={1}
    />
```
You can also use additional Annotation components to put customizable drop pins on your apple map. The Annotation Components must be child components of AppleMaps.

First import both the AppleMaps and the Annotation component
```jsx
import { AppleMaps, Annotation } from 'react-apple-mapkitjs'
```
then add to your react application
```jsx
<AppleMaps
    token="your access token here"
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
    <Annotation 
        longitude={53.8158}
        latitude={-1.5017}
        color="#349576"
        title="New Annotation"
        subtitle="work"
        selected={false}
    />
</AppleMaps>
```
Most of the props to the Annotation component are self explanatory
***
## Future Development

I'm going to carry on developing this component as it currently only has basic functionality, if there are any requests or you need any anymore help than that provided above then feel free to get in touch

