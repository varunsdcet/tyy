import React, {Component} from 'react';
import {StyleSheet,TextInput,Text, View,Image, Linking,Button ,Alert,AsyncStorage,Dimensions ,TouchableOpacity,Animated,StatusBar,SafeAreaView,  Easing,AppState,ImageBackground} from 'react-native';
const window = Dimensions.get('window');
import {PermissionsAndroid} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import RNFetchBlob from "rn-fetch-blob";
import CodeInput from 'react-native-confirmation-code-input';
import Otp from './Otp';
import Backend from "./Backend.js";
var randomString = require('random-string');
import ImagePicker from 'react-native-image-picker';
import Login from './Login';
import Main from './Main';
import Following from './Following';
import StartBoradcast from './StartBoradcast';
type Props = {};
import { EventRegister } from 'react-native-event-listeners';
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const MyDarkView = () => <CountryPicker theme={DARK_THEME} />
const styles = StyleSheet.create({
    wrapper: {
    },
    AndroidSafeArea: {
        flex: 0,
        backgroundColor: "#639ced",
        paddingTop: Platform.OS === "android" ? 0 : 0
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
export default class Starting extends Component {
    constructor(props) {

        super(props)
        this.state = {
currentPage :'0',
image:'',
flag:'0',
desc:'',
checked:false,
pkmode:false,
detail:[],

        }
        // this.RotateValueHolder = new Animated.Value(0);
        //  this.notif = new NotifService(this.onRegister.bind(this), this.onNotif.bind(this));

    }

    ss = () =>{

      if (this.state.detail.authorised_broadcaster == "0"){
        var k = parseInt(this.state.detail.user_level)
        if (k < 10){
          // alert('Please complete sender level 10 to start the broadcasting')
          // return
        }
      }

var pk = "0"
   var guest = "0"
   if (this.state.checked == false){
     guest = "0"
   }else{
      guest = "1"
   }

if (this.state.pkmode == false){
  pk = "0"
}else{
  pk = "1"
}


      if (this.state.flag == "0"){
        const url = 'http://139.59.67.166/docall/api/user_live_image_and_desc_update'
        const data = new FormData();
        data.append('user_id', GLOBAL.user_id);
        data.append('flag',"0");
          data.append('short_des',this.state.desc);
data.append('guest_power',guest);
data.append('pk_mode',pk);


        // you can append anyone.

        fetch(url, {
            method: 'post',
            body: data,
            headers: {
              'Content-Type': 'multipart/form-data',
            }

        }).then((response) => response.json())
            .then((responseJson) => {


console.log(JSON.stringify(responseJson))

if (responseJson.status  == true){
  if (this.state.pkmode == true){

  EventRegister.emit('switchs', this.state.checked)
  }else{
  EventRegister.emit('switch', this.state.checked)
}
}else{
  alert('Unable to Process')
}




            }).catch((error)=>{
console.log("Api call error");
alert(error.message);
});
      }

      else{
        const url = 'http://139.59.67.166/docall/api/user_live_image_and_desc_update'
        const data = new FormData();
        data.append('user_id', GLOBAL.user_id);
        data.append('flag',"1");
        data.append('short_des',this.state.desc);
         data.append('guest_power',guest);
         data.append('pk_mode',pk);



        // you can append anyone.
        data.append('image', {
            uri: this.state.image,
            type: 'image/jpeg', // or photo.type
            name: 'image.png'
        });
        fetch(url, {
            method: 'post',
            body: data,
            headers: {
              'Content-Type': 'multipart/form-data',
            }

        }).then((response) => response.json())
            .then((responseJson) => {


console.log(JSON.stringify(responseJson))

if (responseJson.status  == true){
  EventRegister.emit('switch', this.state.checked)
}else{
  alert('Unable to Process')
}




            }).catch((error)=>{
console.log("Api call error");
alert(error.message);
});

      }


    //   EventRegister.emit('switch', 'it works!!!')
  //     GLOBAL.doctor_image = "http://139.59.76.223/diskuss/uploads/doctor/default.png"
  // GLOBAL.bookingid = "rams"
  // GLOBAL.bookingName = "varun"
  // this.props.navigation.navigate("Publisher", {
  //                       channelName: GLOBAL.bookingid ,
  //                       onCancel: (message) => {
  //                           this.setState({
  //                               visible: true,
  //                               message
  //                           });
  //                       }
  //                   })
    }
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null,
            animations: {
                setRoot: {
                    waitForRender: false
                }
            }
        }
    }


_handleStateChange = (state)=>{
this.setState({currentPage:'0'})
}
    componentDidMount() {

      const url = GLOBAL.BASE_URL + 'get_profile'
    //  this.showLoading()
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              user_id:GLOBAL.user_id,




          }),
      }).then((response) => response.json())
          .then((responseJson) => {



          //    this.hideLoading()
              if (responseJson.status == true) {

                      this.setState({image:responseJson.user_details.image})
                      GLOBAL.authorised =  responseJson.user_details.authorised_broadcaster
    this.setState({detail:responseJson.user_details})
                      if (responseJson.user_details.authorised_broadcaster == "0"){
                        var k = parseInt(responseJson.user_details.user_level)
                        if (k < 10){
                          // alert('Please complete sender level 10 to start the broadcasting')
                          // return
                        }
                      }



                          //random_unique_id
// GLOBAL.myname = responseJson.user_details.name
// GLOBAL.anotherName = responseJson.user_details.name
// GLOBAL.groupImage = responseJson.user_details.image
              } else {

              }
          })
          .catch((error) => {
              console.error(error);
          });
    //  this.props.navigation.addListener('willFocus',this._handleStateChange);

