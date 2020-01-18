/**
 * Partial sessions, different from sessions, are temporary objects that
 * facilitate match-making.
 *
 * These must be deleted once the session starts.
 *
 * @typedef {object} PartialSession
 *
 * @property {string} sessionPath - path to the session object document
 * @property {string} ownerId - user-id of player who opened this
 * @property {string} ownerColor - one of 'red', 'black' according to owner's request
 */

exports.create = require('./create').createPartial
