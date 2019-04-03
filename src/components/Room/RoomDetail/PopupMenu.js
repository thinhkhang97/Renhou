import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class PopupMenu extends Component {
  _menu = null;

  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
  render() {
    return (
      <View style={styles.container}>
        <Menu
          ref={ref => this._menu = ref}
          button={<Text onPress={this.showMenu}><Icon name='ellipsis-v' size={20} color='white' /></Text>}
        >
          <MenuItem onPress={this.hideMenu}>Chi tiết phòng</MenuItem>
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
});
