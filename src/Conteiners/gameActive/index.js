import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import GameCanvas from '../Canvas'

// import {
// } from './../../actions';

class GameActive extends Component {

  render () {
    const {
      newMapGame
    } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.header}>
          <Link to="/" style={styles.mainMenu}>
            <Text style={styles.text}>Main Menu</Text>
          </Link>
        </View>
        <View>
          <GameCanvas />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  header: {
    height: 40,
    backgroundColor: 'green',
  },

  mainMenu: {
    width: 50,
    height: 40,
    alignSelf: 'flex-end',
    backgroundColor: '#6f4e37',
  },

  text: {
    textAlign: 'center',
    color: 'white',
  },
})

const mapStateToProps = (state)=> ({
  newMapGame: state.newMapGame,
})

export default connect(mapStateToProps, {
})(GameActive);
