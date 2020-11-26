import React, {Component, PureComponent} from 'react';
import {StyleSheet,TextInput,Text, View,Image,Keyboard,Platform,  NativeModules,
    NativeEventEmitter, DeviceEventEmitter, Linking,TouchableWithoutFeedback,Button ,Alert,AsyncStorage,Dimensions ,TouchableOpacity,Animated,StatusBar,SafeAreaView,FlatList,  Easing,AppState,ImageBackground,Share} from 'react-native';
const window = Dimensions.get('window');
import {PermissionsAndroid} from 'react-native';
import SocketIOClient from 'socket.io-client';
import LinearGradient from "react-native-linear-gradient";
import CodeInput from 'react-native-confirmation-code-input';
import FloatingHearts from './FloatingHearts.js';
import SoundPlayer from 'react-native-sound-player';
import { EventRegister } from 'react-native-event-listeners';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
type Props = {};
import RNFetchBlob from 'rn-fetch-blob'
import LottieView from 'lottie-react-native';
import paytm from '@philly25/react-native-paytm';
const showAnimation = "slideInUp"
const hideAnimation = "slideOutDown"
import RBSheet from "react-native-raw-bottom-sheet";
var randomColor = require('randomcolor')
import { captureScreen } from "react-native-view-shot";
import Backend from "./Backend.js";
import ActionSheet from 'react-native-actionsheet'
import Icon from 'react-native-vector-icons/FontAwesome';
var validator = require("email-validator");
var randomString = require('random-string');
const GLOBAL = require('./Global');
import Chat from './Chat.js';
var option =  ['1', '9', '99','499',"999","Cancel"];
import Loader from './Loader.js';
import io from "socket.io-client";

const paytmConfig = {
    MID: 'vKCAfR85123456281721',
    WEBSITE: 'APPSTAGING',
    CHANNEL_ID: 'WAP',
    INDUSTRY_TYPE_ID: 'Retail',
    CALLBACK_URL: 'https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID='
};
const BtnMute = () => require('./mute.png')
const BtnSwitchCamera = () => require('./flip.png')
const IconMuted = () => require('./mute.png')
const Mu= () => require('./music-and-multimedia.png')
import * as Animatable from 'react-native-animatable';
const gifts = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'];
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
    tgifts:{
     color: 'white',
     fontSize: 16,
     paddingLeft:4
   },

   tgifts_gray:{
     color: '#F5F5F5',
     fontSize: 16,
     paddingLeft:4
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
    btgifts:{
    padding:6,
    flexDirection:'row',
    alignItems:'center'
  },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})




class OperateButton extends PureComponent {
    render() {
        const {onPress, source, style, imgStyle = {width: 30, height: 30,marginTop:20}} = this.props
        return (
            <TouchableOpacity
                style={style}
                onPress={onPress}
                activeOpacity={.7}
            >
                <Image
                    style={imgStyle}
                    source={source}
                />
            </TouchableOpacity>
        )
    }
}
export default class OverlayView extends Component {

    constructor(props) {

        super(props)
        this.state = {
            writer:false,
            imageURI:'',
            currentPage:'0',
            isMute:false,
            jsonObject:'',
            totalcoincredit:'0',
            giftname:'',
            giftPrice:'0',
            gifurl:'',
            entryurl:'',
            giftPrices:'0',
            anotherProfile:'',
            another:'',
            giftid:'',
            wallet:'',
            quantity:'1',
            is_follow :false,
            senderLevelnumber:'0',
            senderLevelcolor:'red',
            streamer_recieve_user_level_image:'',
            isshare:false,
            isfollow:false,
            followlist:[],

            isopen:true,
            giftquantity:'',
            mute:false,
            todaystar:'0',
            sendurl:'',
            entryeffect:false,
            vipeffect :false,


email:'',

loading : false,
messages:[],
invitationLists :[],
shown:false,
popvisible:false,
popvisibles:false,
popvisibless:false,
detail:[],
gift :[],
regular:[],
zoadic:[],
royal:[],
backpack:[],
giftreceived:[],
urls:'',
img:'',
modal:false,
invitation:false,
invitationList :[],
credit:'',
userimage:'',
giftsf:'',
     count:0,
     gifts:false
        }
        // this.RotateValueHolder = new Animated.Value(0);
        //  this.notif = new NotifService(this.onRegister.bind(this), this.onNotif.bind(this));

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
    dismissgifts=()=>{
      this.setState({gifts:false});
    }
showLoading = () =>{
  this.setState({loading:true})
}



_fancyShareMessage=()=>{
  this.setState({isshare:false})

var commonHtml = `${GLOBAL.share_url}Please download app from https://play.google.com/store/apps/details?id=com.diskuss`;



    var a = commonHtml

    Share.share({
            message:a ,url:''
        },{
            tintColor:'green',
            dialogTitle:'Share this news via....'
        }
    ).then(this._showResult);
}

gifts=()=>{

    //toggle gifts modal
  //  this.setState({gifts:true});
  }
hideLoading = () =>{
  this.setState({loading:false})
}
showActionSheet = () => {
   this.ActionSheet.show()
 }
captureScreenFunction = () =>{
captureScreen({
  format: "jpg",
  quality: 0.8
}).then(
  uri =>{ console.log("Image saved to", uri),
   this.setState({ imageURI : uri })
   this.setState({popvisibles:true})
  error => console.error("Oops, snapshot failed", error)
}
);
}
// captureScreenFunction=()=>{
//   this.refs.viewShot.capture().then(uri => {
//     this.setState({ imageURI : uri })
//      console.log("do something with ", uri);
//      this.setState({popvisibles:true})
//    })
//
//   // captureScreen({
//   //   format: "jpg",
//   //   quality: 0.8
//   // })
//   // .then(
//   //   uri => this.setState({ imageURI : uri }),
//   //   error => console.error("Oops, Something Went Wrong", error)
//   // );
//
// }

onPayTmResponse = (resp) => {
      const {STATUS, status, response} = resp;
//alert(JSON.stringify(resp))
      if (Platform.OS === 'android') {
          this.setState({out:resp})

          const jsonResponse =resp;
          const {STATUS} = jsonResponse;
          if (jsonResponse.STATUS == 'TXN_SUCCESS') {
              console.log(jsonResponse)

           //   this.myPayments(jsonResponse.TXNAMOUNT,'SUCCESS',jsonResponse.TXNID)
          } else if (jsonResponse.STATUS  == 'PENDING'){
              alert(JSON.stringify(jsonResponse))
             // this.myPayments(jsonResponse.TXNAMOUNT,'PENDING',jsonResponse.TXNID)
          }
          else if (jsonResponse.STATUS  == 'TXN_FAILURE'){
            //  alert(JSON.stringify(jsonResponse))
            //  this.myPayments(jsonResponse)
          }



      } else {
          if (STATUS && STATUS === 'TXN_SUCCESS') {
              // Payment succeed!
          }
      }
  };

runTransaction(amount, customerId, orderId, mobile, email, checkSum) {
            const callbackUrl = `${paytmConfig.CALLBACK_URL}${orderId}`;
            const details = {
                mode: 'Staging', // 'Staging' or 'Production'
                MID: paytmConfig.MID,
                INDUSTRY_TYPE_ID: paytmConfig.INDUSTRY_TYPE_ID,
                EMAIL: '',
                MOBILE_NO: '',
                WEBSITE: paytmConfig.WEBSITE,
                CHANNEL_ID: paytmConfig.CHANNEL_ID,
                TXN_AMOUNT: "200", // String
                ORDER_ID: orderId, // String
                CUST_ID: "1", // String
                CHECKSUMHASH: checkSum, //From your server using PayTM Checksum Utility
                CALLBACK_URL: callbackUrl,
            };

            paytm.startPayment(details);
        }


sendSachinGift = () =>
{


  console.log(GLOBAL.aid,GLOBAL.user_id,GLOBAL.myid,this.state.credit)
  const url = GLOBAL.BASE_URL + 'credit_gifts'

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          to_user_id: GLOBAL.aid,
          from_user_id: GLOBAL.user_id,
          streaming_id:GLOBAL.myid,
          credits:this.state.giftPrices,
          gift_id:this.state.giftid,
quantity:this.state.quantity,
multimode_id:"0"




      }),
  }).then((response) => response.json())
      .then((responseJson) => {

        this.socket = io("http://139.59.67.166:3500");
      this.socket.on("credit_gifts", msg => {
        //  this.setState({messages:msg.result})
       });

      this.socket.emit('credit_gifts',{
                              streaming_id: GLOBAL.myid,
           });
console.log(JSON.stringify(responseJson))

          if (responseJson.status == true) {


            GLOBAL.userlevel = responseJson.sender_details.user_level
            GLOBAL.userlevelcolor = responseJson.sender_details.user_level_color
            GLOBAL.userlevelimage = responseJson.sender_details.user_level_image
            this.setState({wallet:responseJson.sender_details.wallet})


              // GLOBAL.otps =  x;
              // GLOBAL.mymobile= this.state.email;
              // GLOBAL.isScreen = responseJson.flag;
              // this.props.navigation.replace('Otp')
          } else {

          }
      })
      .catch((error) => {
          console.error(error);
      });
//  this.se
}

cr = () =>{

  //this.RBSheets.close()
EventRegister.emit('creditpop', 'it works!!!')
  //this.props.navigation.navigate('Credit')
}
_renderItemss=({item,index})=>{

      return (
        <View>
                        <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.cr()}>
          <View style = {{flexDirection:'row',justifyContent:'space-between'}}>

          <View style = {{flexDirection:'row',marginBottom:6}}>


                <Image source={require('./diamond.png')} style={{ width:26, height:26,resizeMode:'contain',marginTop:12 }}/>

            <Text style = {{color:'black',fontFamily:GLOBAL.medium,fontSize:16,marginLeft:16,marginTop:7}}>
          159
            </Text>
          </View>



<View style = {{marginRight:12,width:100,height:30,borderWidth:1,borderColor:'black',borderRadius:5,marginTop:3}}>
<Text style = {{color:'black',fontFamily:GLOBAL.medium,fontSize:16,textAlign:'center',marginTop:3}}>
₹ 79
</Text>

</View>


          </View>
          <View style = {{width:'100%',backgroundColor:'black',height:1,margin:5}}>

          </View>
          </TouchableOpacity>
          </View>
      )
  }

sendGift = (item,index) =>{

  //giftPrice
  //giftid
//  alert(JSON.stringify(item))
this.setState({giftname:item.name})
this.setState({giftPrice:item.credit})
this.setState({giftPrices:item.credit})
this.setState({gifurl:item.gif})
//giftPrices
this.setState({giftid:item.id})
if (this.state.currentPage == "0"){
  for (var i = 0 ; i<this.state.regular.length ; i++){
    this.state.regular[i].is_selected = ""
    this.setState({regular:this.state.regular})
  }

  var a = this.state.regular[index]
  if (a.is_selected == ""){
    a.is_selected  = "Y"
    this.setState({credit:a.credit})

  }else{
      a.is_selected  = ""
  }

  this.state.regular[index] = a
  this.setState({regular:this.state.regular})
}
if (this.state.currentPage == "1"){
  for (var i = 0 ; i<this.state.zoadic.length ; i++){
    this.state.zoadic[i].is_selected = ""
    this.setState({zoadic:this.state.zoadic})
  }

  var a = this.state.zoadic[index]
  if (a.is_selected == ""){
    a.is_selected  = "Y"
    this.setState({credit:a.credit})

  }else{
      a.is_selected  = ""
  }

  this.state.zoadic[index] = a
  this.setState({zoadic:this.state.zoadic})
}
if (this.state.currentPage == "2"){
  for (var i = 0 ; i<this.state.royal.length ; i++){
    this.state.royal[i].is_selected = ""
    this.setState({royal:this.state.royal})
  }

  var a = this.state.royal[index]
  if (a.is_selected == ""){
    a.is_selected  = "Y"
    this.setState({credit:a.credit})

  }else{
      a.is_selected  = ""
  }

  this.state.royal[index] = a
  this.setState({royal:this.state.royal})
}
if (this.state.currentPage == "3"){
  for (var i = 0 ; i<this.state.backpack.length ; i++){
    this.state.backpack[i].is_selected = ""
    this.setState({backpack:this.state.backpack})
  }

  var a = this.state.backpack[index]
  if (a.is_selected == ""){
    a.is_selected  = "Y"
    this.setState({credit:a.credit})

  }else{
      a.is_selected  = ""
  }

  this.state.backpack[index] = a
  this.setState({backpack:this.state.backpack})
}



 this.setState({urls:this.state.url + item.file})
}

