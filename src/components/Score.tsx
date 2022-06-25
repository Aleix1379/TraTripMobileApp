import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const STAR_SIZE = 20

interface ScoreProps {
  score: number
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  const stars = [1, 2, 3, 4, 5].map(star => {
    const color = star <= score ? '#ffb400' : '#ccc'

    return (
      <View key={star} style={styles.star}>
        <FontAwesomeIcon icon={faStar} size={STAR_SIZE} style={{ color }} />
      </View>
    )
  })
  return <View style={styles.score}>{stars}</View>
}

const styles = StyleSheet.create({
  score: {
    flexDirection: 'row'
  },
  star: {
    marginHorizontal: 3
  },
  starImage: {
    width: 18,
    height: 18,
    fill: '#ffb400'
  }
})
export default Score
