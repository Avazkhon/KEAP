import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
import { View, Text } from 'react-native';

class App extends Component {

  handleCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 100, 100);
  }

  render() {
    return (
      <View>
        <Canvas ref={this.handleCanvas}/>
      </View>
    )
  }
}

export default App;
