import React, { useState } from 'react'
import {
  Image,
  ImageSourcePropType,
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
  adventure: {
    id: number
    image: ImageSourcePropType
  }
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
  const [typeTourSelected, setTypeTourSelected] = useState(typeOfTours[0])
  const [adventures] = useState<Array<ExploreState['adventure']>>([
    {
      id: 1,
      image: require('../../assets/images/adventure-1.png')
    },
    {
      id: 2,
      image: require('../../assets/images/adventure-3.png')
    },
    {
      id: 3,
      image: require('../../assets/images/adventure-2.png')
    },
    {
      id: 4,
      image: require('../../assets/images/adventure-4.png')
    },
    {
      id: 5,
      image: require('../../assets/images/adventure-4.png')
    }
  ])

  const selectTypeOfTour = (product: Product) => {
    setTypeTourSelected(product)
  }

  const goToTourDetails = (id: number) => {
    navigation.navigate('TourDetails', { id })
  }

  const renderAdventure = (
    adventure: ExploreState['adventure'],
    index: number
  ) => {
    return (
      <TouchableOpacity
        testID={`adventure-${adventure.id}`}
        key={index}
        onPress={() => goToTourDetails(adventure.id)}>
        <Image source={adventure.image} style={styles.image} />
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView
      style={[styles.explore, { backgroundColor: colors.BACKGROUND }]}>
      <Text style={[styles.title, { color: colors.GREY }]}>Type of tour</Text>
      <ProductSelector
        items={typeOfTours}
        value={typeTourSelected}
        onProductSelected={selectTypeOfTour}
        style={styles.productSelector}
      />
      <Text style={[styles.title, { marginTop: 20, color: colors.GREY }]}>
        Best Adventure
      </Text>

      <View style={styles.images}>
        <View style={[styles.imageContainer, { marginRight: '2.5%' }]}>
          {adventures
            .filter((_, index) => index % 2 === 0)
            .map((adventure, index) => renderAdventure(adventure, index))}
        </View>
        <View style={[styles.imageContainer, { marginLeft: '2.5%' }]}>
          {adventures
            .filter((_, index) => index % 2 !== 0)
            .map((adventure, index) => renderAdventure(adventure, index))}
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
