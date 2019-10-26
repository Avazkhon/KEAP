import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import {
  createNewGame,
} from './../../actions/index';

import Menu from './../../Widgets/Menu';

class MainMenu extends Component {
  handleClick = (fun) => {
    if (fun === 'New game') {
      console.log('click to "New game"')
      this.props.createNewGame(fun)
    }
  }
  render () {
    const {
      newMapGame,
    } = this.props;
    return (
      <View>
        <Text>press: {newMapGame.data}</Text>
        <Menu
          menu={['New game', 'return game', 'exit']}
          onPress={this.handleClick}
        />
      </View>
    )
  }
}

const mapStateToProps = (state)=> ({
  newMapGame: state.newMapGame,
})

export default connect(mapStateToProps, {
  createNewGame,
})(MainMenu);
