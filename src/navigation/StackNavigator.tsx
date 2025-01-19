import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import { RootStackParamList } from './navigation';
import BlogDetails from '../screens/BlogDetails/BlogDetails';


const Stack = createNativeStackNavigator<RootStackParamList>();



const StackNavigator = () =>{
    return <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            // headerStyle:{},
            // headerTintColor : "#fff",
            // headerTitleStyle: {},
            headerTitleStyle: { fontWeight: 'bold', fontSize: 18 }
        }}
    >
        <Stack.Screen name='Home' component={Home} options={{title:"Home",headerShown:true}} />
        <Stack.Screen name='BlogDetail' component={BlogDetails} options={{title:"Blog Detail",headerShown:true}} />
        <Stack.Screen name='About' component={About} options={{title:"About",headerShown:true}} />
        
    </Stack.Navigator>
}

export default StackNavigator;