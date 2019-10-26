import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import {
  createNewGame,
} from './../../actions/index';

import Menu from './Menu';

const menu = [
  {id: 1, name: 'Create game', link: '/gameActive'},
  {id: 2, name: 'Return game', link: '/return-game'},
  {id: 3, name: 'Exit', link: '/exit'}
]

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
        <Menu
          menu={menu}
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