_renderItems=({item,index})=>{

  var selected = 0
  if (item.is_selected == 'Y'){
    selected = 1
  }else{
    selected = 0
  }

// var img = ""
// if (index % 4 == 0){
//   img = require('./g1.png')
// } else if (index % 4 == 1){
//   img = require('./g2.png')
// }
// else if (index % 4 == 2){
//   img = require('./g3.png')
// }
// else if (index % 4 == 3){
//   img = require('./g4.png')
// }
var url = this.state.url + item.file

      let w = Dimensions.get('screen').width/4 - 10;
      return (
          <View style={{width:w,borderWidth:selected,
          borderColor:'white',marginLeft:10}}>
            <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.sendGift(item,index)}>
              <View style={{
                  margin:4,



              }}>
                  <Image source={{uri:url}}
                  style={{width:w, height:70}}
                  resizeMode="contain"
                  resizeMethod="scale"
                  />
              </View>
              <Text style={{color:'white',fontSize:9,fontFamily:GLOBAL.regular,marginLeft:2,textAlign:'center'}}>
                {item.name}
              </Text>

              <View style = {{flexDirection:'row',alignSelf:'center',marginTop:5}}>
              <Image style = {{width:12,height:12,resizeMode:'contain'}} source={require('./coin.png')}/>
              <Text style={{color:'white',fontSize:9,fontFamily:GLOBAL.regular,marginLeft:2}}>
                  {item.credit}
              </Text>
              </View>
</TouchableOpacity>
          </View>
      )
  }

    login = () => {
          if (this.state.email == ''){
              alert('Please Enter Email Address')
          }
        else  if (validator.validate(this.state.email) == false){
              alert('Please Enter valid Email address')
          }

             else {
              var x = randomString({
                  length: 4,
                  numeric: true,
                  letters: false,
                  special: false,
              });
              this.showLoading()
              const url = GLOBAL.BASE_URL + 'otp'
              this.showLoading()
              fetch(url, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      email: this.state.email,
                      otp: x,
                      mobile:'',



                  }),
              }).then((response) => response.json())
                  .then((responseJson) => {


                      this.hideLoading()
                      if (responseJson.status == true) {


                          GLOBAL.otps =  x;
                          GLOBAL.mymobile= this.state.email;
                          GLOBAL.isScreen = responseJson.flag;
                          this.props.navigation.replace('Otp')
                      } else {
                          alert('Mobile number not registered . Please signup.')
                      }
                  })
                  .catch((error) => {
                      console.error(error);
                  });
          }

      }

      // _keyboardDidHide = () =>{
      //   this.setState({writer:false})

//Invitation
_keyboardDidHide = () =>{
  this.setState({writer:false})
}
acceptInviation = (item) =>{
  Backend.updateStatus(item)
}
rejectinviation = (item) =>{
  Backend.rejectStatus(item)
}

_renderIteminvite=({item,index})=>{

      return (
        <View style = {{width:window.width}}>

        <View style = {{flexDirection:'row'}}>
    <Image style = {{width:60,height:60,borderRadius:5,margin:5}}  source={{uri:item.image}}/>

    <View>

    <Text
      style={{
        fontSize: 16,
        marginLeft:7,
        fontFamily: GLOBAL.bold,
        color: "black",
        marginTop:7,


      }}
    >
    { item.name}
    </Text>

    <View style = {{flexDirection:'row'}}>
        <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.acceptInviation(item)}>
    <Text
      style={{
        fontSize: 16,
        marginLeft:7,
        fontFamily: GLOBAL.bold,
        color: "green",
        marginTop:5,padding:7,paddingLeft:10,paddingRight:10,
        borderRadius:22,
        borderWidth:1,
        borderColor:'green'

      }}
    >
    Accept
    </Text>
</TouchableOpacity>
  <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.rejectinviation(item)}>
    <Text
      style={{
        fontSize: 16,
        marginLeft:7,
        fontFamily: GLOBAL.bold,
        color: "red",
        marginTop:5,
        padding:7,paddingLeft:10,paddingRight:10,
        borderRadius:22,
        borderWidth:1,
        borderColor:'red'

      }}
    >
    Reject
    </Text>
</TouchableOpacity>
    </View>
    </View>

        </View>


          </View>
      )
  }



invitation = () => {
      Backend.loadMessagex (message => {
      this.setState({invitation:true})
      })

}




getInvitation = () =>{
  //getInvitation
  Backend.getInvitations (message => {
    var array = message
    var finalArray = []
    for (var i = 0; i<array.length;i++){
      if (array[i].status == 0){
        finalArray.push(array[i])
      }
    }
    this.setState({invitationList:finalArray})
    //invitationList



  })
}

getInvitationName = () =>{
  //getInvitation
  Backend.getInvitation (message => {
    var array = message
    var finalArray = []
    for (var i = 0; i<array.length;i++){
      if (array[i].status == 1){
        finalArray.push(array[i])
      }
    }
    this.setState({invitationLists:finalArray})
    //invitationList


  })
}

invite = ()=>{
if (GLOBAL.btype == "viewer"){



Backend.existcheck (d =>{
  if (d == true){

    alert('You have an already send an request')
  }else{
    Backend.insertx()
  }
})


}else{
    this.RBSheetinvite.open()
  //alert('Not Allowed to send gifts during the live broadcast.')
}
}

_handlePress = () =>{
  var x = randomString({
            length: 10,
            numeric: true,
            letters: false,
            special: false,

        });
        var commonHtml = `https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=${x}`;


        const url = 'http://139.59.76.223/tenon/paytm/generateChecksum.php'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                MID: "vKCAfR85123456281721",
                ORDER_ID: x,
                INDUSTRY_TYPE_ID: "Retail",
                EMAIL: '',
                MOBILE_NO: '',
                CHANNEL_ID: "WAP",
                TXN_AMOUNT:  "200",
                WEBSITE: "APPSTAGING",
                CUST_ID: "1",
                CALLBACK_URL: commonHtml,


            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                const callbackUrl = commonHtml;

                this.runTransaction('199', '1', x, '9896904632', "varun.singhal78@gmail.com", responseJson.CHECKSUMHASH)


            })
            .catch((error) => {
       alert(error);

                alert('Unable to process your request Please try again after some time')

            });
}
// Invitation
  componentWillUnmount () {
  //  SocketIOClient.disconnect()
this.setState({isopen:false})
  }


  pending = () =>{

 if (GLOBAL.btype != "viewer" ) {
    const url = GLOBAL.BASE_URL + 'user_request_list'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

            streaming_id:GLOBAL.myid,






        }),
    }).then((response) => response.json())
        .then((responseJson) => {
         console.log(JSON.stringify(responseJson))





            if (responseJson.status == true) {

              if (this.state.senderLevelnumber != responseJson.streamer_recieve_user_level_number){

              this.setState({senderLevelnumber:responseJson.streamer_recieve_user_level_number})
            }

              if (this.state.streamer_recieve_user_level_image != responseJson.streamer_recieve_user_level_image){
//  this.setState({streamer_recieve_user_level_image:responseJson.streamer_recieve_user_level_image})
              //  this.setState({senderLevelcolor:responseJson.streamer_recieve_user_level_color})

    this.setState({streamer_recieve_user_level_image:responseJson.streamer_recieve_user_level_image})
              }

              if (this.state.senderLevelcolor != responseJson.streamer_recieve_user_level_color){
//  this.setState({streamer_recieve_user_level_image:responseJson.streamer_recieve_user_level_image})
              //  this.setState({senderLevelcolor:responseJson.streamer_recieve_user_level_color})

    this.setState({senderLevelcolor:responseJson.streamer_recieve_user_level_color})
              }

              // senderLevelcolor:'',
              // streamer_recieve_user_level_image:'',

                //this.setState({broadcaster_list_with:responseJson.joiner_details})




                // GLOBAL.otps =  x;
                // GLOBAL.mymobile= this.state.email;
                // GLOBAL.isScreen = responseJson.flag;
                // this.props.navigation.replace('Otp')
            } else {

            }

            this.pending()
        })
        .catch((error) => {
          this.pending()
            console.error(error);
        });
      }else{
        const url = GLOBAL.BASE_URL + 'user_pending_request_status_check'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                streaming_id:GLOBAL.myid,
                user_id:GLOBAL.user_id






            }),
        }).then((response) => response.json())
            .then((responseJson) => {

//alert(JSON.stringify(responseJson))




                if (responseJson.broadcast_status == true) {

                  if (this.state.is_follow != responseJson.is_follow){
                    if (responseJson.is_follow == "1"){
                      this.setState({is_follow:true})
                    }else{
                        this.setState({is_follow:false})
                    }

                  //this.setState({is_follow:try})
                  }
                  //is_follow
                  if (this.state.senderLevelnumber != responseJson.streamer_recieve_user_level_number){

                  this.setState({senderLevelnumber:responseJson.streamer_recieve_user_level_number})
                }

                  if (this.state.streamer_recieve_user_level_image != responseJson.streamer_recieve_user_level_image){
    //  this.setState({streamer_recieve_user_level_image:responseJson.streamer_recieve_user_level_image})
                  //  this.setState({senderLevelcolor:responseJson.streamer_recieve_user_level_color})

        this.setState({streamer_recieve_user_level_image:responseJson.streamer_recieve_user_level_image})
                  }

                  if (this.state.senderLevelcolor != responseJson.streamer_recieve_user_level_color){
    //  this.setState({streamer_recieve_user_level_image:responseJson.streamer_recieve_user_level_image})
                  //  this.setState({senderLevelcolor:responseJson.streamer_recieve_user_level_color})

        this.setState({senderLevelcolor:responseJson.streamer_recieve_user_level_color})
                  }

    //this.setState({senderLevelnumber:responseJson.streamer_recieve_user_level_number})
                } else {

                }
                  this.pending()
            })
            .catch((error) => {
                console.error(error);
               this.pending()
            });
      }
  }
  eee =() =>{
    // var k = ""
    //
    //   k =   'Moved out from broadcast'
    //
    //
    //   var x = randomString({
    //       length: 20,
    //       numeric: true,
    //       letters: true,
    //       special: false,
    //       exclude: ['a', 'b']
    //   });
    //
    //   var array = [];
    //   var users = {
    //       _id: GLOBAL.user_id,
    //       name: GLOBAL.anotherName ,
    //   }
    //   var today = new Date();
    //   /* today.setDate(today.getDate() - 30);
    //   var timestamp = new Date(today).toISOString(); */
    //   var timestamp = today.toISOString();
    //   var dict = {
    //       text:k,
    //       user: users,
    //       createdAt: timestamp,
    //       _id: x,
    //
    //
    //       // etc.
    //   };
    //   array.push(dict)
    //   //Backend.load()
    //
    //   Backend.sendMessage(array)
    EventRegister.emit('cancelhost', 'it works!!!')
  }
  getcoinvalue = () =>{
    const url = GLOBAL.BASE_URL + 'cumulative_diamond_of_streamer'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

            streaming_id:GLOBAL.myid,
            user_id:GLOBAL.user_id





        }),
    }).then((response) => response.json())
        .then((responseJson) => {
          console.log(JSON.stringify(responseJson))

GLOBAL.share_url = responseJson.share_url
//alert(JSON.stringify(responseJson))
this.setState({todaystar:responseJson.today_star})

if (this.state.isopen == true && responseJson.block_flag == "0"){
  this.getcoinvalue()
}

if (responseJson.block_flag == "1"){
  EventRegister.emit('blockby', 'it works!!!')
//  alert('hi')
}

            if (responseJson.status == true) {

this.setState({totalcoincredit:responseJson.total_coin_credit})




                // GLOBAL.otps =  x;
                // GLOBAL.mymobile= this.state.email;
                // GLOBAL.isScreen = responseJson.flag;
                // this.props.navigation.replace('Otp')
            } else {

            }
        })
        .catch((error) => {
            console.error(error);
        });
  }
