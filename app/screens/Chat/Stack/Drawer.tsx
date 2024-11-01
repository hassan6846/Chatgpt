import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

//chat
import Chat from '../Chat';
import AllChats from './AllChats';

const DrawerStack=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Chat' component={Chat}/>
            <Drawer.Screen name='History'component={AllChats}/>
        </Drawer.Navigator>
    )
}
export default DrawerStack