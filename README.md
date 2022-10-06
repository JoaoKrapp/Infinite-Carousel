# Infinite-Carousel

## Cummon bug

Make sure that in the node_modules/react-native/index.js at the line 437, the functions are equals as follow:

```javascript
// Deprecated Prop Types
get ColorPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').ColorPropType;
},

get EdgeInsetsPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
},

get PointPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').PointPropType;
},

get ViewPropTypes(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').ViewPropTypes;
},
```