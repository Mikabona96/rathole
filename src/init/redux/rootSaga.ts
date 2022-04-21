// Core
import { all } from 'redux-saga/effects';
import { watchMessages } from '../../bus/messages/saga';

// Tools
// import { watch__entityName__ } from '../../bus/__entityName__/saga';

export function* rootSaga() {
    yield all([ watchMessages() ]);
    // yield all([ /* watch__entityName__() */ ]);
}
