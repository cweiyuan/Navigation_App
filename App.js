import React, { useState } from 'react';
import { View, ScrollView, Image, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GameApp = () => {
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
    } else {
      Alert.alert(`Congrats! You got ${score} point${score !== 1 ? 's' : ''} correct! Nice Job!`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Decorative Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>
          🎮 Ultimate Game Quiz 🎮
        </Text>
        <Text style={styles.headerSubtitle}>
          Test Your Gaming Knowledge!
        </Text>
        <View style={styles.headerDecorativeBar} />
      </View>

      {/* Question 1 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>Can you identify this legendary game? 🎮</Text>
        <Text style={styles.hintText}>Hint: This game is famous for its MOBA battles!</Text>
        <Image source={require('./img/ML.jpg')} style={styles.questionImage} />
        <Picker
          selectedValue={answer1}
          onValueChange={(value) => setAnswer1(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select a game..." value="" />
          <Picker.Item label="Mobile Legends" value="Mobile Legends" />
          <Picker.Item label="Maple Story" value="Maple Story"/>
          <Picker.Item label="Valorant" value="Valorant"/>
          <Picker.Item label="League of Legends" value="League of Legends"/>
        </Picker>
      </View>

      {/* Question 2 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>Can you identify this legendary game? 🎮</Text>
        <Text style={styles.hintText}>Hint: A side-scrolling MMORPG with cute 2D characters.</Text>
        <Image source={require('./img/MS.jpg')} style={styles.questionImage} />
        <Picker
          selectedValue={answer2}
          onValueChange={(value) => setAnswer2(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select a game..." value="" />
          <Picker.Item label="Mobile Legends" value="Mobile Legends" />
          <Picker.Item label="Maple Story" value="Maple Story"/>
          <Picker.Item label="Valorant" value="Valorant"/>
          <Picker.Item label="League of Legends" value="League of Legends"/>
        </Picker>
      </View>

      {/* Question 3 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>Can you identify this legendary game? 🎮</Text>
        <Text style={styles.hintText}>Hint: A tactical first-person shooter with competitive esports scene.</Text>
        <Image source={require('./img/VALORANT.jpg')} style={styles.questionImage} />
        <Picker
          selectedValue={answer3}
          onValueChange={(value) => setAnswer3(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select a game..." value="" />
          <Picker.Item label="Mobile Legends" value="Mobile Legends" />
          <Picker.Item label="Maple Story" value="Maple Story"/>
          <Picker.Item label="Valorant" value="Valorant"/>
          <Picker.Item label="League of Legends" value="League of Legends"/>
        </Picker>
      </View>

      {/* Question 4 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>Can you identify this legendary game? 🎮</Text>
        <Text style={styles.hintText}>Hint: A MOBA on PC famous for champions, lanes, and competitive esports.</Text>
        <Image source={require('./img/LOL.jpg')} style={styles.questionImage} />
        <Picker
          selectedValue={answer4}
          onValueChange={(value) => setAnswer4(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select a game..." value="" />
          <Picker.Item label="Mobile Legends" value="Mobile Legends" />
          <Picker.Item label="Maple Story" value="Maple Story"/>
          <Picker.Item label="Valorant" value="Valorant"/>
          <Picker.Item label="League of Legends" value="League of Legends"/>
        </Picker>
      </View>

      {/* Decorative Submit Button */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} activeOpacity={0.8}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GameApp;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1E90FF',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 1,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00BFFF',
    marginTop: 5,
    textAlign: 'center',
  },
  headerDecorativeBar: {
    height: 6,
    width: '50%',
    backgroundColor: '#1E90FF',
    borderRadius: 50,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  questionContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 5,
    textAlign: 'center',
  },
  hintText: {
    fontStyle: 'italic',
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
  questionImage: {
    width: 350,
    height: 220,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  picker: {
    width: '90%',
    height: 50,
    marginBottom: 5,
  },
  buttonWrapper: {
    marginBottom: 30,
    width: '60%',
    alignSelf: 'center',
  },
  submitButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
