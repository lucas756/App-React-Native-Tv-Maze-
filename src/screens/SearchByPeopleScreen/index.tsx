import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Button, FlatList } from 'react-native';
import AppScreen from '../../components/AppScreen'
import { searchByPeople } from '../../serverAPI'
import { styles } from '../../styles/SearchScreen'

const SearchByPeopleScreen = (props: any) =>
{
    let [showInfVar, setShowsInf] = useState([
        {
            person:
            {
                "id": 250,
                "url": "https://www.tvmaze.com/shows/250/kirby-buckets",
                "image": {
                    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg",
                    "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg"
                },
                "name": "Kirby Buckets",
                "language": "English",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                },
                "birthday": "1921-06-18",
                "deathday": "1984-08-30",
                "gender": "Male",
            }
        }
    ])
    let [searchTxtVar, setSearchTxt] = useState("")

    let searchByPeopleBtn = () =>
    {
        searchByPeople(searchTxtVar, (ResVar: any) => 
        {
            setShowsInf(ResVar.slice(0, 5))
        })
    }

    let searchByShowBtn = () =>
    {
        props.navigation.navigate('SearchByShow')
    }

    let PersonView = ({ item, index}) =>
        <View key={index+1} style={styles.showItmCls}>
            <View style={styles.imageView}>
                <Image source={{
                    width: 60,
                    height: 100,
                    uri: item.person.image ?
                        item.person.image.medium :
                        "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
                }} />
            </View>
            <View>
                <Text style={styles.txtDtlCls}>
                    Name : {item.person.name}
                </Text>
                <Text style={styles.txtDtlCls}>
                    Gender : {item.person.gender ?? item.person.gender}
                </Text>
                <Text style={styles.txtDtlCls}>
                    Birthday : {item.person.birthday ?? item.person.birthday}
                </Text>
                <Text style={styles.txtDtlCls}>
                    Country : {item.person.country ? item.person.country.name : ""}
                </Text>
            </View>
        </View>
 
    return (
        <AppScreen>
            <TextInput style={styles.searchIptCls}
                placeholder="Pesquisar Personagens"
                placeholderTextColor='#888'
                onChangeText={setSearchTxt} />
            <Button
                title="Search"
                onPress={searchByPeopleBtn} />

            <FlatList
                style={{ width: "98%" }}
                data={showInfVar}
                renderItem={PersonView}
                keyExtractor={(item) => item.id} />

            
        </AppScreen>
    );
}

export default SearchByPeopleScreen
