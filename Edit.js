import React, { useState } from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
  const [name, setName] = useState(route.params.landmark.name);
  const [image, setImage] = useState(route.params.landmark.image);

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        value={name}
        style={{ borderWidth: 1 }}
        onChangeText={setName}
      />

      <Text>Image URL:</Text>
      <TextInput
        value={image}
        style={{ borderWidth: 1 }}
        onChangeText={setImage}
      />

      <Button
        title="Save"
        onPress={() => {
          let indexnum = 0;
          if (route.params.continent === 'Asia') {
            indexnum = 1;
          } else if (route.params.continent === 'North America') {
            indexnum = 2;
          }
          datasource[indexnum].data[route.params.index] = { name, image };
          navigation.navigate('Home');
        }}
      />

      <Button
        title="Delete"
        onPress={() => {
          let indexnum = 0;
          if (route.params.continent === 'Asia') {
            indexnum = 1;
          } else if (route.params.continent === 'North America') {
            indexnum = 2;
          }
          Alert.alert('Are you sure?', '',
            [
              {
                text: 'Yes',
                onPress: () => {
                  datasource[indexnum].data.splice(route.params.index, 1);
                  navigation.navigate('Home');
                }
              },
              { text: 'No' }
            ]
          );
        }}
      />

      <StatusBar translucent={false} />
    </View>
  );
};

export default Edit;
