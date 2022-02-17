import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const RowLine = ({ lineColor = '#CCC'}) => {
    return <View style={StyShtVap(lineColor).BdrLynCss}/>
}

export const RowLineWithText = ({ text, lineColor = '#CCC'}) =>
{
    return <View style={StyShtVap().SupVyuCss}>
        <View style={StyShtVap(lineColor).RowLynCss} />
        <Text style={StyShtVap().RowTxtCss}>
            {text}
        </Text>
        <View style={StyShtVap(lineColor).RowLynCss} />
    </View>
}

const StyShtVap = (LynClrVar = "grey") => StyleSheet.create({
    BdrLynCss: {
        width: '100%',
        borderBottomColor: LynClrVar,
        borderBottomWidth: 1,
    },
    SupVyuCss: {
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    RowLynCss: { 
        flex: 1, 
        height: 1, 
        backgroundColor: LynClrVar 
    },
    RowTxtCss: { 
        width: 50, 
        textAlign: 'center' 
    }
})

{/* Usage :

|*| Import :

    import { RowLine, RowLineWithText } from './Components/RowLine'
 
------------------------------------------------
|*| Usage : 

    <RowLine />
[O] 
    <RowLine lineColor="purple"/>
    
    
    <RowLineWithText text="OR"/>
[O]
    <RowLineWithText text="OR" lineColor="purple"/>

------------------------------------------------
*/}