
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import FavoritePage from './FavoritePage';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class HomePage extends Component<Props> {
  _tabNavigator() {
    return createAppContainer(createBottomTabNavigator({
      PopularPage: {
        screen: PopularPage,
        navigationOptions: {
          tabBarlabel: '最热',
          tabBarIcon: ({tintColor, focused}) => (
            <MaterialIcons
                name={'whatshot'}
                size={26}
                style={{color: tintColor}}
            />
          )
        }
      },
      FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
          tabBarlabel: '收藏',
          tabBarIcon: ({tintColor, focused}) => (
            <MaterialIcons
                name={'favorite'}
                size={26}
                style={{color: tintColor}}
            />
          )
        }
      },
      TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
          tabBarlabel: '趋势',
          tabBarIcon: ({tintColor, focused}) => (
            <Ionicons
                name={'trending'}
                size={26}
                style={{color: tintColor}}
            />
          )
        }
      },
      MyPage: {
        screen: MyPage,
        navigationOptions: {
          tabBarlabel: '我的',
          tabBarIcon: ({tintColor, focused}) => (
            <Entypo
                name={'user'}
                size={26}
                style={{color: tintColor}}
            />
          )
        }
      }
    }));

  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    const Tab = this._tabNavigator()
    return <Tab/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
