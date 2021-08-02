import React,{useEffect,useState} from 'react';
import { TouchableOpacity, Text, View,Image,ImageBackground } from 'react-native';
import Container from '../../components/common/Container';
import CustomBtn from '../../components/common/CustomBtn';
import styles from './styles';
import {LOGIN_PAGE} from '../../constants/routeNames';
import Footer from '../../components/common/Footer';

const image = { uri: "https://media01.living4media.com/largepreviews/MzQxOTc1ODgw/11031480-Dalmatian-sitting-on-a-black-and-white-carpet-in-front-of-a-sofa.jpg" };
const AuthScreen = ({navigation}) => {
   
    return (
    
        <Container>
            <View style={{backgroundColor:"#f3e9f6", padding:20}}>
                <Image
                    style={styles.image}
                    source={{
                    uri:
                        "https://media01.living4media.com/largepreviews/MzQxOTc1ODgw/11031480-Dalmatian-sitting-on-a-black-and-white-carpet-in-front-of-a-sofa.jpg"
                    }}
                />
                {/* <View style={styles.BgImageContainer}>
                    <ImageBackground source={image} resizeMode="cover" style={styles.Bgimage}>
                    <View style={styles.BgOverlay}>
                    </View>
                    </ImageBackground>
                </View> */}
                {/* <View style={{width:"100%"}}> */}
                    
                    <View style={{flexDirection:"row",justifyContent:"center",flex:1}}>
                        <View style={{paddingVertical:10 ,flexDirection:"row",justifyContent:"center"}}>
                            <CustomBtn 
                            bgColor="#8e419c" color="#fff" 
                            borderColor="#8e419c" title="Sign In" 
                            width="100%" margin="auto"
                            onPress={()=>{navigation.navigate(LOGIN_PAGE)}}
                            
                            />
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center",flex:1}}>
                        <View style={{paddingVertical:10 ,flexDirection:"row",justifyContent:"center"}}>
                            <CustomBtn 
                            bgColor="#fff" color="#8e419c" 
                            borderColor="#8e419c" title="Sign Up" 
                            width="100%" margin="auto"
                            // onPress={onPress}
                            />
                        </View>
                    </View>
                    
                {/* </View> */}
            </View>
            <View style={{backgroundColor:"#8e419c", padding:20}}>
                <Footer/>
            </View>
        </Container>
    )
}

export default AuthScreen;
