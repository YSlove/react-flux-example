import TestDispatcher from '../dispatcher/TestDispatcher';
import TestConstant from '../constant/TestConstant';

const TestAction = {
	change(data){
		TestDispatcher.dispatch({
			type: TestConstant.CHANGE_TEXT,
			payload: { data: data }
		});
	},
}

export default TestAction;