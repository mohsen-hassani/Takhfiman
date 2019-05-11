import {createAppContainer ,createStackNavigator} from 'react-navigation';
import {Home, Category, Detail} from '../screens/index';


const appStackNabigation = createStackNavigator({
    Home,
    Category,
    Detail
},{
    initialRouteName: 'Home'
});

const StackNavigation = createAppContainer(appStackNabigation);

export default StackNavigation;