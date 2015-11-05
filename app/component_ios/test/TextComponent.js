'use strict';

import React, {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import TestAction from '../../action/TestAction';
import TestStore from '../../store/TestStore';

const TextComponent = React.createClass({

    changeTxt(val){
        TestAction.change(val);
    },

    render(){

        return (
            <View>
                <TextInput
                style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.changeTxt({text})}
                value={0} />
            </View>
        );
    }

});

export default TextComponent;