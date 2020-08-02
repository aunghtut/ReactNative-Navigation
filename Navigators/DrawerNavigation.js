import * as React from "react"
import {View,StyleSheet,ScrollView,Text} from "react-native"
import { NavigationContainer }  from '@react-navigation/native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer'
import Home from '../Screens/Home'
import Contact from "../Screens/Contact"
import { color } from "react-native-reanimated"

function CustomDrawerContent(props) {
    return (
        <ScrollView style = {styles.container}>
            <View style={styles.drawerHeader}>
                <View>
                    <Text style={styles.drawerHeaderText}>はじめての日本語能力試験</Text>
                    <Text style={styles.drawerHeaderText_tengo}>N1 単語</Text>
                    <Text style={styles.drawerHeaderText_tengo}>３０００</Text>

                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
                 <DrawerItem
                  label="Close Drawer"
                  onPress={() => props.navigation.closeDrawer()}
                 >

                 </DrawerItem>
            </DrawerContentScrollView>
            
        </ScrollView>
    );
}
const Drawer = createDrawerNavigator();
function MyDrawer(){
    return(
    <Drawer.Navigator backBehavior='history' drawerContent={props => <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
        <Drawer.Screen name="Contact" component={Contact}></Drawer.Screen>
    </Drawer.Navigator>
    );
}
export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
      );
    }

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  drawerHeader:{
    backgroundColor:'#03cafc',
    height:150,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  drawerHeaderText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    color:'red',
    marginTop:15
  },
  drawerHeaderText_tengo:{
    color:'white',
    fontSize:35,
    fontWeight:'bold',
    textAlign:'center',
    color:'black'
  }
})