_handleStateChange = (state)=>{
    this.gift()
}
_keyboardDidShow = (e) => {

this.setState({paddingBottom:0})
}
    componentDidMount() {
      if (GLOBAL.btype == "viewer" ){
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


                       if (responseJson.user_details.entry_effect != ""){
                         this.setState({entryurl:responseJson.user_details.entry_effect})
                                this.setState({entryeffect:true})
                         if (responseJson.user_details.entry_effect == "Aeroplane"){

                         try {
                             // play the file tone.mp3
                             SoundPlayer.playSoundFile('aeroplane', 'mp3')
                             // or play from url

                         } catch (e) {
                             console.log(`cannot play the sound file`, e)
                         }
                         }

                         if (responseJson.user_details.entry_effect == "Bike"){

                         try {
                             // play the file tone.mp3
                             SoundPlayer.playSoundFile('bike', 'mp3')
                             // or play from url

                         } catch (e) {
                             console.log(`cannot play the sound file`, e)
                         }
                         }

                         if (responseJson.user_details.entry_effect == "Car" || responseJson.user_details.entry_effect == "Sedan"  ){

                         try {
                             // play the file tone.mp3
                             SoundPlayer.playSoundFile('car', 'mp3')
                             // or play from url

                         } catch (e) {
                             console.log(`cannot play the sound file`, e)
                         }
                         }
                         if (responseJson.user_details.entry_effect == "Rocket"){

                         try {
                             // play the file tone.mp3
                             SoundPlayer.playSoundFile('rocket', 'mp3')
                             // or play from url

                         } catch (e) {
                             console.log(`cannot play the sound file`, e)
                         }
                         }
                         if (responseJson.user_details.entry_effect == "Ship"  ){

                         try {
                             // play the file tone.mp3
                             SoundPlayer.playSoundFile('ship', 'mp3')
                             // or play from url

                         } catch (e) {
                             console.log(`cannot play the sound file`, e)
                         }
                         }
                         this.timeoutCheck = setTimeout(() => {

                        this.setState({entryeffect:false})
                        }, 9000);
   }






           //    alert(JSON.stringify(responseJson))
               if (responseJson.user_details.vip_flag_orig == "1"){
                 this.setState({vipeffect:true})


                 this.timeoutCheck = setTimeout(() => {

                this.setState({vipeffect:false})
              }, 9000);
               }
                 } else {

                 }
             })
             .catch((error) => {
                 console.error(error);
             });
           }


      this.socket = io("http://139.59.67.166:3500");
    this.socket.on("select_user_streaming", msg => {
    //  alert(JSON.stringify(msg))
        this.setState({messages:msg.result})
     });


     this.socket.on("entry_effects", msg => {


this.setState({entryurl:msg.result})
if (msg.result == "Aeroplane"){

try {
    // play the file tone.mp3
    SoundPlayer.playSoundFile('aeroplane', 'mp3')
    // or play from url

} catch (e) {
    console.log(`cannot play the sound file`, e)
}
}

if (msg.result == "Bike"){

try {
    // play the file tone.mp3
    SoundPlayer.playSoundFile('bike', 'mp3')
    // or play from url

} catch (e) {
    console.log(`cannot play the sound file`, e)
}
}

if (msg.result == "Car" || msg.result == "Sedan"  ){

try {
    // play the file tone.mp3
    SoundPlayer.playSoundFile('car', 'mp3')
    // or play from url

} catch (e) {
    console.log(`cannot play the sound file`, e)
}
}
if (msg.result == "Rocket"){

try {
    // play the file tone.mp3
    SoundPlayer.playSoundFile('rocket', 'mp3')
    // or play from url

} catch (e) {
    console.log(`cannot play the sound file`, e)
}
}
if (msg.result == "Ship"  ){

try {
    // play the file tone.mp3
    SoundPlayer.playSoundFile('ship', 'mp3')
    // or play from url

} catch (e) {
    console.log(`cannot play the sound file`, e)
}
}
       this.setState({entryeffect:true})


       this.timeoutCheck = setTimeout(() => {

      this.setState({entryeffect:false})
    }, 9000);

      });


      this.socket.on("vip_flag", msg => {

        this.setState({vipeffect:true})


        this.timeoutCheck = setTimeout(() => {

       this.setState({vipeffect:false})
     }, 9000);
     // this.setState({entryurl:msg.result})
     //    this.setState({entryeffect:true})


     //    this.timeoutCheck = setTimeout(() => {
     //
     //   this.setState({entryeffect:false})
     // }, 9000);

       });



this.socket.emit('select_user_streaming',{
                            user_id: GLOBAL.user_id,
                            streaming_id: GLOBAL.myid,
         });
//this.socket.emit('select_user_streaming', 'hi');

      // const connectionConfig = {
      //           jsonp: false,
      //           reconnection: true,
      //           reconnectionDelay: 100,
      //           reconnectionAttempts: 5000,
      //           transports: ['websocket']/// you need to explicitly tell it to use websockets
      //         };
      //
      //         this.socket = SocketIOClient('http://139.59.67.166:4500', connectionConfig);
      //          this.socket.emit("select_user_streaming",{
      //                             streaming_id: GLOBAL.myid,
      //          })
      //          this.socket.on('select_user_streaming',(data)=>{
      //           // alert('hi')
      //            this.setState({messages:data.result})
      //            alert(data.result)
      //           //this.setState({userid:{id}});
      //         //  alert(JSON.stringify(data));
      //         })

this.pending()

      this.listenerxsd = EventRegister.addEventListener('muteandunmutes', (data) => {
        this.setState({mute:data})

             })
      this.listener = EventRegister.addEventListener('reload', (data) => {
                this.gift()
             })

             this.listener1pp = EventRegister.addEventListener('clickchat', (data) => {
this.detailsw(data)
                    })

      //  this.props.navigation.addListener('willFocus',this._handleStateChange);
this.getcoinvalue()
             if (GLOBAL.btype == "viewer" ){
            this.setState({currentPage:'0'})
             }else{

                    this.setState({currentPage:'3'})
             }
     //  RNFetchBlob.fs.readFile('http://139.59.76.223/varun/Crown_Animation.json', 'utf8')
     // .then((data) => {
     //   alert(JSON.stringify(data))
     //      this.setState({
     //         jsonObject: JSON.parse(data)
     //      });
     // });

//alert(this.state.jsonObject)

      if (Platform.OS === 'ios') {
        const { RNPayTm } = NativeModules;

        this.emitter = new NativeEventEmitter(RNPayTm);
        this.emitter.addListener('PayTMResponse', this.onPayTmResponse);
    } else {

        DeviceEventEmitter.addListener('PayTMResponse', this.onPayTmResponse);
    }
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
       this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
      this.gift()
      this.invitation()
      this.getInvitation()
      this.getInvitationName()


    Backend.loadMessagesdgift (message => {

      this.setState({sendurl:message.url})
      try {
          // play the file tone.mp3
        //  SoundPlayer.playSoundFile('coin', 'mp3')
          // or play from url

      } catch (e) {
          console.log(`cannot play the sound file`, e)
      }
this.setState({giftsf:message.gift})
this.setState({userimage:message.myimage})
this.setState({giftreceived:message})
  this.setState({shown:true})
this.setState({giftquantity:message.quantity})
//giftquantity

var check = parseInt(message.quantity)

  if (check == 1){
    this.setState({
           anim: false
       })
  this.timeoutCheck = setTimeout(() => {

  this.bounce()
}, 8000);
  }else{
    this.setState({
           anim: false
       })
  this.timeoutCheck = setTimeout(() => {
this.setState({shown:false})
  this.bounced()
}, 3000);
  }



})



      // Backend.loadMessagesd (message => {
      //
      //   Backend.get(get =>{
      //     this.setState({messages:get})
      //
      //   //  alert(JSON.stringify(get))
      //   })

        // this.setState(previousState => ({
        //     messages: [...previousState.messages, message]
        // }));


        // Backend.sendMessagew (ad => {
        //
        //   Backend.get(get =>{
        //       this.setState({messages:get})
        //   })
        //
        //
        // });

        // this.setState(previousState => {
        //
        //     messages: this.state.messages.append(previousState.messages, message)
        //
        // });


    //  alert(JSON.stringify(message))


    //  });

    //  alert(JSON.stringify(this.state.messages))

//       this.timeoutCheck = setTimeout(() => {
// this.props.navigation.navigate('Slider')
// }, 400);






        // var value =  AsyncStorage.getItem('userID');
        // value.then((e)=>{
        //
        //     if (e == '' || e == null ){
        //             this.timeoutCheck = setTimeout(() => {
        //       this.props.navigation.replace('Slider')
        //     }, 1000);
        //
        //       //  this.props.navigation.replace('Slider')
        //
        //     }else {
        //
        //         GLOBAL.user_id = e;
        //         GLOBAL.userid = e;
        //         GLOBAL.userID = e;
        //
        //         //  this.props.navigation.replace('Slider')
        //       this.props.navigation.replace('TabNavigator')
        //     }
        //
        // })






    }

sendMessage = () =>{
var testcheck = this.state.email

  var conditions = ["antsant", "bakchodi", "bakchod","bhasad","bhosdi","jhand","chaatu","chut","lund","boor","momme","chuchhi","nipple","gand","harami","madharchor","madarchod","benchod","behanchod","bahanchod","betichod","chod","chirkut","chutiya","laudu","lauda","laad","chalu","dabao","tatte","tatta","teri ma ka","teri maa ka","terimaka","chod","chodna","chodu","rand","randi","gandmasti","maal","klpd","gfpd","gaandu","lodu","jhaant","fuddi","muth","kutti","tatti","asshole","motherfucker","bastard","dick","pussy","boobs","virgin","vagina","kill","slit","dumbo","booty","milf","arse","pee","mutne","mut","peshab","pissed","rubbish","bhosdiwale"];
  var test1 = conditions.some(el => this.state.email.includes(el));



if (testcheck == ""){
  alert('Please enter some text.')
  return
}
var test1 = conditions.some(el => testcheck.includes(el));
if (test1 == true){
  testcheck = "Censored "
}



const url = GLOBAL.BASE_URL + 'chat_block_check_dynamic'

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({

        streaming_id:GLOBAL.myid,
        user_id:GLOBAL.user_id





    }),
}).then((response) => response.json())
    .then((responseJson) => {
      console.log(JSON.stringify(responseJson))

//alert(JSON.stringify(responseJson))


        if (responseJson.status == true) {
  this.setState({writer:false})
alert('You are muted by Broadcaster.')
        } else {
          var x = randomString({
              length: 20,
              numeric: true,
              letters: true,
              special: false,
              exclude: ['a', 'b']
          });

          var array = [];
          var users = {
              _id: GLOBAL.user_id,
              name: GLOBAL.anotherName ,
          }
          var today = new Date();
          /* today.setDate(today.getDate() - 30);
          var timestamp = new Date(today).toISOString(); */
          var timestamp = today.toISOString();
          var dict = {
              text:testcheck,
              user: users,
              createdAt: timestamp,
              _id: x,


              // etc.
          };
          array.push(dict)
          //Backend.load()

          this.setState({email:''})

          Backend.sendMessage(array)


        this.setState({writer:false})
        }
    })
    .catch((error) => {
        console.error(error);
    });




}
ss2 = ()=>{
if (GLOBAL.btype == "viewer"){
  this.RBSheet.open()
}else{
  const url = GLOBAL.BASE_URL + 'back_pack'

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({

          streaming_id:GLOBAL.myid,
          user_id:GLOBAL.user_id





      }),
  }).then((response) => response.json())
      .then((responseJson) => {




          if (responseJson.status == true) {

this.setState({backpack:responseJson.list})

  this.RBSheet.open()


              // GLOBAL.otps =  x;
              // GLOBAL.mymobile= this.state.email;
              // GLOBAL.isScreen = responseJson.flag;
              // this.props.navigation.replace('Otp')
          } else {
              this.RBSheet.open()

          }
      })
      .catch((error) => {
          console.error(error);
      });

  //this.RBSheet.open()
