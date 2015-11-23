import React from 'react';
import TestAction from '../../action/TestAction';
import TestStore from '../../store/TestStore';

let styles = {
    testInput: {
            padding: '10px',
            border: '1px solid',
            width: '50%',
            textAlign: 'center',
            margin: '20px',
            fontSize: '0.6em'
        }
    }

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
                <input style={styles.testInput} type="text" ref="test-input" onChange={this.changeTxt} />
            </div>
        );
    }
});

module.exports = TextComponent;
