import TestDispatcher from '../dispatcher/TestDispatcher';
import assign from 'object-assign';

import EventStore from './EventStore';
import TestConstant from '../constant/TestConstant';

const TestStore = {
    changeText(data){
        EventStore.emitChange(TestConstant.CHANGE_TEXT, data);
    }
};

TestDispatcher.register((action) => {

    switch(action.type){
        case TestConstant.CHANGE_TEXT:
            TestStore.changeText(action.payload);
            break;
    }
});


export default TestStore;