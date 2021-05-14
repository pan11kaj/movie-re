import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Card,Header} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';
export default class PopularScreen extends React.Component{
constructor(props){
    super(props);
    this.state={
        data:[]
    }
}



get_data=()=>{
    const url = 'http://127.0.0.1:5000/popular-movies'
    axios
    .get(url)
    .then(async response=>{
        this.setState({data:response.data.data});
    })
    .catch(error=>{
        console.log(error.message);
    })
}
renderItem=({index,item})=>{
    return(
        <Card
        key={`card-${index}`}
        image={{uri:item.poster_link}}
        imageProps = {{resizeMode:"cover"}}
        featuredTitle = {item.title}
        containerStyle={styles.cardContainer}
        featuredTitleStyle = {styles.title}
        featuredSubTitle = {`${item.release_date.split("-")[0]}| ${this.timeConvert(item.duration)}`}
        featuredSubTitleStyle = {styles.subTitle}
    >
    
        </Card>
    )
    }
timeConvert(num){
       var hours = Math.floor(num/60)
        var minutes = num%60
        
        return `${hours} hrs ${minutes} mins`
        }
    
    componentDidMount(){
        this.get_data()
    }
        render(){
            const data = this.state
            return(
                <View>
                    <FlatList
                    data = {data}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    
                    />
                </View>
            )
        }
    }
    const styles = StyleSheet.create({ 
        container: { flex: 1, backgroundColor: "#fff" }, 
        title: { color: "#fff", alignSelf: "flex-start", paddingLeft: RFValue(15), fontSize: RFValue(25), marginTop: RFValue(65) },
        subtitle: { fontWeight: "bold", alignSelf: "flex-start", paddingLeft: RFValue(15), fontSize: RFValue(15) },
        cardContainer: { flex: 1, borderRadius: RFValue(10), justifyContent: "center", height: RFValue(110), marginBottom: RFValue(20) } });