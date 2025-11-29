import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SectionList, Image, Button } from 'react-native';
import { datasource } from './Data.js';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
  },

  // whole row
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 28,
  },

  // left spacer
  nameSpacer: {
    width: 30,
  },

  // fixed-width name column
  nameContainer: {
    width: 140,
    marginVertical: 10,
    paddingLeft: 35,
  },

  textStyle: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  // image column
  cardWrapper: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 30,
  },

  cardImage: {
    width: 150,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
  },

  headerText: {
    fontSize: 20,
    margin: 0,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  smallHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
});

const renderItem = ({ item, index, section, navigation }) => (
  <TouchableOpacity
    style={styles.opacityStyle}
    onPress={() =>
      navigation.navigate('Edit', {
        index: index,
        continent: section.title,
        landmark: item,
      })
    }
  >
    <View style={styles.rowContainer}>
      <View style={styles.nameSpacer} />
      <View style={styles.nameContainer}>
        <Text style={styles.textStyle}>{item.name}</Text>
      </View>
      <View style={styles.cardWrapper}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
      </View>
    </View>
  </TouchableOpacity>
);

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Button title="Add Landmark" onPress={() => navigation.navigate('Add')} />
      <View style={{ margin: 10, flex: 1 }}>
        <SectionList
          contentContainerStyle={{ padding: 10 }}
          sections={datasource}
          renderItem={(props) => renderItem({ ...props, navigation })}
          renderSectionHeader={({ section }) => (
            <View style={styles.opacityStyle}>
              <View style={[styles.smallHeaderRow, { backgroundColor: section.bgcolor }]}>
                <Text style={[styles.headerText, { color: '#fff' }]}>
                  {section.title}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <StatusBar translucent={false} />
    </View>
  );
};

export default Home;
 