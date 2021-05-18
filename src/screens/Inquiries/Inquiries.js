import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Linking} from 'react-native';
import data from './data';

// const data = [
//   {
//     url: 'https://dorm.pusan.ac.kr/ ',
//     category: '원생게시판 바로가기',
//     explain: '* 현재 생활원에 거주중인 원생이 이용가능한 게시판입니다.',
//   },
//   {
//     url: 'https://dorm.pusan.ac.kr/ ',
//     category: '비원생게시판 바로가기',
//     explain:
//       '* 현재 생활원에 거주중이지 않은 비원생이 이용가능한 게시판입니다.',
//   },
//   {
//     url: 'tel:051-510-7827',
//     category: '생활원 전화문의',
//     explain: '* 행정실 운영시간 : 평일 9시 ~ 18시 / 12시 ~13시 제외',
//   },
// ];

export default function InquiriesPage({navigation, route}) {
  // console.log(route.params);

  if (route.params?.language === '한국어') {
    return (
      <View style={styles.container}>
        <HowToUse />
        <Inquiry />
      </View>
    );
  } else if (route.params?.language === 'ENG') return null;
}
// return (
//   <View style={styles.container}>
//     <HowToUse />
//     <Inquiry />
//   </View>
// );
// }

const HowToUse = () => {
  return (
    <View style={styles.app}>
      <Text style={styles.app__title}>어플리케이션 안내 및 알림 수신 방법</Text>
      <Text style={styles.app__content}>
        *본 어플리케이션은 생활원 공지알림 수신을 위한 PUSH 전용 앱으로 생활원
        알림을 수신하고자 하는 모든 분이 이용가능합니다.
      </Text>
      <Text style={styles.app__content}>
        *PUSH 알림을 수신하고자 하는 이용자는 메인화면 알림확인 -{'>'} 알림설정
        -{'>'} ON 선택 바랍니다.
      </Text>
    </View>
  );
};

const Inquiry = () => {
  return (
    <View style={styles.inquiry}>
      <Text style={styles.inquiry__title}>이용방법 문의</Text>
      <Text style={styles.inquiry__content}>
        <View style={styles.categories}>
          <InquiriesCategory />
        </View>
      </Text>
    </View>
  );
};

const InquiriesCategory = () => {
  return (
    <View style={styles.categories}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.category}
        onPress={() => Linking.openURL(data[0].url)}>
        <Text style={styles.category__text}>{data[0].category}</Text>
      </TouchableOpacity>
      <Text style={styles.category__explain}>{data[0].explain}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.category}
        onPress={() => Linking.openURL(data[1].url)}>
        <Text style={styles.category__text}>{data[1].category}</Text>
      </TouchableOpacity>
      <Text style={styles.category__explain}>{data[1].explain}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.category}
        onPress={() => Linking.openURL(data[2].url)}>
        <Text style={styles.category__text}>{data[2].category}</Text>
      </TouchableOpacity>
      <Text style={styles.category__explain}>{data[2].explain}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  app: {
    flex: 3, // korean : 2/3, english : 3
    marginLeft: 20,
  },
  app__title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  app__content: {
    fontSize: 12,
    marginTop: 8,
    paddingRight: 30,
  },
  inquiry: {
    flex: 11, // korean : 7/11, english : 7
  },
  inquiry__title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  category: {
    width: 360,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#5D7EBE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  category__text: {
    color: 'white',
  },
  category__explain: {
    fontSize: 12,
    marginTop: 14,
  },
});
