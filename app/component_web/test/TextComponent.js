import React from 'react';
import TestAction from '../../action/TestAction';
import TestStore from '../../store/TestStore';

// 项目列表
const TextComponent = React.createClass({

    getInitialState() {
        return {

        };
    },

    changeTxt(e){
        let val = e.target.value;
        TestAction.change(val);
    },

    render(){

        return (
            <div>
                <input type="text" ref="test-input" onChange={this.changeTxt} />
            </div>
        );
    }
});

module.exports = TextComponent;
