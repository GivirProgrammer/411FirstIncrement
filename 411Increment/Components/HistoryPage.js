import React, { useEffect, useState } from "react";
import {
    Text, View, FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import { firebase } from '../config';
import { useNavigation } from "@react-navigation/native";

const InfoCard = ({ completed, description }) => {
    return (
        <View style={[styles.card,completed ? styles.trueCondition : styles.falseCondition]}>
            {/* <Image sour style={styles.title}>{title}</Image> */}
            <Image source={require(`../assets/pullup.png`)} resizeMode="contain"></Image>
            <Text>{description}</Text>
            
        </View>
    );
};

export default function HistoryPage({ route }) {
    const { selectedDate } = route.params;
    let content=[];
    let selectedIndex;

    const navigation = useNavigation();
    const activities = [{
        completed: 8,
        date: "2024-02-05",
        exerciseTypes: [{name:"Push up",completed:true},{name:"Pull up",completed:true},{name:"Cardio",completed:false}],
        goal: 10
    }, {
        completed: 7,
        date: "2024-02-06",
        exerciseTypes: [{name:"Push up",completed:true},{name:"Pull up",completed:false},{name:"Cardio",completed:false}],
        goal: 10
    }, {
        completed: 10,
        date: "2024-02-07",
        exerciseTypes: [{name:"Push up",completed:true},{name:"Pull up",completed:true},{name:"Cardio",completed:true}],
        goal: 10
    }]






    console.log("History", activities[0].exerciseTypes[1].name);

    headerComponent = () => {
        return <Text>Exercises</Text>
    }

    activities.map((data,index)=>{
        if(data.date===selectedDate){
            content=data.exerciseTypes;
            selectedIndex=index;
        }
    })

    console.log("content",content);

    return (
        <ScrollView style={styles.container}>
            <Text style={{marginBottom:30}}>Total completed workouts {activities[selectedIndex].completed}/{activities[selectedIndex].goal}</Text>
          
            {content.map((card,index)=>(
                <InfoCard completed={card.completed} title={card.name} description={card.name}></InfoCard>
            ))}
        </ScrollView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: '#F5F5F5', // Background color for the container
        paddingTop:StatusBar.currentHeight,
    },
    card: {
        
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    trueCondition:{
        backgroundColor:"green",
    },
    falseCondition:{
        backgroundColor:"red"
    }
})