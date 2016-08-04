'use strict';

require('./vendor');

var context = require.context(__dirname, true, /-spec\.js$/);
context.keys().forEach(context);
