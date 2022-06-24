import React, { useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import { Text } from 'react-native'
import useTheme from '../styles/useTheme'
import { Product } from '../types/product'
import ProductSelector from '../components/ProductSelector'

interface ExploreProps {
  navigation: any
}

interface ExploreState {
  typeOfTours: Array<Product>
}

const Explore: React.FC<ExploreProps> = ({ navigation }) => {
  const theme = useTheme()
  const { colors } = theme

  const [typeOfTours] = useState<ExploreState['typeOfTours']>([
    {
      id: 1,
      name: 'Adventure',
      image: require('../../assets/images/adventure.png')
    },
    {
      id: 2,
      name: 'Group',
      image: require('../../assets/images/group.png')
    },
    {
      id: 3,
      name: 'Honeymoon',
      image: require('../../assets/images/honeymoon.png')
    },
    {
      id: 4,
      name: 'Sight',
      image: require('../../assets/images/sight.png')
    }
  ])

  const selectTypeOfTour = (typeOfTour: Product) => {
    console.log('selectTypeOfTour', typeOfTour)
  }

  const goToTourDetails = (id: number) => {
    navigation.navigate('TourDetails', { id })
  }

  return (
    <ScrollView
      style={[styles.explore, { backgroundColor: colors.BACKGROUND }]}>
      <Text style={[styles.title, { color: colors.GREY }]}>Type of tour</Text>
      <ProductSelector
        items={typeOfTours}
        onProductSelected={selectTypeOfTour}
        style={styles.productSelector}
      />
      <Text style={[styles.title, { marginTop: 20, color: colors.GREY }]}>
        Best Adventure
      </Text>

      <View style={styles.images}>
        <View style={[styles.imageContainer, { marginRight: '2.5%' }]}>
          <TouchableOpacity onPress={() => goToTourDetails(1)}>
            <Image
              style={styles.image}
              source={require('../../assets/images/adventure-1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToTourDetails(1)}>
            <Image
              style={styles.image}
              source={require('../../assets/images/adventure-2.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.imageContainer, { marginLeft: '2.5%' }]}>
          <TouchableOpacity onPress={() => goToTourDetails(1)}>
            <Image
              style={styles.image}
              source={require('../../assets/images/adventure-3.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToTourDetails(1)}>
            <Image
              style={styles.image}
              source={require('../../assets/images/adventure-4.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  explore: {
    flex: 1,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 30,
    marginVertical: 5
  },
  productSelector: {
    marginVertical: 15
  },
  images: {
    flexDirection: 'row'
  },
  image: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 10
  },
  imageContainer: {
    width: '47.5%'
  }
})

export default Explore
