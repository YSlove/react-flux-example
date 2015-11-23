'use strict';

import React, {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import TestAction from '../../action/TestAction';
import TestStore from '../../store/TestStore';

let styles = {
    testInput: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'
    }
}

const TextComponent = React.createClass({

    changeTxt(val){
        TestAction.change(val);
    },

    render(){

        return (
            <View>
                <TextInput
                style={styles.testInput}
                onChangeText={(text) => this.changeTxt({text})}
                value={0} />
            </View>
        );
    }

});

export default TextComponent;