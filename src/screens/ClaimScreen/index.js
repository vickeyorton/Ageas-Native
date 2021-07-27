import React,{useState,useEffect} from 'react';
import { View, Text ,Switch,TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import CustomBtn from '../../components/common/CustomBtn';
import color from '../../assets/theme/color';
import {AUTH_PAGE} from '../../constants/routeNames';
// import { useNavigation } from '@react-navigation/native';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Footer from '../../components/common/Footer';

const ClaimScreen = ({navigation}) => {
    const [driverIssue, setDriverIssue] = useState("");
    const [q1isEnabled, setQ1IsEnabled] = useState(false);
    const [q2isEnabled, setQ2IsEnabled] = useState(false);
    const [q3isEnabled, setQ3IsEnabled] = useState(false);
    const [q4isEnabled, setQ4IsEnabled] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const q1toggleSwitch = () => setQ1IsEnabled(previousState => !previousState);
    const q2toggleSwitch = () => setQ2IsEnabled(previousState => !previousState);
    const q3toggleSwitch = () => setQ3IsEnabled(previousState => !previousState);
    const q4toggleSwitch = () => setQ4IsEnabled(previousState => !previousState);
    const PROP = [
        {
            key: 'Yes',
            text: 'Yes',
        },
        {
            key: 'No',
            text: 'No',
        },
        {
            key: 'Unsure',
            text: 'Unsure',
        },
    ];
    return (
        
    <Container>
        <View  style={{backgroundColor:"#f3e9f6", padding:20}}>
            <View >
                <Text style={{fontSize:27,fontWeight:"700",color:"#8e419c"}}>How to make a claim</Text>
            </View>
            <View style={{borderBottomWidth:1,borderColor:"#000",paddingVertical:10}}>
                <Text>Do you think you or the named driver could have been at fault for the incident?</Text>
                <View  style={styles.RadioBtnWrap}>
                    {PROP.map(res => {
                        return (
                            <View key={res.key}  style={styles.RadioBtnContainer}>
                                
                                <TouchableOpacity
                                    style={styles.radioCircle}
                                    onPress={() => {
                                        setDriverIssue(res.key)
                                    }}>
                                    {driverIssue === res.key && <View style={styles.selectedRb} />}
                                </TouchableOpacity>
                                <Text style={styles.radioText}>{res.text}</Text>
                            </View>
                        );
                    })}
                    {/* <Text> Selected: {driverIssue} </Text> */}
                </View>
            </View>
            <View style={[{borderBottomWidth:1,borderColor:"#000",paddingVertical:10},styles.qContainer]}>
                <Text style={{width:"90%"}}> Was the incident outside of the UK?</Text>
                <View style={{flex:1}}>
                    <Switch
                        trackColor={{ false: "#c6c6c6", true: "#8e419c" }}
                        thumbColor={q1isEnabled ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={q1toggleSwitch}
                        value={q1isEnabled}
                    />
                </View>
            </View>
            <View style={[{borderBottomWidth:1,borderColor:"#000",paddingVertical:10},styles.qContainer]}>
                <Text style={{width:"90%"}}> Was anybody injured as a result of the incident or did it involve a pedestrain, a pedal cyclist or a motor cyclist?</Text>
                <View style={{alignItems:"flex-end",flex:1}}>
                    <Switch
                        trackColor={{ false: "#c6c6c6", true: "#8e419c" }}
                        thumbColor={q2isEnabled ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={q2toggleSwitch}
                        value={q2isEnabled}
                    />
                </View>
            </View>
            <View style={[{borderBottomWidth:1,borderColor:"#000",paddingVertical:10},styles.qContainer]}>
                <Text style={{width:"90%"}}>Were multiple vehicles involved in the incident (more than your vehicle and 1 other?)</Text>
                <View style={{alignItems:"flex-end",flex:1}}>
                    <Switch
                        trackColor={{ false: "#c6c6c6", true: "#8e419c" }}
                        thumbColor={q3isEnabled ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={q3toggleSwitch}
                        value={q3isEnabled}
                    />
                </View>
            </View>
            <View style={[{borderBottomWidth:1,borderColor:"#000",paddingVertical:10},styles.qContainer]}>
                <Text style={{width:"90%"}}> Did this incident involve an act of vandalism, malicious damage, fire or theft?</Text>
                <View style={{alignItems:"flex-end",flex:1}}>
                    <Switch
                        trackColor={{ false: "#c6c6c6", true: "#8e419c" }}
                        thumbColor={q4isEnabled ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={q4toggleSwitch}
                        value={q4isEnabled}
                    />
                </View>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                />
                <Text style={styles.label}>Please confirm that you will take care to answer all question honestly and to the best of your knowledge. Failure to do so may affect your claim.</Text>
            </View>
            <View style={{flex:1,justifyContent:"flex-end",flexDirection:"row"}}>
            <CustomBtn 
                        bgColor={color.success} color="#fff" 
                        borderColor={color.success} title="Continue"
                         onPress={()=>{navigation.navigate(AUTH_PAGE)}}
                        borderRadius={10}
                        />
            </View>
        </View>    
        <View  style={{backgroundColor:"#8e419c", padding:20}}><Footer/></View>
    </Container>
        
        
    )
}

export default ClaimScreen;