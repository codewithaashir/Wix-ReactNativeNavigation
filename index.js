/**
 * @format
 */

// import {AppRegistry} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Login from './Login';
import Signup from './Signup';
import {name as appName} from './app.json';
import Welcome from './welcome';
import Dashboard from './Dashboard';
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Signup',()=>Signup);
Navigation.registerComponent('Welcome',()=>Welcome);
Navigation.registerComponent('Dashboard',()=>Dashboard);

Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            stack:{
                id:'AppStack',
                children:[
                    {
                        component:{
                            name:'Welcome',
                            options:{
                                bottomTab: {
                                    text: 'Tab 1',
                                    icon: require('./history.png')
                                
                                  },
                                topBar:{
                                    leftButtons: [
                                        {
                                          id: 'buttonOne',
                                          icon: require('./menu-icon.png')
                                        }
                                      ],
                                      rightButtons:[
                                          {
                                              id:'bottonTwo',
                                              icon:require('./history.png')
                                            
                                          }
                                      ],
                                      leftButtonColor:'white',
                                      rightButtonColor:'white',
                                      background:({color:'black'}),
                                      height:60,
                                    title:{
                                        color:'white',
                                        alignment:'center',
                                        fontSize:20,
                                        fontWeight:'bold',
                                        text:'Good Bye React-Navigation'
                                }
                                }
                            }
                        }
                    },
                    
                ]
            }
        }
    })
})
// AppRegistry.registerComponent(appName, () => App);