//       this.timeoutCheck = setTimeout(() => {
// this.props.navigation.navigate('Slider')
// }, 400);












    }

    picker = () => {
      const options = {
        title: 'Select and Take Profile Picture',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
        ImagePicker.launchImageLibrary(options, (response) => {
     console.log('Response = ', response);

     if (response.didCancel) {
       console.log('User cancelled image picker');
     } else if (response.error) {
       console.log('ImagePicker Error: ', response.error);
     } else if (response.customButton) {
       console.log('User tapped custom button: ', response.customButton);
     } else {

       const sources = { uri: response.uri };

    console.log(sources.uri);

        GLOBAL.profileImage = sources.uri
       // this.setState({
       //     avatarSource: source.uri,
       //   });



         // this.setState({
         //   image: source.uri,
         // });
       // You can also display the image using data:
      //  const source = { uri: 'data:image/jpeg;base64,' + response.data };

      //  console.log(source.uri)
        this.setState({image:response.uri})
   this.setState({flag:"1"})

     }
   });
       }
hi = () =>{
  //alert('hi')
}
renderTabBar = () =>{

  return (
        <View

         style={{
          position:'absolute',
          bottom:0,
          left:0,
          right:0,
          height: 90,
            paddingHorizontal: 10,
             paddingBottom: 20 ,
          flexDirection:'row',

          elevation:5,
          justifyContent: 'space-between',
        }}>




        <View style={{
                  position:'absolute',
                  bottom:  0,
                  left:0,
                  right:0,
                  height:50,
                  backgroundColor: 'white'
                }}/>

<TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({currentPage:'0'})}>
                          <Image
                                            style={{ width: 25, height: 25,resizeMode:'contain',elevation:18,marginTop:50 }}
                                            source={this.state.currentPage === '0' ? require('./home_active.png') : require('./home_inactive.png')} />

                                            </TouchableOpacity>


                                            <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({currentPage:'1'})}>
                                                                      <Image
                                                                                        style={{ width: 25, height: 25,resizeMode:'contain',elevation:18,marginTop:50 }}
                                                                                        source={this.state.currentPage === '0' ? require('./Following_inactive.png') : require('./Following_active.png')} />

                                                                                        </TouchableOpacity>

  <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.ss()}>
                                                                                        <View style={{
                                                                                                height:70,
                                                                                                width:70,
                                                                                                alignItems:'center',
                                                                                                justifyContent: 'center',

                                                                                                borderTopLeftRadius: 5,
                                                                                                borderTopRightRadius: 5,



                                                                                              }} >

                                                                                              <Image source={require('./icon.png') }
                                                                                                       style={{
                                                                                                         width: 60,
                                                                                                         height: 60,
                                                                                                         marginTop:30
                                                                                                       }}/>
                                                                                              </View>

</TouchableOpacity>



<TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({currentPage:'0'})}>
                          <Image
                                            style={{ width: 25, height: 25,resizeMode:'contain',elevation:18,marginTop:50 }}
                                            source={this.state.currentPage === '0' ? require('./Chat_inactive.png') : require('./Chat.png')} />

                                            </TouchableOpacity>

                                            <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({currentPage:'0'})}>
                                                                      <Image
                                                                                        style={{ width: 25, height: 25,resizeMode:'contain',elevation:18,marginTop:50 }}
                                                                                        source={this.state.currentPage === '0' ? require('./Profile_inactive.png') : require('./Profile_active.png')} />

                                                                                        </TouchableOpacity>








                          </View>



)

}

