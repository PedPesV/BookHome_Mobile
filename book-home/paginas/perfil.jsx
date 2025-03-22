import React, {useEffect, useState} from 'react'
import {View, ScrollView, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default function Index ({navigation}){
    return(
        <View style={style.container}>
            <View style={style.header}></View>
            <ScrollView contentContainerStyle={style.body}>
                <img src="../assets/images/logo.png"/>
            </ScrollView>
            <View style={style.foot}></View>
        </View>
    )    
}

const style = StyleSheet.create({
    
})