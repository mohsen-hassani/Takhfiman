import {createAppContainer ,createStackNavigator} from 'react-navigation';
import {Home, Category, Detail, SearchResult} from '../screens/index';


const appStackNabigation = createStackNavigator({
    Home,
    Category,
    Detail,
    SearchResult
},{
    initialRouteName: 'Home',
    headerMode: 'none'
});

const StackNavigation = createAppContainer(appStackNabigation);

export default StackNavigation;