//  this._handlePress()
  //alert('Not Allowed to send gifts during the live broadcast.')
}
}
    renderWriter(){
  if(this.state.writer){
      return (
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          padding:8,
          backgroundColor:'white'
        }}>
          <View style={{
            padding:4
          }}>

          </View>
          <View style={{
            flex:1,
            backgroundColor: '#efefef',
            borderRadius:4,
            padding:4,
            marginRight:4
          }}>
            <TextInput
              placeholder="Message.."
              autoFocus
              style={{
                height:36,
                paddingLeft:6
              }}
              maxLength={80}
                onChangeText={(text) => this.setState({email:text})}
            />
          </View>
                <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.sendMessage()}>
          <View style={{
            padding:4
          }}
          onPress={()=>this.sendMessage()}
          >
            <Image style = {{height:20,width:20,resizeMode:'contain'}}source={require('./icon_send.png')}/>
          </View>
          </TouchableOpacity>
        </View>
      )
    }else{
      return (
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          justifyContent: 'space-between',
          paddingHorizontal:10,
          marginTop:-40
        }}>
          <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({writer:true})}>
          <View onPress={()=>this.setState({writer:true})}>
            <Image style = {{width:40,height:40}} source={require('./ic_comments.png')}/>
          </View>
          </TouchableOpacity>
          <View style={{
            flexDirection:'row',
            alignItems:'center'
          }}>
          {GLOBAL.btype != "viewer" && (
            <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.RBSheetscamera.open()}>
        <View>
          <Image style = {{width:40,height:40}} source={require('./Animation/Group.png')}/>
        </View>
        </TouchableOpacity>
          )}

<TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({isshare:true})}>
            <View style = {{marginLeft:3}}>
              <Image style = {{width:40,height:40}} source={require('./Animation/Groups.png')}/>
            </View>
            </TouchableOpacity>


  <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.ss2()}>
            <View style = {{marginLeft:3}}>
              <Image style = {{width:40,height:40}}source={require('./ic_Gift.png')}/>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}

insertinchat = () =>{
  var k = GLOBAL.anotherName + 'started Following' + this.state.detail.name

  if (this.state.detail.is_follow == "0"){
  k = GLOBAL.anotherName + ' started Following ' + this.state.detail.name
  }else{
    k = GLOBAL.anotherName + ' Unfollow ' + this.state.detail.name
  }

  var x = randomString({
      length: 20,
      numeric: true,
      letters: true,
      special: false,
      exclude: ['a', 'b']
  });

  var array = [];
  var users = {
      _id: GLOBAL.user_id,
      name: GLOBAL.anotherName ,
  }
  var today = new Date();
  /* today.setDate(today.getDate() - 30);
  var timestamp = new Date(today).toISOString(); */
  var timestamp = today.toISOString();
  var dict = {
      text:k,
      user: users,
      createdAt: timestamp,
      _id: x,


      // etc.
  };
  array.push(dict)
  //Backend.load()

  Backend.sendMessage(array)

}

follow = () =>{
  this.insertinchat()
var type = ""
if (this.state.detail.is_follow == "0"){
  type = "1"
}else{
    type = "0"
}

var k =  JSON.stringify({
    to_user_id: this.state.another,
    from_user_id: GLOBAL.user_id,
    what:type
  })
  console.log(k)
//userid

  const url = GLOBAL.BASE_URL + 'follow_and_unfollow'

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          to_user_id: this.state.another,
          from_user_id: GLOBAL.user_id,
          what:type




      }),
  }).then((response) => response.json())
      .then((responseJson) => {



          if (responseJson.status == true) {



this.setState({popvisible:false})

              // GLOBAL.otps =  x;
              // GLOBAL.mymobile= this.state.email;
              // GLOBAL.isScreen = responseJson.flag;
              // this.props.navigation.replace('Otp')
          } else {

          }
      })
      .catch((error) => {
          console.error(error);
      });
//  this.setState({detail:item})
  //this.setState({popvisible:true})
}


gift = () =>{


  const url = GLOBAL.BASE_URL + 'gifts_list'

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({

          user_id: GLOBAL.user_id,





      }),
  }).then((response) => response.json())
      .then((responseJson) => {

//Balert(JSON.stringify(responseJson.lists[1]))

          if (responseJson.status == true) {
            this.setState({wallet:responseJson.wallet})
            this.setState({regular:responseJson.lists[0]})
            this.setState({zoadic:responseJson.lists[1]})
            this.setState({royal:responseJson.lists[2]})
        //    alert(JSON.stringify(responseJson.lists[2]))
          //  this.setState({backpack:responseJson.lists[3]})


            var array = [];
                //                   for (var i = 0; i < responseJson.data_l.length; i ++){
                //                     var c =  responseJson.data_l[i]
                //
                //
                //                     c.is_selected = "";
                //                     array.push(c)
                //                   }
                // console.log(JSON.stringify(array))
                //                     this.setState({gift:array})


this.setState({url:responseJson.gift_url})



              // GLOBAL.otps =  x;
              // GLOBAL.mymobile= this.state.email;
              // GLOBAL.isScreen = responseJson.flag;
              // this.props.navigation.replace('Otp')
          } else {

          }
      })
      .catch((error) => {
          console.error(error);
      });
}


detailanother = () =>{


this.setState({anotherProfile:GLOBAL.aid})
this.setState({another:GLOBAL.aid})

//userid
  const url = GLOBAL.BASE_URL + 'get_profile_user'

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          to_user_id:GLOBAL.aid,
          from_user_id: GLOBAL.user_id,
          streaming_id:GLOBAL.myid




      }),
  }).then((response) => response.json())
      .then((responseJson) => {



          if (responseJson.status == true) {


this.setState({detail:responseJson})
this.setState({popvisible:true})
              // GLOBAL.otps =  x;
              // GLOBAL.mymobile= this.state.email;
              // GLOBAL.isScreen = responseJson.flag;
              // this.props.navigation.replace('Otp')
          } else {

          }
      })
      .catch((error) => {
          console.error(error);
      });
//  this.setState({detail:item})
  //this.setState({popvisible:true})
}



detailsw = (item) =>{


this.setState({anotherProfile:item})

this.setState({another:item})
//userid
  const url = GLOBAL.BASE_URL + 'get_profile_user'

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          to_user_id: item,
          from_user_id: GLOBAL.user_id,
          streaming_id:GLOBAL.myid




      }),
  }).then((response) => response.json())
      .then((responseJson) => {



          if (responseJson.status == true) {


this.setState({detail:responseJson})
this.setState({popvisible:true})
              // GLOBAL.otps =  x;
              // GLOBAL.mymobile= this.state.email;
              // GLOBAL.isScreen = responseJson.flag;
              // this.props.navigation.replace('Otp')
          } else {

          }
      })
      .catch((error) => {
          console.error(error);
      });
//  this.setState({detail:item})
  //this.setState({popvisible:true})
}
    details = (item) =>{

this.setState({anotherProfile:item.userid})
this.setState({another:item.userid})
//userid
      const url = GLOBAL.BASE_URL + 'get_profile_user'

      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              to_user_id: item.userid,
              from_user_id: GLOBAL.user_id,
                streaming_id:GLOBAL.myid




          }),
      }).then((response) => response.json())
          .then((responseJson) => {



              if (responseJson.status == true) {


this.setState({detail:responseJson})
this.setState({popvisible:true})
                  // GLOBAL.otps =  x;
                  // GLOBAL.mymobile= this.state.email;
                  // GLOBAL.isScreen = responseJson.flag;
                  // this.props.navigation.replace('Otp')
              } else {

              }
          })
          .catch((error) => {
              console.error(error);
          });
    //  this.setState({detail:item})
      //this.setState({popvisible:true})
    }
    ggt = () =>{
       Backend.delete()

    }

    setquantity = (index) =>{
      var h = parseInt(option[index])
      var k = parseInt(this.state.giftPrices) * h
      this.setState({giftPrice:k.toString()})
        this.setState({quantity:h.toString()})
    }
    _renderItemsback = ({item,index}) =>{
  return (

    <View style = {{flexDirection:'row',justifyContent:'space-between',width:window.width,borderBottomWidth:1,borderBottomColor:'white',marginBottom:4}}>
    <View style = {{flexDirection:'row',marginLeft:5}}>
    <Image
                     style={{
                         width: 50,
                         height: 50,





                     }}
                     source={{uri:item.gift_image}}
                 />

                 <Text style = {{color :'white',fontSize:14,marginTop:12,marginLeft:12}}>
                 X {item.quantity}
                 </Text>

    </View>
    <View style = {{flexDirection:'row',marginRight:10}}>
        <Image source={require('./diamond.png')} style={{ width:26, height:26,resizeMode:'contain',marginTop:12 }}/>
    <Text style = {{color :'white',fontSize:14,marginTop:12,marginLeft:5}}>
  {item.total_credits}
    </Text>

    </View>

    </View>
  )
    }
 _renderItem = ({item,index}) =>{

    return (
      <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.details(item)}>
  <View >

  {index == 0 && item.total != "0" && (
    <View>
    <Image style={{

        height: 12,
        width:12,
        resizeMode:'contain',
        marginLeft:20,

        marginTop:1,




    }}

  source={require('./crown_gold.png')}
    />
    <Image
                     style={{
                         width: 25,
                         height: 25,
                         marginLeft:12,
                         borderWidth:1,
                         borderColor:'#ffc850',
                         marginTop:-3,
                         borderRadius:15



                     }}
                     source={{uri:item.image}}
                 />
    </View>
  )}

  {index == 1 && item.total != "0" && (
    <View>
    <Image style={{

      height: 12,
      width:12,
      resizeMode:'contain',
      marginLeft:20,

      marginTop:1,




    }}

  source={require('./crown_silver.png')}
    />
    <Image
                     style={{
                         width: 25,
                         height: 25,
                         marginLeft:12,
                         borderWidth:1,
                         borderColor:'#ffc850',
                         marginTop:-3,
                         borderRadius:15



                     }}
                     source={{uri:item.image}}
                 />
    </View>
  )}

    {index == 2 && item.total != "0" && (
      <View>
    <Image style={{

      height: 12,
      width:12,
      resizeMode:'contain',
      marginLeft:20,

      marginTop:1,




    }}

  source={require('./crown_bronze.png')}
    />
    <Image
                     style={{
                         width: 25,
                         height: 25,
                         marginLeft:12,
                         borderWidth:1,
                         borderColor:'#ffc850',
                         marginTop:-3,
                         borderRadius:15



                     }}
                     source={{uri:item.image}}
                 />
    </View>
  )}

{item.total == "0" && (
  <Image
                   style={{
                       width: 25,
                       height: 25,
                       marginLeft:12,
                       borderWidth:1,
                       borderColor:'#ffc850',
                       marginTop:7,
                       borderRadius:15



                   }}
                   source={{uri:item.image}}
               />
)}
{index != 0 && index != 1 && index != 2 && item.total != "0" && (
  <Image
                   style={{
                       width: 25,
                       height: 25,
                       marginLeft:12,
                       borderWidth:1,
                       borderColor:'#ffc850',
                       marginTop:7,
                       borderRadius:15



                   }}
                   source={{uri:item.image}}
               />
)}


  </View>
  </TouchableOpacity>
)
}

handleCancel = () =>{

}

followMessage = () =>{

  const url = GLOBAL.BASE_URL + 'create_chat_group'

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          other_id: this.state.another,
          user_id: GLOBAL.user_id,





      }),
  }).then((response) => response.json())
      .then((responseJson) => {



          if (responseJson.status == true) {
GLOBAL.anotherids =  this.state.another
this.setState({popvisible:false})
GLOBAL.chatid = responseJson.chat_group_id
//this.props.navigation.navigate("MyChat",this.state.name)
EventRegister.emit('mychat', 'it works!!!')


              // GLOBAL.otps =  x;
              // GLOBAL.mymobile= this.state.email;
              // GLOBAL.isScreen = responseJson.flag;
              // this.props.navigation.replace('Otp')
          } else {

          }
      })
      .catch((error) => {
          console.error(error);
      });
}

