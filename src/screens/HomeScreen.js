import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Inicio</Text>
      <Button
        title="Ir a Detalles"
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'cualquier cosa aquí',
        })}
      />
      <Button title="Ir a Ajustes" onPress={() => navigation.navigate('Settings')} />
      <Button title="Volver a la primera pantalla" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default HomeScreen;
