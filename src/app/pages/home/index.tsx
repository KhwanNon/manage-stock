import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import Header from './componrnts/header';
import OrdersItems from './componrnts/orders_items';

import stylesGlobal from '../../../base/styles_global';
import {OrderItemModel, orderDefault} from '../../../base/constant';

const HomePage = () => {
  const [data, setData] = useState<OrderItemModel[]>(orderDefault);

  return (
    <View style={{...stylesGlobal.container, flex: 1}}>
      <Header dataOrder={data} setDataOrder={setData} />
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <OrdersItems dataOrder={data} setDataOrder={setData} />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomePage;