openmute = () =>{
  this.setState({popvisible:false})
  this.setState({popvisibless:true})
//  alert('hi')
}


chek = (item,index) => {

var k = this.state.followlist[index]
if (item.is_selected == ""){
  k.is_selected  = "Y"
}else{
  k.is_selected  = ""
}
this.state.followlist[index] = k
this.setState({followlist:this.state.followlist})
}

_renderItemsshare=({item,index}) => {



    return (

      <View style = {{backgroundColor:'white',flexDirection:'row',justifyContent:'space-between',width:300}}>
        <View style = {{flexDirection:'row',width:200}}>

        <Image source={{uri:item.image}} style={{
          width:50, height:50, borderRadius:25
        }}/>

        <Text style={{
          fontSize:16,marginTop:12,marginLeft:12
        }}>

          {item.name}
        </Text>
</View>

        {item.is_selected == "" && (
            <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.chek(item,index)}>
          <Image
          style={{
             width: 30,
             height: 30,
             marginRight:10,
             marginTop:20,
             resizeMode:'contain',



          }}
          source={require('./empty-checkbox.png')}
          />
          </TouchableOpacity>
        )}
        {item.is_selected != "" && (
            <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.chek(item,index)}>
          <Image
          style={{
             width: 30,
             height: 30,
             marginRight:10,
             marginTop:20,
             resizeMode:'contain',



          }}
          source={require('./check-box.png')}
          />
          </TouchableOpacity>
        )}


  </View>

    )
}
recharge = () =>{


  if (parseInt(this.state.wallet) >= this.state.giftPrice ){
//  this.RBSheet.close()
//  this.props.navigation.navigate('Coin')
  this.sendSachinGift()
Backend.sendGift(this.state.credit,this.state.urls,this.state.giftname,this.state.quantity,this.state.gifurl)
//giftdelete
      this.timeoutCheck = setTimeout(() => {
Backend.giftdelete()
this.setState({quantity:"1"})
}, 6000);

  var x = randomString({
      length: 20,
      numeric: true,
      letters: true,
      special: false,
      exclude: ['a', 'b']
  });

  var array = [];
  var users = {
      _id: GLOBAL.user_id,
      name: GLOBAL.anotherName,
  }
  var today = new Date();
  /* today.setDate(today.getDate() - 30);
  var timestamp = new Date(today).toISOString(); */
  var timestamp = today.toISOString();
  var dict = {
      text:'send a gift to Broadcaster',
      user: users,
      createdAt: timestamp,
      _id: x,


      // etc.
  };
  array.push(dict)
  //Backend.load()

  Backend.sendMessage(array)

  this.RBSheet.close()
}else{
    this.RBSheet.close()
this.cr()
}
  // this.RBSheets.open()
}

hi23 = (index) =>{
if (index ==  5){
  this.setState({quantity:"1"})
}else{
  this.setquantity(index)
}
}
ll = () => {
  this.timeoutCheck = setTimeout(() => {

  this.bounce()
}, 3000);
}

blockands = () =>{

var b = "0"

if (this.state.detail.chat_block_flag == "0"){
  b = "1"
}else{
    b = "0"
}

  const url = GLOBAL.BASE_URL + 'chat_block_and_unblock'

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          streaming_id:GLOBAL.myid,
          user_id:this.state.another,
          what:b,




      }),
  }).then((response) => response.json())
      .then((responseJson) => {



          if (responseJson.status == true) {



this.setState({popvisibless:false})
var k = ""

if (b == "1"){
  k = `Broadcaster has muted ${this.state.detail.name}`;
}

if (b == "0"){
    k = `Broadcaster has unmuted ${this.state.detail.name}`;
}







  var x = randomString({
      length: 20,
      numeric: true,
      letters: true,
      special: false,
      exclude: ['a', 'b']
  });

  var array = [];
  var users = {
      _id: GLOBAL.user_id,
      name: GLOBAL.anotherName ,
  }
  var today = new Date();
  /* today.setDate(today.getDate() - 30);
  var timestamp = new Date(today).toISOString(); */
  var timestamp = today.toISOString();
  var dict = {
      text:k,
      user: users,
      createdAt: timestamp,
      _id: x,


      // etc.
  };
  array.push(dict)
  //Backend.load()

  Backend.sendMessage(array)

              // GLOBAL.otps =  x;
              // GLOBAL.mymobile= this.state.email;
              // GLOBAL.isScreen = responseJson.flag;
              // this.props.navigation.replace('Otp')
          } else {

          }
      })
      .catch((error) => {
          console.error(error);
      });
}

openshare = () =>{

  this.setState({isshare:false})


  const url = GLOBAL.BASE_URL + 'follow_list'
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

          if (responseJson.status == true) {
          //  alert(JSON.stringify(responseJson.lists))

  this.setState({followlist:responseJson.lists})

  this.setState({isfollow:true})
          } else {

          }
      })
      .catch((error) => {
          console.error(error);
      });



}

blockand = () =>{

var b = "0"

if (this.state.detail.block_flag == "0"){
  b = "1"
}else{
    b = "0"
}

  const url = GLOBAL.BASE_URL + 'block_and_unblock'

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          to_user_id: this.state.another,
          from_user_id: GLOBAL.user_id,
          what:b,




      }),
  }).then((response) => response.json())
      .then((responseJson) => {



          if (responseJson.status == true) {



this.setState({popvisibless:false})
              // GLOBAL.otps =  x;
              // GLOBAL.mymobile= this.state.email;
              // GLOBAL.isScreen = responseJson.flag;
              // this.props.navigation.replace('Otp')
          } else {

          }
      })
      .catch((error) => {
          console.error(error);
      });
}


myswitchcamera = () =>{
  this.RBSheetscamera.close()
  EventRegister.emit('switchCamera', 'it works!!!')
}

switchanother = () =>{
  this.setState({popvisible:false})
  EventRegister.emit('anotherProfile', this.state.anotherProfile)
}

followBroadcaster  = () =>{

  if (GLOBAL.aid == GLOBAL.user_id){

  }else{
    const url = GLOBAL.BASE_URL + 'follow_and_unfollow'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to_user_id: GLOBAL.aid,
            from_user_id: GLOBAL.user_id,
            what:"1"




        }),
    }).then((response) => response.json())
        .then((responseJson) => {



            if (responseJson.status == true) {


              var k = ""

                k =  'Started following ' + GLOBAL.myname


                var x = randomString({
                    length: 20,
                    numeric: true,
                    letters: true,
                    special: false,
                    exclude: ['a', 'b']
                });

                var array = [];
                var users = {
                    _id: GLOBAL.user_id,
                    name: GLOBAL.anotherName ,
                }
                var today = new Date();
                /* today.setDate(today.getDate() - 30);
                var timestamp = new Date(today).toISOString(); */
                var timestamp = today.toISOString();
                var dict = {
                    text:k,
                    user: users,
                    createdAt: timestamp,
                    _id: x,


                    // etc.
                };
                array.push(dict)
                //Backend.load()

                Backend.sendMessage(array)


                // GLOBAL.otps =  x;
                // GLOBAL.mymobile= this.state.email;
                // GLOBAL.isScreen = responseJson.flag;
                // this.props.navigation.replace('Otp')
            } else {

            }
        })
        .catch((error) => {
            console.error(error);
        });
  }
}

bounced = () => {

  this.timeoutCheck = setTimeout(() => {
this.setState({shown:true})
this.ll()
}, 3000);

//  this.refs.view.fadeInRightBig(1000).then(endState => console.log(endState.finished ? this.setState({shown:false}) : 'bounce cancelled'));

}

  bounce = () => {
    this.setState({shown:false})
    this.setState({
           anim: true
       })
  //  this.refs.view.fadeInRightBig(1000).then(endState => console.log(endState.finished ? this.setState({shown:false}) : 'bounce cancelled'));

  }


ssshare = () =>{
  var imgid = ""


//alert(JSON.stringify(this.state.followlist))
      for (var i = 0; i< this.state.followlist.length ; i ++){



        if (this.state.followlist[i].is_selected == ""){

        }else{
            imgid = imgid + this.state.followlist[i].follower_user_id + '|'
        }

      }
      if (imgid == ""){
return
      } else{
          imgid = imgid.slice(0,-1)

      }


      const url = GLOBAL.BASE_URL + 'send_notification_to_fans'

      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              broadcast_id: GLOBAL.myid,
              multiple_users: imgid

          }),
      }).then((response) => response.json())
          .then((responseJson) => {



              if (responseJson.status == true) {
                this.setState({isfollow:false})

              } else {

              }
          })
          .catch((error) => {
              console.error(error);
          });

}


    render() {
       const { count } = this.state


      if(this.state.loading){
              return(
                  <View style={{ backgroundColor :'white'}}>
                      <Loader>
                      </Loader>
                  </View>
              )
          }
        return (

                          <View style = {{flex:1,backgroundColor:'transparent',width:window.width,height:window.height}} keyboardShouldPersistTaps='always'>

                          {this.state.vipeffect == true && (
                                                     <LottieView source={require('./Animation/VIP.json')} autoPlay loop />
                                                   )}
{ this.state.giftsf == "Bike" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Bike Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Car" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Car Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Crown" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Crown Animation.json')} autoPlay loop />
                         )}

{ this.state.giftsf == "Globe" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Globe Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Happy-Birthday" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Happy Birthday Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Light House" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/LightHouse Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Love Letter" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Love Letter Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Star" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Star Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Rose" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Rose Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Stay Home" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Stay Home Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Teddy" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Teddy Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Guitar" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Guitar Animation.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Love Blossom" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Love Blossom.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Propose" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Propose Ring.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Racing Car" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Car.json')} autoPlay loop />
                         )}

{ this.state.giftsf == "Helicopter" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Helicopter.json')} autoPlay loop />
                         )}

{ this.state.giftsf == "ILU" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/ILU.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Kiss" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Kiss.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Money" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Money.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Watership" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Watership.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Witch" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Witch.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Rocket" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Rocket.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Flower" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Flower.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Balloon" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Balloon.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Bicycle" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Bicycle.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Diya" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Diya.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "HBD" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/HBD.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Jalebi" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Jalebi.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Pizza" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Pizza.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "TeddyBear" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/TeddyBear.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Aquarius" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Aquarius.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Aries" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Aries.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Cancer" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Cancer.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Capricon" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Capricon.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Gemini" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Gemini.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Leo" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Leo.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Libra" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Libra.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Pisces" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Pisces.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Sagittarius" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Sagittarius.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Scorpio" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Scorpio.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Taurus" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Taurus.json')} autoPlay loop />
                         )}
{ this.state.giftsf == "Virgo" &&  this.state.shown == true && (
                           <LottieView source={require('./Animation/Virgo.json')} autoPlay loop />
                         )}
{  this.state.entryeffect == true && this.state.entryurl == "Aeroplane" &&(
                           <LottieView source={require('./Entry/Aeroplane.json')} autoPlay loop />
                         )}
{  this.state.entryeffect == true && this.state.entryurl == "Bike" &&(
                           <LottieView source={require('./Entry/Bike.json')} autoPlay loop />
                         )}
{  this.state.entryeffect == true && this.state.entryurl == "Car" &&(
                           <LottieView source={require('./Entry/Car.json')} autoPlay loop />
                         )}
{  this.state.entryeffect == true && this.state.entryurl == "Rocket" &&(
                           <LottieView source={require('./Entry/Rocket.json')} autoPlay loop />
                         )}
{  this.state.entryeffect == true && this.state.entryurl == "Sedan" &&(
                           <LottieView source={require('./Entry/Sedan.json')} autoPlay loop />
                         )}
{  this.state.entryeffect == true && this.state.entryurl == "Ship" &&(
                           <LottieView source={require('./Entry/Ship.json')} autoPlay loop />
                         )}


