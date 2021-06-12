import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen'
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: "Red Jacket",
        subTitle: "$400",
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: "Couch",
        subTitle: "$1000",
        image: require('../assets/couch.jpg') 
    }
]

function ListingScreen(props) {
    return (
        <Screen style={styles.container}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => <Card title={item.title}
                subTitle={item.subTitle}
                image={item.image}
                />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        padding: 20
    }
})
export default ListingScreen;