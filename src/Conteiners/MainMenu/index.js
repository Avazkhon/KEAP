import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import {
  createNewGame,
} from './../../actions/index';

import Menu from './../../Widgets/Menu';

class MainMenu extends Component {
  handleClick = (fun) => {
    console.log(fun);
    if (fun === 'New game') {
      this.props.createNewGame()
    }
  }
  render () {
    const {
      mapGame,
    } = this.props;
    console.log('this', this)
    return (
      <View>
        <Menu
          menu={['New game', 'return game', 'exit']}
          onPress={this.handleClick}
        />
      </View>
    )
  }
}

const mapStateToProps = (state)=> ({
  mapGame: state.mapGame,
})

export default connect(mapStateToProps, {
  createNewGame,
})(MainMenu);
