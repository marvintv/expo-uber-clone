// polyfills.ts
import 'react-native-get-random-values';

if (typeof global.Buffer === 'undefined') {
  global.Buffer = require('buffer/').Buffer;
}

if (typeof global.process === 'undefined') {
  global.process = require('process');
}

if (typeof global.crypto !== 'object') {
  global.crypto = require('crypto-browserify');
}

// Polyfill stream
if (typeof global.stream === 'undefined') {
  global.stream = require('stream-browserify');
}

// Polyfill events
if (typeof global.events === 'undefined') {
  global.events = require('events');
}