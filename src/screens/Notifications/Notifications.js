import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Switch} from 'react-native';

export default function NotificationsPage({navigation}) {
  return (
    <View style={styles.container}>
      <Settings />
      <List />
    </View>
  );
}

// *** 알림설정
const Settings = () => {
  const [state, setState] = useState(true);

  return (
    <View style={styles.settings}>
      <Text style={styles.settings_text}>알림설정</Text>
      <Switch
        trackColor={{false: '#E5E5E5', true: '#D0E6E4'}}
        thumbColor={state ? '#7DC7C0' : '#575A5A'} //#7DC7C0
        value={state}
        onValueChange={newState => setState(newState)}
      />
    </View>
  );
};

// *** 알림내역
const List = () => {
  return (
    <View style={styles.list}>
      <View style={styles.list__history}>
        <Text style={styles.history__text}>알림내역</Text>
      </View>
      <View style={styles.list__content}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settings: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settings_text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  list: {
    flex: 13,
  },
  list__history: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  history__text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  list__content: {
    flex: 13,
    backgroundColor: 'grey',
  },
});
