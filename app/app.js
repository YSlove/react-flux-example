import React from 'react';
import ReactDOM from 'react-dom';

import ChangeTxt from './component_web/test/TextComponent';
import EventStore from './store/EventStore';
import TestConstants from './constant/TestConstant';

const App = React.createClass({

    getInitialState(){
        return {
            txt: 'Hello World!'
        };
    },

    componentWillMount(){

    },

    componentDidMount() {
        EventStore.addChangeListener(TestConstants.CHANGE_TEXT, this._onChangeInput);
    },

    componentWillUnmount(){
        EventStore.removeChangeListener(TestConstants.CHANGE_TEXT, this._onChangeInput);
    },

    _onChangeInput(data){
        let val = data.data || 'Hello World!';
        if(val){
            this.setState({
                txt: val
            })
        }
    },

    render () {
        let txt = this.state.txt;
        return (
            <div>
            {txt}
            <ChangeTxt />
            </div>
            );
    }
});

ReactDOM.render(
  <App />,
  document.getElementById('test-dom')
);