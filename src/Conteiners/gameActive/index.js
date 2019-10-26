import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import Layout from '../Layout'

// import {
// } from './../../actions';

class GameActive extends Component {

  render () {
    const {
      newMapGame
    } = this.props;
    return (
      <View>
        <Link to="/" ><Text>Main Menu</Text></Link>
        <Text>Game</Text>
      </View>
    )
  }
}

const mapStateToProps = (state)=> ({
  newMapGame: state.newMapGame,
})

export default connect(mapStateToProps, {
})(GameActive);
