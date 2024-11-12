// polyfills.ts
import { Buffer } from '@craftzdog/react-native-buffer';
import 'react-native-get-random-values';

// Register required globals without modifying metro config
const globals = {
  Buffer: Buffer,
  process: {
    ...require('process'),
    version: 'v9.40',
    env: {
      ...process.env,
      NODE_ENV: __DEV__ ? 'development' : 'production',
    },
  },
  stream: require('@craftzdog/react-native-buffer'),
  StringDecoder: require('@craftzdog/react-native-buffer').StringDecoder,
  Transform: require('@craftzdog/react-native-buffer').Transform,
  events: require('events'),
};

// Safely assign globals
Object.entries(globals).forEach(([key, value]) => {
  if (typeof global[key] === 'undefined') {
    global[key] = value;
  }
});

// Ensure Clerk has access to required modules
if (!global.crypto) {
  Object.defineProperty(global, 'crypto', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: require('react-native-quick-crypto'),
  });
}