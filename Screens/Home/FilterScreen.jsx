import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const FilterScreen = () =>{
    return(
        <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
        <ScrollView>
            <View style={styles.viewFiFa}>
                <View>
                    <Text style={styles.textFine}>Fine Your</Text>
                    <Text style={styles.textFine}>Favorite Food</Text>
                </View>
                <Image  source={require('../../assets/Home/Notification.png')}></Image>
            </View>
            <View style={styles.viewSearch}>
                <View style={styles.viewsearch}>
                    <Image source={require('../../assets/Home/Search.png')} style={{ position:'relative',left:50,top:13 }}></Image>
                    <TextInput style={styles.textInput} placeholder="What do you want to order"/>
                </View>
                <Image source={require('../../assets/Home/FilterIcon.png')}></Image>
            </View>
            <View style={styles.viewType}>
                <Text style={styles.textType}>Type</Text>
            </View>
            <View style={styles.viewListType}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textRes}>Restaurant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text  style={styles.textRes}>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewType}>
                <Text style={styles.textType}>Location</Text>
            </View>
            <View style={styles.viewListType}>
                <TouchableOpacity style={styles.button}>
                    <Text  style={styles.textRes}>1 Km</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textRes}>&gt; 10 Km</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textRes}>&lt;  10 Km</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewType}>
                <Text style={styles.textType}>Food</Text>
            </View>
            <View style={styles.viewListType}>
                <TouchableOpacity  style={styles.button} >
                    <Text style={styles.textRes}>Cake</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.textRes}>Soup</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.textRes}>Main Course</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.textRes}>Appetizer</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.textRes}>Dessert</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </ImageBackground>
    )
}
const styles =StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
      },
      viewFiFa:{
        paddingTop:60,
        paddingLeft:31,
        flexDirection:'row',
        justifyContent:'space-between',
      },
      textFine:{
        fontSize:31,
        fontWeight:'600',
        lineHeight:40.62,
      },
      viewSearch:{
        flexDirection:'row',
        paddingRight:60,
        paddingBottom:20
      },
      viewsearch:{
        flexDirection:'row',
      },
      textInput:{
        width:'90%',
        borderRadius:15,
        backgroundColor:'#6B50F6',
        opacity:0.1,
        paddingBottom:17,
        paddingLeft:53,
        paddingTop:17,
        color:'black',
        height:50
      },
      viewType:{
        paddingLeft:25,
        paddingBottom:20
      },
      textType:{
        color:'#22242E',
        fontSize:15,
        lineHeight:19.65,
        fontWeight:'400'
      },
      viewListType:{

      },
      viewListType:{
        paddingLeft: 25,
        flexDirection: 'row',
        flexWrap: 'wrap', // Cho phép các mục tự động xuống hàng khi không đủ không gian
        gap: 20,
        paddingBottom: 20,
        alignItems: 'center', // Căn chỉnh các mục theo trục dọc
        width: '100%' // Đảm bảo rằng View có đủ chiều rộng để chứa 3 mục trên mỗi hàng

      },
      button:{
        backgroundColor:'rgba(0, 255, 102, 0.10)',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:14,
        paddingBottom:14,
        borderRadius:15
      },
      textRes:{
        color:'#6B50F6',
        fontSize:12,
        fontWeight:'500'
      }

})
export default FilterScreen;