import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  colorText,
  colorGreen,
  colorSkyBlue,
  colorYellow,
} from '../../../base/color';

import stylesGlobal from '../../../base/styles_global';
import {OrderItemModel} from '../../../base/constant';
import Row from '../../../base/components/ui_component/row';
import Box from '../../../base/components/ui_component/box';
import Divider from '../../../base/components/ui_component/divider';
import ButtonText from '../../../base/components/ui_component/button_text';
import ButtonStyle from '../../../base/components/ui_component/button_style';

type Props = {
  open: boolean;
  setOpen: Function;
  state: 'add' | 'edit';
  dataOrder: OrderItemModel[];
  setDataOrder: Function;
  index?: number;
  item?: OrderItemModel;
};

const ModalManage = ({
  open,
  setOpen,
  state,
  item,
  dataOrder,
  setDataOrder,
  index,
}: Props) => {
  const close = () => setOpen(false);

  const [data, setData] = useState<OrderItemModel>({
    sku: '',
    orderName: '',
    price: '',
    stock: '',
    booking: '',
    sell: '',
    status: 'not ready',
  });

  const [placeholder, setPlaceholder] = useState<OrderItemModel>({
    sku: 'รหัส',
    orderName: 'ชื่อสินค้า',
    price: 'ราคาสินค้า',
    stock: 'จำนวนสต็อก',
    booking: 'จำนวนที่จอง',
    sell: 'จำนวนที่ขายได้',
    status: 'ready',
  });

  useEffect(() => {
    if (state === 'edit') {
      setPlaceholder({
        sku: item?.sku ?? '',
        orderName: item?.orderName ?? '',
        price: item?.price ?? '',
        stock: item?.stock ?? '',
        booking: item?.booking ?? '',
        sell: item?.sell ?? '',
        status: item?.status ?? 'not ready',
      });
      setData({
        sku: item?.sku ?? '',
        orderName: item?.orderName ?? '',
        price: item?.price ?? '',
        stock: item?.stock ?? '',
        booking: item?.booking ?? '',
        sell: item?.sell ?? '',
        status: item?.status ?? 'not ready',
      });
    }
  }, [item]);

  const renderLabel = (text: string) => (
    <Text style={{color: colorText}}>{text}</Text>
  );

  const onSubmit = () => {
    if (state === 'edit') {
      const updatedData = [...dataOrder];
      updatedData[index ?? 0] = {...updatedData[index ?? 0], ...data};
      setDataOrder(updatedData);
    } else {
      const newData = [...dataOrder, data];
      setDataOrder(newData);
    }
    close();
  };

  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Row style={stylesGlobal.between}>
              <Box w={25} />
              <Text style={styles.textHeader}>
                {state === 'add' ? 'เพิ่มรายการ' : 'แก้ไขรายการ'}
              </Text>
              <ButtonText
                color={'black'}
                title={'Close'}
                fontSize={16}
                onTap={close}
              />
            </Row>

            <Box h={10} />
            {renderLabel('SKU')}
            <TextInput
              placeholder={placeholder.sku}
              onChangeText={sku => setData({...data, sku})}
            />
            <Divider />

            <Box h={10} />
            {renderLabel('สินค้า')}
            <TextInput
              placeholder={placeholder.orderName}
              onChangeText={orderName => setData({...data, orderName})}
            />
            <Divider />

            <Box h={10} />
            {renderLabel('ราคา')}
            <TextInput
              placeholder={placeholder.price}
              onChangeText={price => setData({...data, price})}
            />
            <Divider />

            <Box h={10} />
            {renderLabel('สต็อก')}
            <TextInput
              placeholder={placeholder.stock}
              onChangeText={stock => setData({...data, stock})}
            />
            <Divider />

            <Box h={10} />
            {renderLabel('จอง')}
            <TextInput
              placeholder={placeholder.booking}
              onChangeText={booking => setData({...data, booking})}
            />
            <Divider />

            <Box h={10} />
            {renderLabel('ขายแล้ว')}
            <TextInput
              placeholder={placeholder.sell}
              onChangeText={sell => setData({...data, sell})}
            />
            <Divider />

            <Box h={20} />
            <Row>
              <TouchableOpacity
                onPress={() => {
                  setData({...data, status: 'ready'});
                }}
                style={[
                  styles.box,
                  {
                    backgroundColor:
                      data.status == 'ready' ? colorGreen : 'grey',
                  },
                ]}>
                <Text style={{color: 'white'}}>พร้อมขาย</Text>
              </TouchableOpacity>
              <Box w={10} />
              <TouchableOpacity
                onPress={() => {
                  setData({...data, status: 'not ready'});
                }}
                style={[
                  styles.box,
                  {
                    backgroundColor:
                      data.status == 'not ready' ? colorYellow : 'grey',
                  },
                ]}>
                <Text style={{color: 'white'}}>ใกล้หมด</Text>
              </TouchableOpacity>
            </Row>
          </View>

          <Box h={10} />
          <ButtonStyle
            height={40}
            width={'100%'}
            colorTxt={state === 'add' ? 'white' : 'black'}
            onTap={onSubmit}
            title={state === 'add' ? 'เพิ่ม' : 'แก้ไข'}
            backgroundColor={state === 'add' ? colorSkyBlue : 'lightgrey'}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  textHeader: {color: colorText, fontWeight: 'bold', fontSize: 16},
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#00000060',
  },
  card: {
    padding: 15,
    height: 650,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});

export default ModalManage;
