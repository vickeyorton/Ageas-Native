import React,{useEffect,useState} from 'react';
import { TouchableOpacity, Text, View,Image } from 'react-native';
import Container from '../../components/common/Container';
// import { useNavigation } from '@react-navigation/native';
import Input from '../../components/common/Input';
import CustomBtn from '../../components/common/CustomBtn';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Footer from '../../components/common/Footer';
import {INCIDENT_PAGE} from '../../constants/routeNames';

const LoginScreen = ({navigation}) => {
    // const {setOptions, toggleDrawer} = useNavigation();
    // useEffect(() => {
    //     setOptions({
    //         headerRight: () => (
    //             <TouchableOpacity
    //                 onPress={()=>{toggleDrawer()}}
    //             >
    //                 <MaterialIcon style={{padding:10}} name="menu" size={25}></MaterialIcon>
    //             </TouchableOpacity>
    //         ),
    //     });
    // }, [])
    const [value, onChangeText] = useState(null);
    const [pass, onChangePass] = useState(null);
    const [isValidEmail,setIsValidEmail] = useState(true);
    const handleValidEmail = val => {
        if (val.includes('@') && val.includes('.com')) {
            onChangeText(val);
          setIsValidEmail(true);
        } else {
            onChangeText(val);
          setIsValidEmail(false);
        }
      };

    const signIn = () => {
        if(value && pass && isValidEmail ){
            navigation.navigate(INCIDENT_PAGE)
        }
    }
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
            <View style={{backgroundColor:"#eed8f4",borderRadius:10,padding:10}}>
                <Text style={{textAlign:"center", fontSize:18,color:"#8e419c",fontWeight:"700"}}>Sign In</Text>
                <Text style={{paddingVertical:5}}>We know making a claim can be a stressful time, so we???re here to help every step of the way and get things back to normal for you, quick smart. Please record your claim through the form below and we'll get in touch as soon as possible.</Text>
                <Text style={{paddingVertical:5}}>We know making a claim can be a stressful time, so we???re here to help every step of the way and get things back to normal for you, quick smart. Please record your claim through the form below and we'll get in touch as soon as possible.</Text>
                <Input
                    // label="Email Address"
                    onChangeText={(e)=>{handleValidEmail(e)}}
                    value={value}
                    placeholder="Email Address"
                />
                {isValidEmail ? null : (
                    <Text style={styles.errorMsg}>
                    *email must contain "@" and ".com"
                    </Text>
                )}
                <Input
                    // label="Password"
                    onChangeText={onChangePass}
                    value={pass}
                    placeholder="Password"
                    icon={<MaterialIcon style={{padding:10}} name="remove-red-eye" size={20}></MaterialIcon>}
                    iconPosition="right"
                    secureTextEntry={true}
                />
                <View style={{alignItems:"flex-end",marginBottom:10}}>
                    <Text style={{fontSize:14,color:"#8e419c"}}>Forgot Password?</Text>
                </View>
                <View style={{marginVertical:15}}>
                    <CustomBtn bgColor="#8e419c" color="#fff" borderColor="#8e419c" title="Sign In" 
                    onPress={()=>{signIn()}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"center"}}>
                    <Text style={{fontSize:12,color:"#8e419c",fontWeight:"700"}}>I am a new user </Text>
                    <Text style={{fontSize:13,color:"#8e419c",fontWeight:"700"}}> Sign Up</Text>
                </View>
            </View>
        </View>
        <View  style={{backgroundColor:"#8e419c", padding:20}}>
            <Footer/>
        </View>
    </Container>
    )
}

export default LoginScreen;
