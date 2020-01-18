/**
 * Sessions store everything about an active/played Surakarta game.
 * @typedef {object} SessionObject
 *
 * @property {Array<string>} historyTrack - list of game states that occurred, other than
 *  the initial game state.
 * @property {Array<string>} moveTrack - list of moves that occured
 * @property {boolean} started - whether this game started
 * @property {boolean} ended - whether this game ended
 * @property {string} redPlayer - user-id of red player
 * @property {string} blackPlayer - user-id of black player
 */

exports.create = require('./create').createSessionObject
