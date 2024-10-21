
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {

const[todo, setTodo]=useState(``);
const[data,setData]=useState([]);
const[renkdizin,setRenkdizin]=useState([])
 

const Ekle=()=>{

setData([...data,todo]),
setTodo(``);

}


const Deletefonk=(index)=>{
let newArr=[];
newArr=[...data];
newArr.splice(index,1);
setData(newArr);

}  

const RenkTuret=()=>{

  const secenekler = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  let anarenk = '#';
  
  for (let x = 0; x < 6; x++){
  
      let sayi = Math.floor(Math.random() * 16)
      let olasilik = secenekler[sayi]
  
      anarenk += olasilik
  }
   
  setRenkdizin([...renkdizin,anarenk])

}


  return (
<View style={styles.container}> 

    <View style={styles.container4textinput}>

   <TextInput style={styles.textinput} placeholder='yapilacaklari enterlayiniz' value={todo}  onChangeText={(elen) => setTodo(elen)} />
   <TouchableOpacity style={styles.ekleOpacity} onPress={()=>{ Ekle(),RenkTuret()} }>
  <Text style={{color:`white`,fontSize:30}}> + </Text>
  </TouchableOpacity>
  
    </View>

     <View  style={{marginTop:130,borderRadius:20,justifyContent:'center',alignItems:'center'}}> 

  <FlatList 
  data={data}
  keyExtractor={(item)=> item.id}
  renderItem={({item,index}) => 

  {   return(

  <View style={{backgroundColor:renkdizin[index],width:300,height:40,marginBottom:5,justifyContent:`space-between`,alignItems:`center`,flexDirection:`row`}}> 
  <Text style={{marginLeft:30,fontSize:28}}>{index + 1}</Text>
   <Text style={{color:`white`,fontSize:28}}>{item}</Text> 
  <TouchableOpacity style={{marginRight:10}}  onPress={()=> Deletefonk(index)}>
    <Text><AntDesign name="delete" size={40} color="black" /></Text>
    </TouchableOpacity>
   </View>
  ) } }

/>

  </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:`row`,
    backgroundColor: '#08F4F0',
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  container4textinput:{
    flex: 1,
    flexDirection:`row`,
    alignItems: 'center',
    justifyContent: 'center',
    position:`absolute`,
    top:70

  },

  ekleOpacity:{
backgroundColor:`black`,
width:40,
height:40,
alignItems:'center',
justifyContent:`center`
  },

  textinput:{
backgroundColor:`#eaeaea`,
width:290,
height:40,
borderRadius:30,
justifyContent:`center`,
alignItems:`center`,
paddingLeft:70
  },
  
});