{GLOBAL.btype == "viewer" && (
  <TouchableOpacity style = {{width: 20,
  height: 20,marginTop:20, alignSelf:'flex-end',marginRight:20}}onPress={() =>   this.eee()}>
  <Image
             style={{
                 width: 20,
                 height: 20,


                 resizeMode:'contain',




             }}
             source={require('./btn_close.png')}
         />
         </TouchableOpacity>
)}

{GLOBAL.btype != "viewer" && (
  <TouchableOpacity onPress={() =>   EventRegister.emit('cancels', 'it works!!!')}>
  <Image
             style={{
                 width: 20,
                 height: 20,
                 marginRight:10,
                 marginTop:20,
                 resizeMode:'contain',
                 alignSelf:'flex-end'



             }}
             source={require('./btn_close.png')}
         />
         </TouchableOpacity>
)}


<View style = {{flexDirection:'row',justifyContent:'space-between',margin:10,marginTop:-30}}>
<View style = {{backgroundColor:'rgba(0,0,0,0.4)',width:130,marginBottom:8,borderRadius:20,flexDirection:'row',justifyContent:'space-between'}}>
  <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.detailanother()}>
<View style = {{flexDirection:'row'}}>

<Image
                 style={{
                     width: 30,
                     height: 30,
                     marginLeft:7,
                     borderWidth:1,
                     borderColor:'white',
                     marginTop:5,
                     borderRadius:15



                 }}
                 source={{uri:GLOBAL.groupImage}}
             />
<View>

<Text
  numberOfLines={1} ellipsizeMode='tail'
  style={{
    fontSize: 10,
    marginLeft:7,
    fontFamily: GLOBAL.regular,
    color: "white",
    marginTop:5,
    width:80,


  }}
>
{ GLOBAL.myname}
</Text>

<View style = {{flexDirection:'row',marginLeft:7}}>
{GLOBAL.authorised == "1" && (
  <Image source={require('./verified.png')} style={{
    width:10, height:10,marginRight:2
  }}/>
)}
  <Image  style = {{resizeMode:'contain',width:14,height:14}}source={require('./fire.png')}/>
<Text
  style={{
    fontSize: 12,
    marginLeft:7,
    fontFamily: GLOBAL.regular,
    color: "white",
    marginTop:-2,


  }}
>
  {this.state.messages.length}
</Text>
</View>
</View>

</View>
</TouchableOpacity>
{this.state.is_follow == false && (
  <TouchableOpacity style = {{width:20,height:20,marginRight:10,marginTop:8}}activeOpacity = {0.99} onPress= {()=>this.followBroadcaster()}>
  <Image style = {{width:20,height:20}}source={require('./add-red.png')}/>
  </TouchableOpacity>
)}

</View>

<View style = {{width:160,marginRight:50}}>
<FlatList
    data={this.state.messages}
    keyExtractor={this._keyExtractor}
    renderItem={this._renderItem}
    horizontal
    style={{
        flex:1
    }}
/>
</View>
</View>

{this.state.shown == true && this.state.giftsf != "" &&(
  <Animatable.View ref="view" iterationCount={3} animation={this.state.anim ? 'slideInLeft' : 'slideInRight'}>
<View style = {{width:300,flexDirection:'row'}}>
   <View style = {{backgroundColor:'rgba(0,0,0,0.3)',width:240,borderRadius:22,height:46,flexDirection:'row',position:'absolute',top:150}}>
   <Image      source={{uri:this.state.giftreceived.image}}
            style  = {{width:40, height:40,borderRadius:20,margin:10,marginTop:0,
          }}/>

          <View>
          <Text style = {{color:'white',fontSize:12,marginTop:12,marginLeft:3,fontFamily:GLOBAL.medium}}>
{this.state.giftreceived.name} Send Gift
          </Text>




          </View>
          <Image      source={{uri:this.state.giftreceived.myimage}}
                   style  = {{width:40, height:40,borderRadius:20,margin:10,marginTop:0,
                 }}/>
                 <Text style = {{fontSize :20 ,marginTop:5,color:'white',}}>
                 x   {this.state.giftquantity}
                 </Text>
   </View>



   </View>


  </Animatable.View>

)}

{ this.state.sendurl != "" &&  this.state.shown == true && (
  <View style = {{position:'absolute',bottom:60,alignSelf:'center'}}>
  <Image style = {{alignSelf:'center', resizeMode:'contain',height:400,width:300}}
           source={{uri:this.state.sendurl}}/>
           </View>
                         )}




<Dialog

                   visible={this.state.isfollow}
                   onTouchOutside={() => {
                     this.setState({ isfollow: false });
                   }}
                 >
                   <DialogContent  contentStyle = {{backgroundColor:'black'}}>
                   <View style = {{width:300 ,alignSelf:'center',marginBottom:10,borderRadius:8,height:400}}>


                   <FlatList
                       data={this.state.followlist}
                       keyExtractor={this._keyExtractor}
                       renderItem={this._renderItemsshare}

                       style={{
                           flex:1
                       }}
                   />

 <View style = {{flexDirection:'row'}}>
                   <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.ssshare()}>
                   <LinearGradient
                         start={{ x: 0, y: 0 }}
                         end={{ x: 1, y: 0 }}
                         colors={["#73005C", "#F00B51"]}
                         style={{
                           height: 40,
                           width: 120,
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
                         SHARE
                       </Text>

                       </LinearGradient>
                       </TouchableOpacity>

                       <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({isfollow:false})}>
                       <LinearGradient
                             start={{ x: 0, y: 0 }}
                             end={{ x: 1, y: 0 }}
                             colors={["#73005C", "#F00B51"]}
                             style={{
                               height: 40,
                               width: 120,
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
                             CLOSE
                           </Text>

                           </LinearGradient>
                           </TouchableOpacity>


</View>

</View>


                   </DialogContent>
                 </Dialog>


<Dialog

                   visible={this.state.isshare}
                   onTouchOutside={() => {
                     this.setState({ isshare: false });
                   }}
                 >
                   <DialogContent  contentStyle = {{backgroundColor:'black'}}>

<View>
<Text
  style={{
    fontSize: 19,

    fontFamily: GLOBAL.regular,
    color: "grey",

    marginTop:6,
    alignSelf:'center'
  }}
>
  Share To
</Text>
                   <View style = {{width:300 ,alignSelf:'center',marginBottom:10,borderRadius:8,height:90,flexDirection:'row',justifyContent:'space-between'}}>

<View>
  <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.openshare()}>
                   <Image source={require('./friendss.png')} style={{
                     width:50, height:50, marginLeft:10,marginTop:8
                   }}/>

                   </TouchableOpacity>

                   <Text
                     style={{
                       fontSize: 19,

                       fontFamily: GLOBAL.regular,
                       color: "grey",

                       marginTop:1,
                       alignSelf:'center'
                     }}
                   >
                     Friends
                   </Text>
</View>

<View>
  <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this._fancyShareMessage()}>
                   <Image source={require('./more.png')} style={{
                     width:50, height:50, marginLeft:10,marginTop:8
                   }}/>

                   <Text
                     style={{
                       fontSize: 19,

                       fontFamily: GLOBAL.regular,
                       color: "grey",

                       marginTop:1,
                       alignSelf:'center'
                     }}
                   >
                     Share
                   </Text>

</TouchableOpacity>


</View>








</View>
</View>


                   </DialogContent>
                 </Dialog>


<Dialog

                   visible={this.state.popvisibles}
                   onTouchOutside={() => {
                     this.setState({ popvisibles: false });
                   }}
                 >
                   <DialogContent  contentStyle = {{backgroundColor:'black'}}>
                   <View style = {{width:300 ,alignSelf:'center',marginBottom:10,borderRadius:8,height:400}}>
                   <Image      source={{uri:this.state.imageURI}}
                            style  = {{width:300, height:350,borderRadius:35,marginTop:10,alignSelf:'center',resizeMode:'contain'
                          }}/>



                          <LinearGradient
                                      start={{ x: 0, y: 0 }}
                                      end={{ x: 1, y: 0 }}
                                      colors={["#73005C", "#F00B51"]}
                                      style={{
                                        height: 40,
                                        width: "40%",
                                        overflow: "hidden",
                                        justifyContent: "center",
                                        borderRadius:12,
                                        marginLeft:'5%',
                                        marginTop:10,
                                        alignSelf:'center'


                                      }}
                                    >

                                    <Text
                                      style={{
                                        fontSize: 17,

                                        fontFamily: GLOBAL.regular,
                                        color: "white",
                                        marginTop:1,
                                        alignSelf:'center'
                                      }}
                                    >
                                    SHARE
                                    </Text>

                                    </LinearGradient>





</View>


                   </DialogContent>
                 </Dialog>





                 <Dialog

                                    visible={this.state.popvisibless}
                                    onTouchOutside={() => {
                                      this.setState({ popvisibless: false });
                                    }}
                                  >
                                    <DialogContent  contentStyle = {{backgroundColor:'black'}}>
                                    <View style = {{width:300 ,alignSelf:'center',marginBottom:10,borderRadius:8}}>

                                    <Image      source={{uri:this.state.detail.image}}
                                             style  = {{width:70, height:70,borderRadius:35,marginTop:20,alignSelf:'center'
                                           }}/>
                                           <Text style={{fontFamily:GLOBAL.bold,fontSize:20,marginLeft:1,marginTop:2,color:'black',textAlign:'center'}}>
                                           {this.state.detail.name}

                                           </Text>

                                           <View style = {{flexDirection:'row',alignSelf:'center',color:'grey'}}>

                                           <Text style={{fontFamily:GLOBAL.semi,fontSize:14,marginLeft:1,marginTop:3,color:'grey',textAlign:'center'}}>
                                            ID:  {this.state.detail.random_unique_id}

                                           </Text>




                                           </View>



                <View style = {{width:300,borderColor:'#f1f1f1',borderWidth:1,height:60,marginTop:10,flexDirection:'row'}}>


    <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.blockands()}>
                <View style = {{marginLeft:20}}>
 {this.state.detail.chat_block_flag == "0" && (
                <Image source={require('./mute.png') }
                         style={{
                           width: 26,
                           height: 26,
                           marginTop:10,
                           marginLeft:4,
                           resizeMode:'contain'

                         }}/>
                       )}

                       {this.state.detail.chat_block_flag == "1" && (
                                      <Image source={require('./unmute.png') }
                                               style={{
                                                 width: 26,
                                                 height: 26,
                                                 marginTop:10,
                                                 marginLeft:4,
                                                 resizeMode:'contain'

                                               }}/>
                                             )}

 {this.state.detail.chat_block_flag == "0" && (
                         <Text style = {{marginTop:2,fontSize:12,color:'grey',fontFamily:GLOBAL.regular}}>
                        Mute

                         </Text>
                       )}
                       {this.state.detail.chat_block_flag == "1" && (
                                               <Text style = {{marginTop:2,fontSize:12,color:'grey',fontFamily:GLOBAL.regular}}>
                                              UnMute

                                               </Text>
                                             )}


                </View>

            </TouchableOpacity>
    <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.blockand()}>
                <View style = {{marginLeft:200}}>

                <Image source={require('./block.png') }
                         style={{
                           width: 26,
                           height: 26,
                           marginTop:10,
                           marginLeft:4,
                           resizeMode:'contain'

                         }}/>

                         {this.state.detail.block_flag == "0" && (
                           <Text style = {{marginTop:2,fontSize:12,color:'grey',fontFamily:GLOBAL.regular}}>
                          Block

                           </Text>
                         )}
                         {this.state.detail.block_flag == "1" && (
                           <Text style = {{marginTop:2,fontSize:12,color:'grey',fontFamily:GLOBAL.regular}}>
                          Unblock

                           </Text>
                         )}


                </View>
                </TouchableOpacity>

                </View>

                 </View>


                                    </DialogContent>
                                  </Dialog>

