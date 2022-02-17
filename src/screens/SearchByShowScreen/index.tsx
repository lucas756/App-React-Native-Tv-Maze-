import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Button, FlatList, StyleSheet } from 'react-native';
import AppScreen from '../../components/AppScreen'
import { searchByShow } from '../../serverAPI'
import { styles } from '../../styles/SearchScreen'

const SearchByShowScreen = (props: any) =>
{
    let [showInfVar, setShowsInf] = useState([
        {
            show:
            {
                "id": 250,
                "url": "https://www.tvmaze.com/shows/250/kirby-buckets",
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg"
                },
                "name": "Kirby Buckets",
                "language": "English",
                "type": "Scripted",
                "genres": [
                    "Drama",
                    "Romance"
                ],
                "network": {
                    "id": 8,
                    "name": "HBO",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    }
                },
            }
        }
    ])
    let [searchTxtVar, setSearchTxt] = useState("")

    let searchByShowBtn = () =>
    {
        searchByShow(searchTxtVar, (ResVar: any) => 
        {
            console.log("ResVar", ResVar.length)
            setShowsInf(ResVar.slice(0, 10))
        })
    }

    let searchByPeopleBtn = () =>
    {
        props.navigation.navigate('SearchByPeople')
    }

    let ShowsView = ({ item, index }) =>
        <View key={index+1} style={styles.showItmCls}>
            <View style={styles.imageView}>
                <Image source={{
                    width: 60,
                    height: 100,
                    uri: item.show.image ?
                        item.show.image.medium :
                        "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
                }} />
            </View>
            <View>
                <Text style={styles.txtDtlCls}>
                    Name : {item.show.name}
                </Text>
                <Text style={styles.txtDtlCls}>
                    Type : {item.show.type}
                </Text>
                <Text style={styles.txtDtlCls}>
                    Genres : {item.show.genres.map(g =>
                        <Text>{g}, </Text>)}
                </Text>
                <Text style={styles.txtDtlCls}>
                    Network : {item.show.network ? item.show.network.name : ""}
                </Text>
            </View>
        </View>

    return (
        <AppScreen>
            <TextInput style={styles.searchIptCls}
                placeholder="Pesquisar Filmes"
                placeholderTextColor='#888'
                onChangeText={setSearchTxt} />
            <Button
                title="Search"
                onPress={searchByShowBtn} />

            <FlatList
                style={{ width: "98%" }}
                data={showInfVar}
                renderItem={ShowsView}
                keyExtractor={(item) => item.id} />
    


        </AppScreen>
    );
}

export default SearchByShowScreen