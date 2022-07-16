import React from 'react'
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'
import { Text } from 'react-native'
import useTheme from '../styles/useTheme'
import { Product } from '../types/product'

const POPULAR_IMAGE_SIZE = 60

interface CategorySelectorProps {
  style?: StyleProp<ViewStyle>
  items: Array<Product>
  value: Product
  onProductSelected: (item: Product) => void
}

const ProductSelector: React.FC<CategorySelectorProps> = ({
  style,
  items,
  value,
  onProductSelected
}) => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <View
      testID={'select-products'}
      style={[
        styles.categorySelector,
        { backgroundColor: colors.BACKGROUND },
        style
      ]}>
      {items.map((product, index) => (
        <TouchableOpacity
          testID={`select-products-${product.id}`}
          key={index}
          onPress={() => onProductSelected(product)}>
          <View style={styles.popularCategory}>
            <Image source={product.image} style={styles.popularImage} />
            <Text
              style={{
                color: value.id === product.id ? colors.ACCENT : colors.TEXT
              }}>
              {product.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  categorySelector: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  popularImage: {
    width: POPULAR_IMAGE_SIZE,
    height: POPULAR_IMAGE_SIZE,
    borderRadius: POPULAR_IMAGE_SIZE / 2,
    marginBottom: 10
  },
  popularCategory: {
    alignItems: 'center'
  }
})

export default ProductSelector
