/*
  Version
    1. React Navigation 5.x
*/

import 'react-native-gesture-handler';
import * as React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Notifications from '../Notifications/Notifications';
import Menu from '../Menu/Menu';
import Notice from '../Notice/Notice';
import DormitoryRules from '../DormitoryRules/DormitoryRules';
import Inquiries from '../Inquiries/Inquiries';
import style from './style';

function HomeCategory({navigation}) {
  const [language, setLanguage] = useState([
    '알림확인',
    '식단안내',
    '공지사항',
    '원생수칙',
    '이용문의',
    '한국어',
  ]);

  const onLanguageHandler = value => {
    // console.log(value);
    if (value === '한국어') {
      setLanguage([
        '알림확인',
        '식단안내',
        '공지사항',
        '원생수칙',
        '이용문의',
        '한국어',
      ]);
    } else if (value === 'ENG') {
      setLanguage([
        'Notifications',
        'Menu',
        'Notice',
        'Dormitory Rules',
        'Inquiries',
        'ENG',
      ]);
    } else {
      console.log('error');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%'}} //View를 꽉채우도록
        source={require('../../image/bg.jpg')} //이미지경로
        resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택
      >
        <View style={styles.language}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnKorean}
            id={'한국어'}
            onPress={() => onLanguageHandler('한국어')}>
            <Text style={styles.korean}>한국어</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnEnglish}
            onPress={() => onLanguageHandler('ENG')}>
            <Text style={styles.english}>ENG</Text>
          </TouchableOpacity>
        </View>
        <Title />
        <TopBox language={language} navigation={navigation} />
        <BottomBox language={language} navigation={navigation} />
        <View style={styles.empty} />
      </ImageBackground>
    </View>
  );
}

const Title = () => {
  return (
    <View style={styles.title}>
      <Image
        style={styles.title_logo}
        source={require('../../image/title.png')}
      />
    </View>
  );
};

const TopBox = props => {
  // console.log(props.navigation);
  return (
    <View style={styles.topBoxs}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnNotification}
        onPress={() => props.navigation.navigate('Notifications')}>
        <Image
          style={styles.icon}
          source={require('../../image/notification.png')}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
          {props.language[0]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnMenu}
        onPress={() =>
          Linking.openURL(
            'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403',
          )
        }>
        <Image style={styles.icon} source={require('../../image/menu.png')} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
          {props.language[1]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const BottomBox = props => {
  return (
    <View style={styles.bottomBoxs}>
      <TouchableOpacity activeOpacity={0.8} style={styles.btnNotice}>
        <Image style={styles.icon} source={require('../../image/notice.png')} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
          {props.language[2]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnRules}
        onPress={() =>
          Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401')
        }>
        <Image style={styles.icon} source={require('../../image/rules.png')} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
          {props.language[3]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnInquiries}
        onPress={
          // () => console.log(props.language)
          () =>
            props.navigation.navigate({
              name: 'Inquiries',
              params: {language: props.language[5]},
            })
        }>
        <Image
          style={styles.icon}
          source={require('../../image/inquiries.png')}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
          {props.language[4]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// const BottomBox = props => {
//   return (
//     <View style={styles.bottomBoxs}>
//       <TouchableOpacity activeOpacity={0.8} style={styles.btnNotice}>
//         <Image style={styles.icon} source={require('../../image/notice.png')} />
//         <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
//           {props.language[2]}
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity activeOpacity={0.8} style={styles.btnRules}>
//         <Image style={styles.icon} source={require('../../image/rules.png')} />
//         <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
//           {props.language[3]}
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         activeOpacity={0.8}
//         style={styles.btnInquiries}
//         onPress={() => props.navigation.navigate('Inquiries')}>
//         <Image
//           style={styles.icon}
//           source={require('../../image/inquiries.png')}
//         />
//         <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
//           {props.language[4]}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const styles = StyleSheet.create(style);

const Stack = createStackNavigator();
const headerStyles = {height: 50, borderBottomWidth: 1, shadowColor: 'black'};

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeCategory} // component={() => <HomeScreen />}
          options={{title: 'Overview', headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: '알림확인',
            headerStyle: headerStyles,
          }}
        />
        {/* <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: '식단안내',
            headerStyle: headerStyles,
          }}
        /> */}
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{
            title: '공지사항',
            headerStyle: headerStyles,
          }}
        />
        {/* <Stack.Screen
          name="DormitoryRules"
          component={DormitoryRules}
          options={{
            title: '원생수칙',
            headerStyle: headerStyles,
          }}
        /> */}
        <Stack.Screen
          name="Inquiries"
          component={Inquiries}
          options={{
            title: '이용문의',
            headerStyle: headerStyles,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
