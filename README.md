# Cloud functions for Surakarta

Surakarta-app uses Firebase as its backend, and these are the cloud functions that it depends on.

### Terminology

* _Session_: A document that stores everything about a Surakarta game that maybe active or finished.

* _Partial_: Temporary document that is used to specify match-making parameters. A partial is always linked to a (unstarted)
session object.

## Matchmaking process

From client-side perspective, a session can be started when two players call `joinSession` with compatible request
parameters. Under-the-hood, the process is a little more complex. Suppose there are only two want-to-be players in the universe,
then the process can be summarized as follows:

1. As there are no open _partials_, the first call to `joinSession` will cause a _partial_ to be opened. This _partial_ 
will be linked to a newly created _session_. The client is expected to listen to events on the session created, specifically
when `session.started` is set to `true`.

2. The second call to `joinSession` will find the _partial_ just created. It will be claimed by "starting"
the _session_ & deleting the _partial_.

3. By now, both players should be listening to changes on the session, and game communication can occur.