<Dialog

                   visible={this.state.popvisible}
                   onTouchOutside={() => {
                     this.setState({ popvisible: false });
                   }}
                 >
                   <DialogContent  contentStyle = {{backgroundColor:'black'}}>
                   <View style = {{width:300 ,alignSelf:'center',marginBottom:10,borderRadius:8}}>

{GLOBAL.btype != "viewer" && (
                       <TouchableOpacity  style = {{width:'46%',height:40}}activeOpacity = {0.99} onPress= {()=>this.openmute()}>
                   <Image source={require('./Animation/Star.png')} style={{ width:26, height:26,resizeMode:'contain' ,marginTop:20}}/>
                   </TouchableOpacity>
                 )}

                 <TouchableOpacity onPress= {()=>this.switchanother()}>
                   <Image      source={{uri:this.state.detail.image}}
                            style  = {{width:70, height:70,borderRadius:35,marginTop:0,alignSelf:'center'
                          }}/>
                          </TouchableOpacity>
                          <Text style={{fontFamily:GLOBAL.bold,fontSize:20,marginLeft:1,marginTop:2,color:'black',textAlign:'center'}}>
                          {this.state.detail.name}

                          </Text>

                          <View style = {{flexDirection:'row',alignSelf:'center',color:'grey'}}>

                          <Text style={{fontFamily:GLOBAL.semi,fontSize:14,marginLeft:1,marginTop:9,color:'grey',textAlign:'center'}}>
                           ID:  {this.state.detail.random_unique_id}

                          </Text>

                          {this.state.detail.authorised_broadcaster == "1" && (
                            <Image source={require('./verified.png')} style={{
                              width:18, height:18, marginLeft:10,marginTop:8
                            }}/>
                          )}
                          {this.state.detail.vip_flag_orig  == "1" && (
                            <Image source={require('./vips.png')} style={{
                              width:18, height:18, marginLeft:10,marginTop:8
                            }}/>
                          )}
                          <View style = {{flexDirection:'row',marginTop:10}}>
                          {this.state.detail.gender == "Male" && (
                            <Image source={require('./Male.png')} style={{
                              width:12, height:12,resizeMode:'contain',marginLeft:10,
                            }}/>
                          )}
                          {this.state.detail.gender == "Female" && (
                            <Image source={require('./female.png')} style={{
                              width:12, height:12,resizeMode:'contain',marginLeft:10,
                            }}/>
                          )}
                          {this.state.detail.gender == "Other" && (
                            <Image source={require('./transgender.png')} style={{
                              width:12, height:12,resizeMode:'contain',marginLeft:10,
                            }}/>
                          )}
                          <Text style = {{color:'black',fontSize:10,fontFamily:GLOBAL.semi,marginLeft:3}}>
                          {this.state.detail.age}
                          </Text>
                          </View>


                          </View>
                          <View style = {{borderRadius:10,width:40,height:15,backgroundColor:this.state.detail.user_level_color,flexDirection:'row',alignSelf:'center'}}>
                          <Image style = {{width:10,height:10,margin:4,marginTop:2}}
                           source={{uri:this.state.detail.user_level_image}}/>
                           <Text style = {{color:'white',fontSize:10,fontFamily:GLOBAL.semi}}>
                           {this.state.detail.user_level}
                           </Text>

                          </View>

                          <View style = {{flexDirection:'row',color:'grey'}}>
                          <Text style={{fontFamily:GLOBAL.semi,fontSize:14,marginLeft:-10,marginTop:3,color:'grey'}}>
                           INTRO

                          </Text>

                          <Text style={{fontFamily:GLOBAL.semi,fontSize:14,marginLeft:35,marginTop:3,color:'black',width:200}}>
                            {this.state.detail.bio}

                          </Text>

                          </View>

                          <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:6}}>
    <TouchableOpacity  style = {{width:'46%',height:40}}activeOpacity = {0.99} onPress= {()=>this.follow()}>
                          <LinearGradient
                                      start={{ x: 0, y: 0 }}
                                      end={{ x: 1, y: 0 }}
                                      colors={["#73005C", "#F00B51"]}
                                      style={{
                                        height:40,

                                        overflow: "hidden",
                                        justifyContent: "center",
                                        borderRadius:12,
                                        marginLeft:'5%',
                                        marginTop:10,


                                      }}
                                    >
{this.state.detail.is_follow == "0" && (
  <Text
    style={{
      fontSize: 17,

      fontFamily: GLOBAL.regular,
      color: "white",
      marginTop:1,
      alignSelf:'center'
    }}
  >
  +  FOLLOW
  </Text>
)}
{this.state.detail.is_follow != "0" && (
  <Text
    style={{
      fontSize: 17,

      fontFamily: GLOBAL.regular,
      color: "white",
      marginTop:1,
      alignSelf:'center'
    }}
  >
  +  UNFOLLOW
  </Text>
)}

                                    </LinearGradient>

</TouchableOpacity>

    <TouchableOpacity  style = {{width:'46%',height:40}}activeOpacity = {0.99} onPress= {()=>this.followMessage()}>
                   <View style = {{  height: 40,
                borderWidth:1,borderColor:'#393099',borderRadius:12,marginTop:12}}>
                     <Text
                       style={{
                         fontSize: 17,

                         fontFamily: GLOBAL.regular,
                         color: "#393099",
                         marginTop:7,
                         alignSelf:'center'
                       }}
                     >
                     Message
                     </Text>

         </View>
         </TouchableOpacity>
</View>

</View>


                   </DialogContent>
                 </Dialog>
                 <View style = {{width:window.width}}>
                           <View
                            style={{ paddingLeft:10,flexDirection:'row',justifyContent:'space-between' }}
                            >

                            <View style = {{flexDirection:'row'}}>
                               <TouchableOpacity activeOpacity = {0.99} onPress= {()=>EventRegister.emit('mylevel', 'it works!!!')}>
                            <View
                            style={{
                              alignSelf:'flex-start',
                              paddingVertical:6,
                              marginBottom:0,
                              borderRadius:30,
                              paddingLeft:8,
                              paddingRight:8,
                              flexDirection:'row',
                              alignItems:'center',
                              height:20,
                              backgroundColor:'#F5A623'
                            }}
                            >

                              <Text style={{ color: 'white', paddingLeft:4 ,fontFamily:GLOBAL.semi,fontSize:13,fontWeight:'bold',marginRight:3}}>
                              Lv  {this.state.senderLevelnumber}
                              </Text>

                            </View>
                            </TouchableOpacity>
                               <TouchableOpacity activeOpacity = {0.99} onPress= {()=>EventRegister.emit('gifthistory', 'it works!!!')}>
                                <View
                                style={{
                                  alignSelf:'flex-start',
                                  paddingVertical:6,
                                  marginBottom:10,
                                  borderRadius:30,
                                  paddingLeft:8,
                                  paddingRight:8,
                                  marginLeft:10,
                                  flexDirection:'row',
                                  alignItems:'center',
                                    height:20,
                                    backgroundColor:'#DB0953',
                                }}
                                >
                                  <Image source={require('./coin.png')} style={{ width:16, height:12,resizeMode:'contain' }}/>
                                  <Text style={{ color: 'white', paddingLeft:4 ,fontFamily:GLOBAL.semi,fontSize:13,fontWeight:'bold',marginRight:3}}>
                                    {this.state.totalcoincredit}
                                  </Text>

                                </View>
                                </TouchableOpacity>
