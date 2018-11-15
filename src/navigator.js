import {
    createStackNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation';
import RepoList from './screens/RepoList';
import RepoDetail from './screens/RepoDetail';
import Profile from './screens/Profile';

const Tabs = createMaterialTopTabNavigator({
    RepoList: RepoList,
    Profile: Profile
});

const Stack = createStackNavigator({
    Home: Tabs,
    Detail: RepoDetail
});

export default Stack;
