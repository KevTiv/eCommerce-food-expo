import { View, Text } from "react-native"
import { colors } from "../../assets/colors"

const CTA_Home = () =>{
  return (
    <View style={{flexDirection:'row', alignItems:'baseline', justifyContent:'center', marginTop: 12}}>
      <Text style={{fontSize:12, fontWeight:'500'}}>
        {'The best dishes start with our '}
      </Text>
      <Text style={{fontSize:18, fontWeight:'600', color:colors['warning-text-color']}}>
        chickens.
      </Text>
    </View>
  )
}

export { CTA_Home };