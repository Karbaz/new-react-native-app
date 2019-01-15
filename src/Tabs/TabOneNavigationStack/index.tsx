import {
    createStackNavigator,
  } from 'react-navigation';
  
  
  import Screen1 from "../../Containers/Screen1/Index"
  import Screen2 from "../../Containers/Screen2/Index"
  import Screen3 from "../../Containers/Screen3/Index"
  import Screen4 from "../../Containers/Screen4/Index"
  import Screen5 from "../../Containers/Screen5/Index"
//   import Counter from '../../Containers/Counter/Index'
  
  
  export const tabOneStackNavigator = createStackNavigator({
    Screen1:Screen1,
    Screen2:Screen2,
    Screen3:Screen3,
    Screen4:Screen4,
    Screen5:Screen5,
    // Counter:Counter
  },{
    initialRouteName : 'Screen1'
  })