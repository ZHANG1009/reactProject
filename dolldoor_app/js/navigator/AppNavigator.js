import {createAppContainer,
  createStackNavigator,createMaterialTopTabNavigator,createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';

const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen: WelcomePage, // 当前屏幕显示页
        navigationOptions:{
          header: null, //讲header参数设置为null，可以隐藏欢迎页的StackNavigator的导航条
        }
    }
});
const MainNavigator = createStackNavigator({
  HomePage:{
      screen: HomePage, // 当前屏幕显示页
      navigationOptions:{
        header: null, //将header参数设置为null，可以隐藏欢迎页的StackNavigator的导航条
      }
  },
// 将HomePage链接到详情页DetailPage
  DetailPage:{
    screen: DetailPage, // 当前屏幕显示页
    navigationOptions:{
      header: null, //将header参数设置为null，可以隐藏StackNavigator的导航条
    }
}
});
export default createAppContainer(createSwitchNavigator({ //第一个参数用来设置路由
    Init: InitNavigator,
    Main: MainNavigator,
  },{
    defaultNavigationOptions: {
      header: null, //不显示SwitchNavigatior的导航条
    }
  }
));