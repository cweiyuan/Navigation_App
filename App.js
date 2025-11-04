import React, {useState} from 'react';
import { View, ScrollView, Image, Text, Button, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';



const GameApp = () => {
  // store the selected answers for each question
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  
  const handleSubmit = () => {
    let score = 0;

    if (answer1 === 'Mobile Legends') score++;
    if (answer2 === 'Maple Story') score++;
    if (answer3 === 'Valorant') score++;
    if (answer4 === 'League of Legends') score++;

  if (score < 2) {
    Alert.alert(`You got ${score} point${score !== 1 ? 's' : ''} correct! Try harder next time!`);
  } 
  
  else {
    Alert.alert(`Congrats! You got ${score} point${score !== 1 ? 's' : ''} correct!, Nice Job!`);
  }
};

return (
    <ScrollView>

      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginVertical: 10
        }}>
        Question 1: Can you identify this legendary game? 🎮
      </Text>

      <Text style={{ fontStyle: 'italic', color: 'gray', marginBottom: 5 }}>
          Hint: This game is famous for its MOBA battles!
      </Text>

      <Image
        source={require('./img/ML.jpg')}
        style={{ width: 400, height: 300, borderRadius: 10 }}
      />
      <Picker
        selectedValue={answer1}
        onValueChange={(value) => setAnswer1(value)}>
          <Picker.Item label="Select a game..." value="" />
          <Picker.Item label="Mobile Legends" value="Mobile Legends" />
          <Picker.Item label="Maple Story" value="Maple Story"/>
          <Picker.Item label="Valorant" value="Valorant"/>
          <Picker.Item label="League of Legends" value="League of Legends"/>
      </Picker>
      
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginVertical: 10
        }}>
        Question 1: Can you identify this legendary game? 🎮
      </Text>

      <Text style={{ fontStyle: 'italic', color: 'gray', marginBottom: 5 }}>
          Hint: This game is famous for its MOBA battles!
      </Text>

      <Image
        source={require('./img/MS.jpg')}
        style={{ width: 400, height: 300, borderRadius: 10 }}
      />
      <Picker
        selectedValue={answer2}
        onValueChange={(value) => setAnswer2(value)}>
          <Picker.Item label="Select a game..." value="" />
          <Picker.Item label="Mobile Legends" value="Mobile Legends" />
          <Picker.Item label="Maple Story" value="Maple Story"/>
          <Picker.Item label="Valorant" value="Valorant"/>
          <Picker.Item label="League of Legends" value="League of Legends"/>
      </Picker>  

      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginVertical: 10
        }}>
        Question 1: Can you identify this legendary game? 🎮
      </Text>

      <Text style={{ fontStyle: 'italic', color: 'gray', marginBottom: 5 }}>
          Hint: A side-scrolling MMORPG with cute 2D characters and an adventurous world.
      </Text>
      
      <Image
        source={require('./img/VALORANT.jpg')}
        style={{ width: 400, height: 300, borderRadius: 10 }}
      />

      <Picker
        selectedValue={answer3}
        onValueChange={(value) => setAnswer3(value)}>
          <Picker.Item label="Select a game..." value="" />
          <Picker.Item label="Mobile Legends" value="Mobile Legends" />
          <Picker.Item label="Maple Story" value="Maple Story"/>
          <Picker.Item label="Valorant" value="Valorant"/>
          <Picker.Item label="League of Legends" value="League of Legends"/>
      </Picker>  


      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginVertical: 10
        }}>
        Question 1: Can you identify this legendary game? 🎮
      </Text>

      <Text style={{ fontStyle: 'italic', color: 'gray', marginBottom: 5 }}>
          Hint: A MOBA on PC famous for champions, lanes, and competitive esports.
      </Text>

      <Image
        source={require('./img/LOL.jpg')}
        style={{ width: 400, height: 300, borderRadius: 10 }}
      />

      <Picker
        selectedValue={answer4}
        onValueChange={(value) => setAnswer4(value)}>
          <Picker.Item label="Select a game..." value="" />
          <Picker.Item label="Mobile Legends" value="Mobile Legends" />
          <Picker.Item label="Maple Story" value="Maple Story"/>
          <Picker.Item label="Valorant" value="Valorant"/>
          <Picker.Item label="League of Legends" value="League of Legends"/>
      </Picker> 
      
        
      <Button
        title="Submit"
        color="green"
        onPress={handleSubmit}
      />

    </ScrollView>
  );
};
export default GameApp;
