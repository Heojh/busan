/*
  Version
    1. React Navigation 5.x
*/

/*
  TODO
    1. Language 컴포넌트 만들기
    2. props -> Redux 로 상태관리 하기
    3. 알림설정 저장하기 -> AsyncStorage
*/

import 'react-native-gesture-handler';
import * as React from 'react';
import Home from './src/screens/Home/Home';

/* import { Dimensions } from 'react-native' */
// const WINDOW_WIDTH = Dimensions.get('window').width;
// const WINDOW_HEIGHT = Dimensions.get('window').height;

// 동적인 값이 아니고 정적인 값인데 굳이..? 매개변수 사용.
// 언어에 대한 값 props -> state ** redux 사용
// component 사용 -> 언어, 타이틀 상단박스, 하단박스

export default function App() {
  return <Home />;
}
