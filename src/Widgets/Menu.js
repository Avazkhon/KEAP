import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class MainMenu extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state {
  //
  //   }
  // }

  render () {
    const {
      menu,
      onPress,
    } = this.props;
    return (
      <View>
        {
          menu.map((item) => {
            return (
              <Button
                key={item}
                style={styles.button}
                onPress={() => onPress(item)}
                title={item}
              />
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'powderblue',
  },
});

export default MainMenu;
