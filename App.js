/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';

/* import { Dimensions } from 'react-native' */
// const WINDOW_WIDTH = Dimensions.get('window').width;
// const WINDOW_HEIGHT = Dimensions.get('window').height;

// 동적인 값이 아니고 정적인 값인데 굳이..? 매개변수 사용.

const App = () => {
  const [language, setLanguage] = useState([
    '알림확인',
    '식단안내',
    '공지사항',
    '원생수칙',
    '이용문의',
  ]);

  const [activeBtn, setActiveBtn] = useState({
    width: 50,
    height: 25,
    borderRadius: 5,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  });

  const [defaultBtn, setDefaultBtn] = useState({
    width: 50,
    height: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  });

  const onLanguageHandler = value => {
    if (value === '한국어') {
      setLanguage(['알림확인', '식단안내', '공지사항', '원생수칙', '이용문의']);
    } else if (value === 'ENG') {
      setLanguage([
        'Notification',
        'Menu',
        'Notice',
        'Dormitory Rules',
        'Inquiries',
      ]);
    } else {
      console.log('error');
    }
  };

  // const onLanguageHandler = e => {
  //   // console.log(e._dispatchInstances.memoizedProps.children);
  //   let getLanguage = e._dispatchInstances.memoizedProps.children;
  //   if (getLanguage === 'ENG') {
  //     setLanguage([
  //       'Notification',
  //       'Menu',
  //       'Notice',
  //       'Dormitory Rules',
  //       'Inquiries',
  //     ]);
  //   } else if (getLanguage === '한국어') {
  //     setLanguage(['알림확인', '식단안내', '공지사항', '원생수칙', '이용문의']);
  //   } else {
  //     console.log('error');
  //   }
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%'}} //View를 꽉채우도록
        source={require('./assets/image/bg.jpg')} //이미지경로
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
        <View style={styles.title}>
          <Image
            style={styles.title_logo}
            source={require('./assets/image/title.png')}
          />
          {/* <View style={styles.title__name}>
            <Text style={styles.title__name_korean}>부산대학교 대학생활원</Text>
            <Text style={styles.title__name_english}>
              PUSAN NATIONAL UNINVERSITY DORMIROTY
            </Text>
          </View> */}
        </View>
        <View style={styles.topBoxs}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnNotification}>
            <Image
              style={styles.icon}
              source={require('./assets/image/notification.png')}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
              {language[0]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnMenu}>
            <Image
              style={styles.icon}
              source={require('./assets/image/menu.png')}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
              {language[1]}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomBoxs}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnNotice}>
            <Image
              style={styles.icon}
              source={require('./assets/image/notice.png')}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
              {language[2]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnRules}>
            <Image
              style={styles.icon}
              source={require('./assets/image/rules.png')}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
              {language[3]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnInquiries}>
            <Image
              style={styles.icon}
              source={require('./assets/image/inquiries.png')}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
              {language[4]}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.empty} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  language: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 10,
  },
  btnKorean: {
    width: 50,
    height: 25,
    borderRadius: 5,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  btnEnglish: {
    width: 50,
    height: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  korean: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  english: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    flex: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title_logo: {
    width: '80%',
    height: '40%',
  },
  title__name: {
    display: 'flex',
    marginTop: 10,
    alignItems: 'center',
  },
  title__name_korean: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  title__name_english: {
    fontSize: 9,
    color: 'white',
  },
  topBoxs: {
    flex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnNotification: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 165,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  btnMenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 165,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  bottomBoxs: {
    flex: 9,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnNotice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  btnRules: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  btnInquiries: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  empty: {
    flex: 5,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default App;
