const functions = require('firebase-functions');
const admin = require('firebase-admin');
const modules = require('./src');

admin.initializeApp();

exports.joinSession = functions.https.onCall(modules.joinSession);
