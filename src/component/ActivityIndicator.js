import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const AnimatingLoading = ({isLoading}) => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color="#00ff00" animating={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 300,
  },
});

export default AnimatingLoading;
