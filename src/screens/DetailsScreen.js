import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function DetailsScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title="Go to Details... again" onPress={() => navigation.push('Details')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back to first screen" onPress={() => navigation.popToTop()} />
        </View>
    );
}

export default DetailsScreen;
