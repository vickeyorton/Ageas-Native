import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const Thankyou=()=> {
  return (
    <View style={styles.container}>
     
      
      <View style={styles.content}>
        <Text style={styles.para1}>Thank you for submitting your claim,one of our claim handlers will be in touch by the end of the next working day.</Text>
        <Text style={styles.para2}>The claim number for your policy is : <Text style={styles.policyNum}>4062863N</Text></Text>
        <Text style={styles.para3}>if you need to contact us please call : <Text style={styles.contact}>03451 122 3018</Text> </Text>
      </View>
      
     
    </View>
  );
}
export default Thankyou;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight : 5,
  },
 
  content : {
    padding : 10
  },
  para1 : {
    fontSize : 16,
    lineHeight : 25
  },
  para2 : {
    paddingTop : 14,
    fontSize : 15
  },
  policyNum : {
    fontWeight : "bold"
  },
  para3 : {
    paddingTop : 13,
    fontSize : 13
  },
  contact : {
    color : "blue",
    textDecorationLine : "underline"
    
  }
  
});