beauty = ()=>{
  EventRegister.emit('beauty', 'it works!!!')
}

pageSwitcher(){
  switch(this.state.currentPage){
    case '0':
      return ( <Main navigation={this.props.navigation} />)
      break;

    case '1':
      return ( <Following navigation={this.props.navigation} />)
      break;

      case '2':
        return ( <StartBoradcast navigation={this.props.navigation} />)
        break;

    default:
      return ( <Login navigation={this.props.navigation} />)
      break;
  }
}
    render() {

        return (
          <View style = {{flex:1,width:'100%',height:'100%',backgroundColor:'transparent'}}>

<View style = {{flexDirection:'row',justifyContent:'space-between'}}>
<View style = {{flexDirection:'row'}}>
<TouchableOpacity onPress={() => this.handleCancel()}>
<Image
           style={{
               width: 20,
               height: 20,
               marginLeft:10,
               marginTop:20,
               resizeMode:'contain',



           }}
           source={require('./Animation/location.png')}
       />
       </TouchableOpacity>
       <Text style = {{color:'white',fontFamily:GLOBAL.bold,fontSize:10,marginTop:23,marginLeft:4}}>
{GLOBAL.city}

       </Text>
       </View>
<View style = {{flexDirection:'row',marginRight:30}}>
<View style = {{flexDirection:'row'}}>
<TouchableOpacity onPress={() => EventRegister.emit('switchCamera', 'it works!!!')}>
<Image
           style={{
               width: 20,
               height: 20,
               marginLeft:10,
               marginTop:20,
               resizeMode:'contain',



           }}
           source={require('./Animation/./reload.png')}
       />
 </TouchableOpacity>

</View>

<TouchableOpacity onPress={() => EventRegister.emit('cancels', 'it works!!!')}>
<Image
           style={{
               width: 20,
               height: 20,
               marginLeft:20,
               marginTop:20,
               resizeMode:'contain',



           }}
            source={require('./Animation/./close.png')}
       />
       </TouchableOpacity>

</View>


</View>


<View style = {{marginTop:20}}>


<View style = {{margin:10,width:window.width - 20 ,borderRadius:12,height:160,backgroundColor:'rgba(0,0,0,0.2)'}}>
<View  style = {{width:100,height:100,borderWidth:1,borderColor:'white',borderRadius:5,margin:5}}>
<TouchableOpacity onPress={() => this.picker()}>
<Image
           style={{
               width: 100,
               height: 100,
               marginLeft:-1,
               marginTop:-1,
               resizeMode:'cover',




           }}
           source={{uri:this.state.image}}
       />
       </TouchableOpacity>




</View>
<View style = {{marginLeft:100,marginTop:-90}}>
<TextInput
      placeholder="Welcome"

      style={{
        color:'white',
        fontSize: 22,
        fontFamily:GLOBAL.bold,
        marginLeft:6,
        width:window.width - 130
      }}

      placeholderTextColor= 'white'
      onChangeText={(text) => this.setState({desc:text})}
      />




</View>
<View style = {{width:window.width-20,marginTop:-6,backgroundColor:'white',height:1,marginTop:37}}>
</View>

<View style = {{flexDirection:'row',justifyContent:'space-between',margin:10,marginTop:2}}>
 {this.state.pkmode == false && (
   <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({checked:!this.state.checked})}>
   <View style = {{flexDirection:'row'}}>

   {this.state.checked == false && (
     <Image
                style={{
                    width: 20,
                    height: 20,
                    marginTop:10,

                    resizeMode:'contain',



                }}
                 source={require('./Animation/./circle.png')}
            />
   )}

   {this.state.checked == true && (
     <Image
                style={{
                    width: 20,
                    height: 20,
                    marginTop:10,

                    resizeMode:'contain',



                }}
                 source={require('./Animation/./radio-button-checked.png')}
            />
   )}

          <Text style = {{color:'white',fontFamily:GLOBAL.medium,fontSize:14,marginTop:12,marginLeft:4}}>
         A/V Guest Call

          </Text>

   </View>
   </TouchableOpacity>
 )}


<View style  = {{flexDirection:'row'}}>



</View>

</View>
</View>



</View>


<View style = {{marginTop:window.height - 410}}>
<View style = {{flexDirection:'row',justifyContent:'space-between',margin:10,width:window.width - 20}}>
<View style = {{marginLeft:20}}>
<Image
           style={{
               width: 30,
               height: 30,
               marginTop:10,
               marginLeft:0,

               resizeMode:'contain',



           }}
            source={require('./live.png')}
       />
       <Text
         style={{
           fontSize: 12,

           fontFamily: GLOBAL.regular,
           color: "white",

           marginTop:5,
           alignSelf:'center'
         }}
       >
        Live
       </Text>

</View>
<View style = {{marginLeft:20}}>
<Image
           style={{
               width: 30,
               height: 30,
               marginTop:10,
               marginLeft:10,

               resizeMode:'contain',



           }}
            source={require('./audios.png')}
       />
       <Text
         style={{
           fontSize: 12,

           fontFamily: GLOBAL.regular,
           color: "white",

           marginTop:5,
           alignSelf:'center'
         }}
       >
        Audio
       </Text>

</View>
<View style = {{marginLeft:20}}>
<Image
           style={{
               width: 30,
               height: 30,
               marginTop:10,
               marginLeft:10,

               resizeMode:'contain',



           }}
            source={require('./onevideo.png')}
       />
       <Text
         style={{
           fontSize: 12,

           fontFamily: GLOBAL.regular,
           color: "white",

           marginTop:5,
           alignSelf:'center'
         }}
       >
        1v1 Video
       </Text>

</View>
<View style = {{marginLeft:20}}>
<Image
           style={{
               width: 30,
               height: 30,
               marginTop:10,
               marginLeft:10,

               resizeMode:'contain',



           }}
            source={require('./live_hose.png')}
       />
       <Text
         style={{
           fontSize: 12,

           fontFamily: GLOBAL.regular,
           color: "white",

           marginTop:5,
           alignSelf:'center'
         }}
       >
        Live House
       </Text>

</View>
<View style = {{marginLeft:20}}>
<Image
           style={{
               width: 30,
               height: 30,
               marginTop:10,
               marginLeft:10,

               resizeMode:'contain',



           }}
            source={require('./live_game.png')}
       />
       <Text
         style={{
           fontSize: 12,

           fontFamily: GLOBAL.regular,
           color: "white",

           marginTop:5,
           alignSelf:'center'
         }}
       >
        Live Game
       </Text>

</View>
{/*
<TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({pkmode:!this.state.pkmode})}>
<View style = {{}}>
{this.state.pkmode == false && (
<Image
          style={{
              width: 25,
              height: 25,
              marginTop:10,
              marginLeft:10,

              resizeMode:'contain',



          }}
           source={require('./Animation/./pk.png')}
      />
)}

{this.state.pkmode == true && (
<Image
          style={{
              width: 25,
              height: 25,
              marginTop:10,
              marginLeft:10,

              resizeMode:'contain',



          }}
           source={require('./pk.png')}
      />
)}

       <Text
         style={{
           fontSize: 12,

           fontFamily: GLOBAL.regular,
           color: "white",

           marginTop:5,
           alignSelf:'center'
         }}
       >
         PK Mode
       </Text>

</View>
</TouchableOpacity>
 */}
</View>
<View style = {{flexDirection:'row'}}>
<TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.beauty()}>
<View style = {{marginLeft:20}}>
<Image
           style={{
               width: 20,
               height: 20,
               marginTop:10,
               marginLeft:10,

               resizeMode:'contain',



           }}
            source={require('./Animation/./beauty.png')}
       />
       <Text
         style={{
           fontSize: 12,

           fontFamily: GLOBAL.regular,
           color: "white",

           marginTop:5,
           alignSelf:'center'
         }}
       >
         Beauty
       </Text>

</View>
</TouchableOpacity>

<TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.ss()}>
<LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#73005C", "#F00B51"]}
      style={{
        height: 40,
        width: window.width - 100,
        borderRadius:22,
        overflow: "hidden",
        justifyContent: "center",
        borderRadius:32,
        marginLeft:20,
        marginTop:12




      }}
    >

    <Text
      style={{
        fontSize: 19,

        fontFamily: GLOBAL.regular,
        color: "white",

        marginTop:1,
        alignSelf:'center'
      }}
    >
      GO LIVE
    </Text>

    </LinearGradient>
    </TouchableOpacity>




    </View>

    </View>
                  </View>


        );
    }
}
