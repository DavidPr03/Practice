import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SettingsScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Button title="Go to Settings again" onPress={() => navigation.push('Settings')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default SettingsScreen;
