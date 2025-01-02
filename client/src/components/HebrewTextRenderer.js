import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const HebrewTextRenderer = ({ text, onWordPress }) => {
  const words = text.split(' ');

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {words.map((word, index) => (
          <TouchableOpacity
            key={`${word}-${index}`}
            onPress={() => onWordPress(word)}
            style={styles.wordContainer}
          >
            <Text style={styles.hebrewText}>{word}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    padding: 16,
  },
  wordContainer: {
    marginHorizontal: 4,
    marginVertical: 2,
  },
  hebrewText: {
    fontFamily: 'NotoSansHebrew',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'right',
    writingDirection: 'rtl',
  },
});

export default HebrewTextRenderer;