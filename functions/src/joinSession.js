const functions = require('firebase-functions');
const admin = require('firebase-admin');

const SessionObject = require('./session-object');
const PartialObject = require('./partial-object');

/**
 * @typedef {object} JoinSessionRequest
 *
 * @property {string} userId - id of user
 * @property {string} userColor - color the pebbles the user wants to play
 * @property {string} sessionClass - class of the session, should be 'default'
 */

/**
 * Request to join an arbitrary game session, which will have two players once
 * finalized.
 *
 * @param {JoinSessionRequest} userRequest - parameters of request
 */
exports.joinSession = userRequest => {
    const {
        userId,
        userColor,
        sessionClass
    } = userRequest;

    if (typeof userId !== 'string' ||
            (userColor !== 'red' && userColor !== 'black' && userColor !== 'any') ||
            (sessionClass !== 'default')) {
        return null
    }

    const db = admin.firestore();
    const partialSessionsRef = db.collection('/partialSessions/');

    return db.runTransaction(transaction => {
        transaction.get(
            partialSessionsRef
                .limit(1)
        )
        .then(result => {
            let sessionPath
            let partialPath

            if (result.size < 1) {
                // There is no available partial session!
                const session = SessionObject.create();
                const sessionRef = db.collection('/gameSessions/').doc();

                transaction.set(sessionRef, session);

                const partial = PartialObject.create();
                const partialRef = partialSessionsRef.doc();

                transaction.set(partialRef, partial);

                sessionPath = sessionRef.path;
                partialPath = partialRef.path;
            } else {
                // TODO: Finish this
            }

            return {
                sessionPath,
                partialPath
            }
        })
        .catch()
    })
}
