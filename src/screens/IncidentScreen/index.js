import React,{useState} from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import Footer from '../../components/common/Footer';
import {Picker} from '@react-native-community/picker';
 import {dateList,monthList,yearList,hourList,minuteList} from '../../constants/incident';
import Input from '../../components/common/Input';
import CustomBtn from '../../components/common/CustomBtn';
import color from '../../assets/theme/color';
import styles from './styles';
import { HOME_PAGE } from '../../constants/routeNames';
import { connect } from 'react-redux';




const IncidentScreen = ({navigation}) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedHour, setSelectedHour] = useState("");
    const [selectedMinute, setSelectedMinute] = useState("");
    const [selectedSituation, setSelectedSituation] = useState("");
    const [street, onChangeStreet] = useState(null);
    const [town, onChangeTown] = useState(null);
    const [a1,setA1] = useState(true);
    const [other,setOther] = useState(false);
    const [vehicleReg, setVehicleReg] = useState("");

    const vehicleRegis = () =>{
        setA1(!a1);
        setOther(!other);
        if(a1){
            setVehicleReg("A1");
        }else if(other){
            setVehicleReg("Other/Unknown");
        }else{
            setVehicleReg("");
        }
    }

    const getA1RegBtn=()=>{
        if(a1){
            return "#8e419c";
        }else{
            return "#fff";
        }
    }
    const getOtherRegBtn=()=>{
        if(other){
            return "#8e419c";
        }else{
            return "#fff";
        }
    }
    const getA1RegText=()=>{
        if(a1){
            return "#fff";
        }else{
            return "#8e419c";
        }
    }
    const getOtherRegText=()=>{
        if(other){
            return "#fff";
        }else{
            return "#8e419c";
        }
    }

    const continueHandle = () =>{
        if(selectedDate && selectedMonth && selectedYear && selectedHour && selectedMinute && vehicleReg && selectedSituation && street && town !== ""){
            let incident = {
                date:selectedDate,
                month:selectedMonth,
                year:selectedYear,
                hour:selectedHour,
                minute:selectedMinute,
                vehicleReg:vehicleReg,
                street:street,
                town:town,
                situation:selectedSituation
            }
            // props.passData(incident);
            navigation.navigate(HOME_PAGE);
        }
    }
    return (
        <Container>
            <View>
                <View style={{backgroundColor:"#8e419c", padding:15}}>
                    <Text style={{fontSize:27,fontWeight:"500",color:"#fff",textAlign:"center"}}>Incident detail</Text>
                </View>
                <View style={{padding:20}}>
                    <View>
                        <Text style={{fontSize:16}}>Please tell us when the incident happened*</Text>
                        <View style={{paddingVertical:5}}>
                            <Text style={{fontSize:16}}>Date of incident</Text>
                            <View style={{flexDirection:"row"}}>
                                <Picker
                                    selectedValue={selectedDate}
                                    style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                    onValueChange={(itemValue, itemIndex) => setSelectedDate(itemValue)}
                                >
                                    {/* {
                                        dateList.map((date,index) =>{
                                            return(
                                                <Picker.Item label={date} key={index} value={date} />
                                            )
                                        })
                                    } */}
                                    <Picker.Item label="DD" value="DD" />
                                    <Picker.Item label="01" value="01" />
                                    <Picker.Item label="02" value="02" />
                                    <Picker.Item label="03" value="03" />
                                    <Picker.Item label="04" value="04" />
                                    <Picker.Item label="05" value="05" />
                                    <Picker.Item label="06" value="06" />
                                    <Picker.Item label="07" value="07" />
                                    <Picker.Item label="08" value="08" />
                                    <Picker.Item label="09" value="09" />
                                    <Picker.Item label="10" value="10" />
                                    <Picker.Item label="11" value="11" />
                                    <Picker.Item label="12" value="12" />
                                </Picker>
                                <Picker
                                    selectedValue={selectedMonth}
                                    style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                    onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}
                                >
                                    {/* {
                                        monthList.map((date,index) =>{
                                            return(
                                                <Picker.Item label={date} key={index} value={date} />
                                            )
                                        })
                                    } */}
                                    <Picker.Item label="MM" value="MM" />
                                    <Picker.Item label="01" value="01" />
                                    <Picker.Item label="02" value="02" />
                                    <Picker.Item label="03" value="03" />
                                    <Picker.Item label="04" value="04" />
                                    <Picker.Item label="05" value="05" />
                                    <Picker.Item label="06" value="06" />
                                    <Picker.Item label="07" value="07" />
                                    <Picker.Item label="08" value="08" />
                                    <Picker.Item label="09" value="09" />
                                    <Picker.Item label="10" value="10" />
                                    <Picker.Item label="11" value="11" />
                                    <Picker.Item label="12" value="12" />
                                </Picker>
                                <Picker
                                    selectedValue={selectedYear}
                                    style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                    onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
                                >
                                    {/* {
                                        yearList.map((date,index) =>{
                                            return(
                                                <Picker.Item label={date} key={index} value={date} />
                                            )
                                        })
                                    } */}
                                    <Picker.Item label="YYYY" value="YYYY" />
                                    <Picker.Item label="1998" value="1998" />
                                    <Picker.Item label="1999" value="1999" />
                                    <Picker.Item label="2000" value="2000" />
                                    <Picker.Item label="2001" value="2001" />
                                    <Picker.Item label="2002" value="2002" />
                                    <Picker.Item label="2003" value="2003" />
                                    <Picker.Item label="2004" value="2004" />
                                    <Picker.Item label="2005" value="2005" />
                                    <Picker.Item label="2006" value="2006" />
                                    <Picker.Item label="2007" value="2007" />
                                    <Picker.Item label="2008" value="2008" />
                                    <Picker.Item label="2009" value="2009" />
                                    <Picker.Item label="2010" value="2010" />
                                    <Picker.Item label="2020" value="2020" />
                                    <Picker.Item label="2021" value="2021" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{paddingVertical:5}}>
                            <Text style={{fontSize:16}}>Time of incident</Text>
                            <View style={{flexDirection:"row"}}>
                                <Picker
                                    selectedValue={selectedHour}
                                    style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                    onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}
                                >
                                    {/* {
                                        hourList.map((date,index) =>{
                                            return(
                                                <Picker.Item label={date} key={index} value={date} />
                                            )
                                        })
                                    } */}
                                    <Picker.Item label="H" value="H" />
                                    <Picker.Item label="01" value="01" />
                                    <Picker.Item label="02" value="02" />
                                    <Picker.Item label="03" value="03" />
                                    <Picker.Item label="04" value="04" />
                                    <Picker.Item label="05" value="05" />
                                    <Picker.Item label="06" value="06" />
                                    <Picker.Item label="07" value="07" />
                                    <Picker.Item label="08" value="08" />
                                    <Picker.Item label="09" value="09" />
                                    <Picker.Item label="10" value="10" />
                                    <Picker.Item label="11" value="11" />
                                    <Picker.Item label="12" value="12" />
                                </Picker>
                                <Picker
                                    selectedValue={selectedMinute}
                                    style={{ height: 50, width: 100 ,borderWidth:1,borderColor:"#000"}}
                                    onValueChange={(itemValue, itemIndex) => setSelectedMinute(itemValue)}
                                >
                                    {/* {
                                        minuteList.map((date,index) =>{
                                            return(
                                                <Picker.Item label={date} key={index} value={date} />
                                            )
                                        })
                                    } */}
                                    <Picker.Item label="M" value="M" />
                                    <Picker.Item label="01" value="01" />
                                    <Picker.Item label="02" value="02" />
                                    <Picker.Item label="03" value="03" />
                                    <Picker.Item label="04" value="04" />
                                    <Picker.Item label="05" value="05" />
                                    <Picker.Item label="06" value="06" />
                                    <Picker.Item label="07" value="07" />
                                    <Picker.Item label="08" value="08" />
                                    <Picker.Item label="09" value="09" />
                                    <Picker.Item label="10" value="10" />
                                    <Picker.Item label="11" value="11" />
                                    <Picker.Item label="12" value="12" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{paddingVertical:5}}>
                            <Text style={{fontSize:16}}>Please select your vehicle registration*</Text>
                            <View>
                            <TouchableOpacity
                                style={[styles.regBtn,{backgroundColor:getA1RegBtn()}]}
                                onPress={()=>{vehicleRegis()}}
                            >
                                <Text style={[styles.regBtnText,{color:getA1RegText()}]}>A1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.regBtn,{backgroundColor:getOtherRegBtn()}]}
                                onPress={()=>{vehicleRegis()}}
                            >
                                <Text style={[styles.regBtnText,{color:getOtherRegText()}]}>Other/Unknown</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{paddingVertical:5}}>
                            <Text style={{fontSize:16}}>Please tell us where the incident happened</Text>
                            <Input
                            label="Closest street to the incident"
                            onChangeText={onChangeStreet}
                            value={street}
                            placeholder="Street name"/>
                            <Input
                            label="Closest town to the incident"
                            onChangeText={onChangeTown}
                            value={town}
                            placeholder="Town name"/>
                        </View>
                        <View style={{paddingVertical:5}}>
                            <Text style={{fontSize:16}}>Please tell us what happened (description that best fits the situation)*</Text>
                            <Picker
                                selectedValue={selectedSituation}
                                style={{ height: 50, width: "100%" ,borderWidth:1,borderColor:"#000"}}
                                onValueChange={(itemValue, itemIndex) => setSelectedSituation(itemValue)}
                            >
                                <Picker.Item label="Please select a circumstance"  value="Please select a circumstance" />
                                <Picker.Item label="Your vehicle was hit in the rear"  value="Your vehicle was hit in the rear" />
                                <Picker.Item label="A third party vehicle pulled out into the path of your vehicle"  value="A third party vehicle pulled out into the path of your vehicle" />
                                <Picker.Item label="Your vehicle was hit whilst parked"  value="Your vehicle was hit whilst parked" />
                                <Picker.Item label="A third party vehicle attempted to overtake your vehicle whilst turning"  value="A third party vehicle attempted to overtake your vehicle whilst turning" />
                                <Picker.Item label="A third party vehicle turned into the path of your vehicle"  value="A third party vehicle turned into the path of your vehicle" />
                                <Picker.Item label="An Incident involving only your vehicle"  value="An Incident involving only your vehicle" />
                                <Picker.Item label="A third party vehicle reversed into yours"  value="A third party vehicle reversed into yours" />
                                
                            </Picker>
                        </View>
                    </View>
                    <View style={{flex:1,justifyContent:"flex-end",flexDirection:"row"}}>
                        <CustomBtn 
                                bgColor={color.success} color="#fff" 
                                borderColor={color.success} title="Continue"
                                onPress={()=>{continueHandle()}}
                                borderRadius={10}
                        />
                    </View>
                </View>
            </View>
            <View  style={{backgroundColor:"#8e419c", padding:20}}>
                <Footer/>
            </View>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
        latest: state.CarReducer.incident,
      };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        passData:(incident) => {
            dispatch({type:GET_INCIDENT, payload:incident})
        }
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(IncidentScreen);
