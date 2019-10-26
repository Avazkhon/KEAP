import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

class MenuMenu extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state {
  //
  //   }
  // }

  render () {
    const {
      menu,
    } = this.props;
    return (
      <View>
        {
          menu.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                style={styles.link}
              >
                <Text
                  title={item.name}
                  style={styles.button}
                >
                  {item.name}
                </Text>
              </Link>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    paddingTop: 5,
  },
  link: {
    paddingTop: 2,
  }
});

export default MenuMenu;
