import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';


class Loyout extends Component {

  render () {
    console.log(this)
    return (
      <View>
        <Text>Loyout</Text>
      </View>
    )
  }
}

const mapStateToProps = (state)=> ({
  newMapGame: state.newMapGame,
})

export default connect(mapStateToProps, {
})(Loyout);
