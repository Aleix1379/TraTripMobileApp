import React from 'react'
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { Text } from 'react-native'
import useTheme from '../styles/useTheme'
import { Product } from '../types/product'

const POPULAR_IMAGE_SIZE = 60

interface CategorySelectorProps {
  style?: StyleProp<ViewStyle>
  items: Array<Product>
  onProductSelected: (item: Product) => void
}

const ProductSelector: React.FC<CategorySelectorProps> = ({
  style,
  items,
  onProductSelected
}) => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <View
      style={[
        styles.categorySelector,
        { backgroundColor: colors.BACKGROUND },
        style
      ]}>
      {items.map((product, index) => (
        <View
          style={styles.popularCategory}
          key={index}
          onTouchEnd={() => onProductSelected(product)}>
          <Image source={product.image} style={styles.popularImage} />
          <Text>{product.name}</Text>
        </View>
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
