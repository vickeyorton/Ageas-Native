import React,{useState} from 'react';
import { View,TextInput, Text,ImageBackground,TouchableOpacity,Image } from 'react-native';
import Container from '../../components/common/Container';
import styles from './styles';
import Footer from '../../components/common/Footer';
import { CLAIM_PAGE } from '../../constants/routeNames';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import color from "../../assets/theme/color";

const image = { uri: "https://media01.living4media.com/largepreviews/MzQxOTc1ODgw/11031480-Dalmatian-sitting-on-a-black-and-white-carpet-in-front-of-a-sofa.jpg" };
const Tab = [
    {   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/car_insurance.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/car_insurance_inverted.png",
name:"Car Insurance",
component:"Car"
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/home_insurance.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/home_insurance_inverted.png",
name:"Home Insurance",
component:"Home"   
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_pet_line_option1.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_pet_line_white.png",
name:"Pet Insurance",
component:"Pet"   
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/business_insurance.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/business_insurance_inverted.png",
name:"Business Insurance",
component:"Business"   
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/travel_icon_70x70_purple.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/travel_icon_70x70_white.png",
name:"Travel Insurance",
component:"Travel"   
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/bike_insurance.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/bike_insurance_inverted.png",
name:"Motorcycle Insurance",
component:"Motorcycle"   
    },
{   
pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_security_insurance_line.png",
active:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_security_insurance_white.png",
name:"Other Products",
component:"Other"   
    },
];
const HomeScreen = ({navigation}) => {
    const [value, onChangeText] = useState(null);
    const [focused,setFocused] = useState(false);

    const getFocused =() =>{
        if(focused){
            return color.primary
        }
    }

    return (
        <Container>
            <View style={styles.BgImageContainer}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.BgOverlay}>
                    <Text style={{fontSize:27,fontWeight:"700",color:"#8e419c"}}>Goodbye exhausting claims</Text>
                    <Text style={{paddingVertical:20}}>Whether you bought your insurance with Ageas or through an intermediary such as a broker, get in touch using the details below and we’ll get the ball rolling right away.</Text>
                </View>
                </ImageBackground>
                <View style={{position:"absolute",bottom:-22,width:"100%",zIndex:3}}>
                    <View style={{flex:1,justifyContent:"center",flexDirection:"row",}}>
                        <View 
                        onFocus={()=>{setFocused(true)}}
                        onBlur={()=>{setFocused(false)}}
                        style={[styles.SearchWrapper]}>
                            <View style={styles.iconContainer}>
                                <MaterialIcon style={{padding:10,color:color.purple}} name="search" size={30}></MaterialIcon>
                            </View>
                            <TextInput 
                                style={styles.textInput}
                                onChangeText={onChangeText}
                                placeholder="Search"
                                value={value}
                            />
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={styles.TabWrapper}>
                {Tab.map((data,index)=>{
                    return(
                    <TouchableOpacity key={index} style={styles.tabContainer}
                    onPress={()=>{navigation.navigate(CLAIM_PAGE)}}>
                        <Image style={{width:50,height:50}} source={{uri:data.pic}}/>
                        <Text >{data.name}</Text>
                    </TouchableOpacity>)
                })}
            </View>
            <View  style={{backgroundColor:"#8e419c", padding:20}}>
                <Footer/>
            </View>
        </Container>
    )
}

export default HomeScreen;
