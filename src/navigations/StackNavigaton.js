import {createAppContainer ,createStackNavigation} from 'react-navigation';
import {Home, Category, Detail} from '../screens/index';


const appStackNabigation = createStackNavigation({
    Home,
    Category,
    Detail
},{
    initialRouteName: 'Home'
});

const StackNavigation = createAppContainer(appStackNabigation);

export default StackNavigation;