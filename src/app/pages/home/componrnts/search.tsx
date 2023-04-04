import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Divider from '../../../../base/components/ui_component/divider';

type Props = {
  setTextSearch: Function;
};

const Search = ({setTextSearch}: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="ค้นหาสินค้า"
          onChangeText={text => setTextSearch(text)}
        />
      </View>
      <Divider />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
