import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    setHeight: 60,
    paddingTop: 40,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: .2
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
