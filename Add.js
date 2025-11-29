import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { datasource } from './Data';

const Add = ({ navigation }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [continent, setContinent] = useState('Europe');

  return (
    <View>
      <Text>Name:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setName} />

      <Text>Image URL:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setImage} />

      <Picker onValueChange={(value) => setContinent(value)} selectedValue={continent}>
        <Picker.Item label="Europe" value="Europe" />
        <Picker.Item label="Asia" value="Asia" />
        <Picker.Item label="North America" value="North America" />
      </Picker>

      <Button
        title="Submit"
        onPress={() => {
          let item = { name: name, image: image };

          let indexnum = 0;
          if (continent === 'Asia') {
            indexnum = 1;
          } else if (continent === 'North America') {
            indexnum = 2;
          }

          datasource[indexnum].data.push(item);
          navigation.navigate('Home');
        }}
      />

      <StatusBar translucent={false} />
    </View>
  );
};

export default Add;
