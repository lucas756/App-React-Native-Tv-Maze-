import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppScreen from '../../../src/components/AppScreen'
import { getShows } from './../../serverAPI'

const HomeScreen = () => {
    let [showInfVar, setShowsInf] = useState([
        {
            "id": 250,
            "url": "https://www.tvmaze.com/shows/250/kirby-buckets",
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg"
            },
            "name": "Kirby Buckets",
            "language": "English",
        }
    ])

    useEffect(() => {
        getShows((ResVar: any) => {
            console.log("ResVar", ResVar.length)
            setShowsInf(ResVar.slice(0, 20))
        })
    }, [])

    return (
        <AppScreen needScroll={true}>
            <View style={styles.flexCls}>
                {
                    showInfVar.map((showItmVar, idx) =>
                        <View style={{
                            marginTop: idx === 0 ? 50 : 300 ,
                            width: "100%",
                            height: 150,
                            alignItems: 'center',
                            marginVertical: 4,
                            marginBottom: idx == showInfVar.length - 1 ? 300 : 0

                        }} key={idx} >
                            <Image source={{
                                width: 280,
                                height: 400,
                                uri: showItmVar.image ?
                                    showItmVar.image.medium :
                                    "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
                            }} />
                            <Text style={{ fontSize: 20, fontFamily: 'sans-serif' }} >{showItmVar.name} - {showItmVar.language}</Text>
                        </View>
                    )
                }
            </View>


        </AppScreen>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    flexCls: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
})