</View>
                               <TouchableOpacity activeOpacity = {0.99} onPress= {()=>EventRegister.emit('starpoint', 'it works!!!')}>
                                <View
                                style={{
                                  marginLeft:10,
                                  paddingVertical:6,
                                  marginBottom:10,
                                  borderRadius:30,
                                  paddingLeft:8,
                                  paddingRight:8,
                                  flexDirection:'row',
                                  alignItems:'center',
                                  backgroundColor:'rgba(0,0,0,0.1)',
                                    height:20,
                                }}
                                >
                                  <Image source={require('./stars.png')} style={{ width:16, height:12,resizeMode:'contain',marginLeft:-3 }}/>
                                  <Text style={{ color: 'white', paddingLeft:4 ,fontFamily:GLOBAL.semi,fontSize:13,fontWeight:'bold',marginRight:3}}>
                                    {this.state.todaystar} Star
                                  </Text>

                                </View>
                                </TouchableOpacity>
                            </View>
                 </View>
{GLOBAL.btype == "viewer" && (
  <View
  style={{
    marginLeft:10,
    paddingVertical:6,
    marginBottom:10,
    borderRadius:30,
    paddingLeft:8,
    paddingRight:8,
    flexDirection:'row',
    alignSelf:'flex-end',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
      height:20,
  }}
  >

    <Text style={{ color: 'rgba(255,255,255,0.42)', paddingLeft:4 ,fontFamily:GLOBAL.semi,fontSize:13,fontWeight:'bold',marginRight:3}}>
     DoCall ID : {GLOBAL.randomids}
    </Text>

  </View>

)}

  <Image source={require('./gameb.png')} style={{ width:90, height:90,resizeMode:'contain',position:'absolute',top:190,right:4}}/>

    <Image source={require('./videocallb.png')} style={{ width:60, height:60,resizeMode:'contain',position:'absolute',top:290,right:12 }}/>
                 <View style = {{marginTop:window.height -340,
                   height:174,marginBottom:12}}>
                 <Chat>

                 </Chat>


   </View>

   {this.state.writer == false && (
       this.renderWriter()
   )}

   {this.state.writer == true && (
     <View style={{
       flexDirection:'row',
       alignItems:'center',
       padding:8,
       backgroundColor:'white',
       position:'absolute',
       bottom:0
     }}>
       <View style={{
         padding:4
       }}>

       </View>
       <View style={{
         flex:1,
         backgroundColor: '#efefef',
         borderRadius:4,
         padding:4,
         marginRight:4
       }}>
         <TextInput
           placeholder="Message.."
           autoFocus
           style={{
             height:36,
             paddingLeft:6
           }}
           maxLength={80}
             onChangeText={(text) => this.setState({email:text})}
         />
       </View>
             <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.sendMessage()}>
       <View style={{
         padding:4
       }}
       onPress={()=>this.sendMessage()}
       >
         <Image style = {{height:20,width:20,resizeMode:'contain'}}source={require('./icon_send.png')}/>
       </View>
       </TouchableOpacity>
     </View>
   )}




                                        <RBSheet
                                                               ref={ref => {
                                                                 this.RBSheetinvite = ref;
                                                               }}
                                                               height={300}
                                                               duration={250}
                                                               customStyles={{
                                                                 container: {
                                                                   justifyContent: "center",
                                                                   alignItems: "center",
                                                                   backgroundColor:'transparent'
                                                                 }
                                                               }}
                                                             >


                                              <View style={{
                                                  height:300,
                                                  width:window.width,
                                                  backgroundColor:'white',
                                                  borderTopRightRadius:20,
                                                    borderTopLeftRadius:20,

                                                  flexDirection:'column',

                                              }}>

 <Text style = {{marginTop:7,textAlign:'center',alignSelf:'center',fontSize:18,fontFamily:GLOBAL.bold}}>
 Pending List

 </Text>
 <View style = {{margin:5,width:window.width-10,height:1,backgroundColor:'grey'}}>

 </View>

                                                <FlatList
                                      data={this.state.invitationList}
                                      renderItem={this._renderIteminvite}
                                      keyExtractor={this._keyExtractor}

                                      style={{
                                      flex:1
                                      }}
                                      />








                                              </View>

                                                             </RBSheet>


                                                             <RBSheet
                                                                                   ref={ref => {
                                                                                     this.RBSheetscamera = ref;
                                                                                   }}
                                                                                   height={120}
                                                                                   duration={250}
                                                                                   customStyles={{
                                                                                     container: {
                                                                                       justifyContent: "center",
                                                                                       alignItems: "center",
                                                                                       backgroundColor:'transparent'
                                                                                     }
                                                                                   }}
                                                                                 >
                                                                                   <View style = {{width:window.width ,height:120,backgroundColor:'white',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                                                                   <Text style = {{marginTop:20,marginLeft:15,fontSize:18,fontFamily:GLOBAL.bold}}>
                                                                                  Tool

                                                                                   </Text>
                                                                           <View style = {{width:'100%',alignSelf:'center',marginTop:5,height:40,flexDirection:'row',justifyContent:'space-between',backgroundColor:'white'}}>
  <TouchableOpacity onPress={() =>   EventRegister.emit('clearchat', 'it works!!!')}>
<View style = {{marginLeft:20}} >
                                                                           <Image source={require('./Animation/clear-chat.png') }
                                                                                    style={{
                                                                                      width: 26,
                                                                                      height: 26,
                                                                                      marginLeft:18,
                                                                                      marginTop:10,
                                                                                      resizeMode:'contain'

                                                                                    }}/>


                                                                                    <Text style = {{marginTop:2,fontSize:12,color:'grey',fontFamily:GLOBAL.regular}}>
                                                                                   Clear Chat

                                                                                    </Text>
                                                                                    </View>
                                                                                    </TouchableOpacity>


  <TouchableOpacity onPress={() =>   EventRegister.emit('muteandunmute', 'it works!!!')}>

                                                                                    <View style = {{marginLeft:20}} >
                                                                                    {this.state.mute == false && (
                                                                                      <Image source={require('./mute.png') }
                                                                                               style={{
                                                                                                 width: 26,
                                                                                                 height: 26,
                                                                                                 marginTop:10,
                                                                                                 marginLeft:4,
                                                                                                 resizeMode:'contain'

                                                                                               }}/>
                                                                                    )}

                                                                                    {this.state.mute == true && (
                                                                                      <Image source={require('./unmute.png') }
                                                                                               style={{
                                                                                                 width: 26,
                                                                                                 height: 26,
                                                                                                 marginTop:10,
                                                                                                 marginLeft:4,
                                                                                                 resizeMode:'contain'

                                                                                               }}/>
                                                                                    )}
{this.state.mute == false && (
                                                                                                                                                                        <Text style = {{marginTop:2,fontSize:12,color:'grey',fontFamily:GLOBAL.regular}}>
                                                                                                                                                                       Mute

                                                                                                                                                                        </Text>
                                                                                                                                                                      )}
                                                                                                                                                                      {this.state.mute == true && (
                                                                                                                                                                                                                                                                                                                                              <Text style = {{marginTop:2,fontSize:12,color:'grey',fontFamily:GLOBAL.regular}}>
                                                                                                                                                                                                                                                                                                                                             UnMute

                                                                                                                                                                                                                                                                                                                                              </Text>
                                                                                                                                                                                                                                                                                                                                            )}
                                                                                                                                                                        </View>
                                                                                                                                                                        </TouchableOpacity>

  <TouchableOpacity onPress={() =>   this.myswitchcamera()}>
                                                                                                                                                                                                                                  <View style = {{marginLeft:22}} >
                                                                                                                                                                                                                                                   <Image source={require('./photo-camera.png') }
                                                                                                                                                                                                                                                            style={{
                                                                                                                                                                                                                                                              width: 22,
                                                                                                                                                                                                                                                              height: 23,
                                                                                                                                                                                                                                                              marginTop:10,
                                                                                                                                                                                                                                                              resizeMode:'contain'

                                                                                                                                                                                                                                                            }}/>


                                                                                                                                                                                                                                                            <Text style = {{marginTop:2,marginLeft:2,fontSize:12,color:'grey',fontFamily:GLOBAL.regular}}>
                                                                                                                                                                                                                                                           Flip

                                                                                                                                                                                                                                                            </Text>
                                                                                                                                                                                                                                                            </View>
                                                                                                                                                                                                                                                            </TouchableOpacity>





<View>



</View>

                                                                           </View>



                                                                   </View>

                                                                                 </RBSheet>


                    <RBSheet
                                           ref={ref => {
                                             this.RBSheets = ref;
                                           }}
                                           height={300}
                                           duration={250}
                                           customStyles={{
                                             container: {
                                               justifyContent: "center",
                                               alignItems: "center",
                                               backgroundColor:'transparent'
                                             }
                                           }}
                                         >


                          <View style={{
                              height:300,
                              width:window.width,
                              backgroundColor:'white',
                              borderTopRightRadius:20,
                                borderTopLeftRadius:20,

                              flexDirection:'column',
                              justifyContent:'space-between'
                          }}>



                          <View style={{
                                        flexDirection:'row',
                                        justifyContent: 'space-between',
                                        alignItems:'center'
                                    }}>


                              <Text style = {{color:'black',fontFamily:GLOBAL.medium,fontSize:16,marginLeft:16}}>
 Recharge
                              </Text>
                                                                <View style={styles.btgifts}>
                                                                <Text style = {{color:'black',fontFamily:GLOBAL.medium,fontSize:15}}>
                                   Balance :
                                                                </Text>
                    <Image source={require('./diamond.png')}/>
                    <Text style={{marginLeft:1,color:'black',fontFamily:GLOBAL.medium,fontSize:12,marginRight:12}}>
                        152
                    </Text>
                  </View>

                          </View>










                          </View>

                                         </RBSheet>


                    <RBSheet
                                           ref={ref => {
                                             this.RBSheet = ref;
                                           }}
                                           height={330}
                                           duration={250}
                                           customStyles={{
                                             container: {
                                               justifyContent: "center",
                                               alignItems: "center",
                                               backgroundColor:'transparent'
                                             }
                                           }}
                                         >


                          <View style={{
                              height:330,
                              width:window.width,
                              backgroundColor:'rgba(0,0,0,0.5)',
                              flexDirection:'column',
                              justifyContent:'space-between',
                              borderTopLeftRadius:12,
                                borderTopRightRadius:12,

                          }}>

                          {GLOBAL.btype == "viewer" && (
                          <View style={{
                                        flexDirection:'row',
                                        justifyContent: 'space-between',
                                        alignItems:'center'
                                    }}>


                              <Text style = {{color:'white',fontFamily:GLOBAL.medium,fontSize:16,marginLeft:16}}>
                        Gift
                              </Text>
                                                                <View style={styles.btgifts}>
                                                                <Text style = {{color:'white',fontFamily:GLOBAL.medium,fontSize:15}}>
                                   Balance :
                                                                </Text>
                        <Image source={require('./coin.png')}/>
                        <Text style={{marginLeft:1,color:'white',fontFamily:GLOBAL.medium,fontSize:12,marginRight:12}}>
                        {this.state.wallet}
                        </Text>
                        </View>
                          </View>
                          )}
                                  {GLOBAL.btype == "viewer" && (
                          <View style = {{marginTop:4,width:window.width,height:1,backgroundColor:'white'}}>
                          </View>
                        )}

                          <View style={{
                                        flexDirection:'row',
                                        justifyContent: 'space-between',
                                        alignItems:'center'
                                    }}>
        {GLOBAL.btype == "viewer" && (
                                              <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({currentPage:'0'})}>
                          <View style={styles.btgifts}>

                                                 <Text style={this.state.currentPage === '0' ? styles.tgifts : [styles.tgifts_gray,{color:'#aaa'}]}>
                                                     Regular
                                                 </Text>
                                             </View>
</TouchableOpacity>
)}
        {GLOBAL.btype == "viewer" && (
<TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({currentPage:'1'})}>
<View style={styles.btgifts}>

   <Text style={this.state.currentPage === '1' ? styles.tgifts : [styles.tgifts_gray,{color:'#aaa'}]}>
       Zodiac
   </Text>
</View>
</TouchableOpacity>
)}
        {GLOBAL.btype == "viewer" && (
<TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({currentPage:'2'})}>
<View style={styles.btgifts}>

   <Text style={this.state.currentPage === '2' ? styles.tgifts : [styles.tgifts_gray,{color:'#aaa'}]}>
       Royal
   </Text>
</View>
</TouchableOpacity>
)}




                                              <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.setState({currentPage:'3'})}>
                                             <View style={styles.btgifts}>

                                                                    <Text style={this.state.currentPage === '3' ? styles.tgifts : [styles.tgifts_gray,{color:'#aaa'}]}>
                                                                        Bagpack
                                                                    </Text>
                                                                </View>
</TouchableOpacity>


                          </View>

                          {this.state.currentPage == '0' && (
                            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
  {this.state.regular.length == 0 && (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
           <Image source={require('./empty_box.png')}/>
           <Text style={{
               padding:8, color: 'white'
           }}>
               The Regular is Empty..
           </Text>
       </View>
  )}
  {this.state.regular.length != 0 && (

  <FlatList
  data={this.state.regular}
  renderItem={this._renderItems}
  keyExtractor={this._keyExtractor}
  numColumns={4}
  style={{
  flex:1
  }}
  />

  )}

                                 </View>
                          )}


                          {this.state.currentPage == '1' && (
                            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
  {this.state.zoadic.length == 0 && (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
           <Image source={require('./empty_box.png')}/>
           <Text style={{
               padding:8, color: 'white'
           }}>
               Zoidaic is Empty..
           </Text>
       </View>
  )}
  {this.state.zoadic.length != 0 && (

  <FlatList
  data={this.state.zoadic}
  renderItem={this._renderItems}
  keyExtractor={this._keyExtractor}
  numColumns={4}
  style={{
  flex:1
  }}
  />

  )}

                                 </View>
                          )}
                          {this.state.currentPage == '2' && (
                            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
  {this.state.royal.length == 0 && (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
           <Image source={require('./empty_box.png')}/>
           <Text style={{
               padding:8, color: 'white'
           }}>
               Royal is Empty..
           </Text>
       </View>
  )}
  {this.state.royal.length != 0 && (

  <FlatList
  data={this.state.royal}
  renderItem={this._renderItems}
  keyExtractor={this._keyExtractor}
  numColumns={4}
  style={{
  flex:1
  }}
  />

  )}
  </View>
                          )}

                          {this.state.currentPage == '3' && (
                            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
{this.state.backpack.length == 0 && (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
           <Image source={require('./empty_box.png')}/>
           <Text style={{
               padding:8, color: 'white'
           }}>
               The Bagpack is Empty..
           </Text>
       </View>
)}
{this.state.backpack.length != 0 && (
  <View>
  <FlatList
data={this.state.backpack}
renderItem={this._renderItemsback}
keyExtractor={this._keyExtractor}

style={{
flex:1
}}
/>
       </View>
)}

                                 </View>
                          )}
{GLOBAL.btype == "viewer" && (
                          <View style={{
                                         flexDirection:'row',
                                         justifyContent: 'space-between',
                                         alignItems:'center',
                                         padding:6,
                                         backgroundColor:'rgba(0,0,0,0.5)'
                                     }}>
                                         <View style={{flexDirection:'row', alignItems:'center'}}>
                                             <Image source={{uri:this.state.urls}} style={{
                                                 width:30, height:30
                                             }}/>
                                               <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.showActionSheet()}>
<View style = {{flexDirection:'row'}}>
                                             <Text style={styles.tgifts}>
                                                 x {this.state.quantity}
                                             </Text>

   <Image style = {{width:22,height:22,marginLeft:5}} source={require('./down-arrow.png')}/>
   <Text style={styles.tgifts}>
      Combo
   </Text>
                                             </View>


                                             </TouchableOpacity>
                                             <Text style={styles.tgifts}>
                                                = {this.state.giftPrice}
                                             </Text>
                                         </View>

                                         <View>
                                                   <TouchableOpacity activeOpacity = {0.99} onPress= {()=>this.recharge()}>
                                             <View style={{
                                                 paddingHorizontal:20,
                                                 paddingVertical:6,
                                                 borderRadius:20,
                                                 backgroundColor:'#393099'
                                             }}>
                                                 <Text style={styles.tgifts}>
                                                     Send
                                                 </Text>
                                             </View>
                                             </TouchableOpacity>
                                         </View>
                                     </View>
                                   )}

                          </View>

                                         </RBSheet>

                                         <ActionSheet
                      ref={o => this.ActionSheet = o}
                      title={'Select Quantity'}
                      options={option}
                      cancelButtonIndex={5}

                      onPress={(index) => { this.hi23(index)}}
                      />


                      </View>



        );
    }
}
