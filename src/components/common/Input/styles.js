import { StyleSheet } from "react-native";
import color from "../../../assets/theme/color";

export default StyleSheet.create({
    wrapper:{
        height:42,
        borderColor:color.purple,
        borderRadius:4,
        borderWidth:1,
        // flexDirection:'row',
        alignItems:"center",
        flex:1,
    },
    iconContainer:{
        paddingHorizontal:10,
    },
    textInput:{
        flex:1,
        // backgroundColor:"red"
    }
})