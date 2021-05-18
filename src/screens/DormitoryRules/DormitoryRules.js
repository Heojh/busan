import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

export default function DormitoryPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Main Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
