import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  colorGreen,
  colorRed,
  colorYellow,
  colorSkyBlue,
} from '../../../../base/color';

import RowData from './row_data';
import ModalManage from '../modal';
import stylesGlobal from '../../../../base/styles_global';
import {OrderItemModel} from '../../../../base/constant';
import Box from '../../../../base/components/ui_component/box';
import Row from '../../../../base/components/ui_component/row';
import ButtonText from '../../../../base/components/ui_component/button_text';
import ButtonStyle from '../../../../base/components/ui_component/button_style';
import Column from '../../../../base/components/ui_component/column';
import Search from './search';

type Props = {
  dataOrder: OrderItemModel[];
  setDataOrder: Function;
};

const OrdersItems = ({dataOrder, setDataOrder}: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [item, setItem] = useState<OrderItemModel>();
  const [index, setIndex] = useState<number>(0);
  const [textSearch, setTextSearch] = useState<string>('');

  const filteredData = dataOrder.filter(item =>
    item.orderName.toLowerCase().includes(textSearch.toLowerCase()),
  );

  const renderItem = (item: OrderItemModel, i: number) => {
    return (
      <View style={styles.card} key={`${item.sku}`}>
        <Row style={stylesGlobal.center}>
          <Text style={{color: 'black'}}>รายการสินค้า</Text>
        </Row>
        <RowData title={'SKU'} value={item.sku} />
        <RowData title={'ชื่อสินค้า'} value={item.orderName} />
        <RowData title={'ราคา'} value={`${item.price} บาท`} />
        <RowData title={'สต็อก'} value={item.stock} color={colorSkyBlue} />
        <RowData title={'จอง'} value={item.booking} color={colorSkyBlue} />
        <RowData title={'ขายแล้ว'} value={item.sell} />
        <RowData
          title={'สถานะ'}
          state="special"
          value={item.status}
          color={item.status == 'ready' ? colorGreen : colorYellow}
        />
        <Box h={10} />
        <Row style={stylesGlobal.between}>
          <ButtonStyle
            height={30}
            title={'แก้ไข'}
            width={'33%'}
            colorTxt={'black'}
            backgroundColor={'lightgrey'}
            onTap={() => {
              setIndex(i);
              setItem(item);
              setOpenModal(true);
            }}
          />
          <ButtonText
            color={colorRed}
            title={'ลบรายการสินค้า'}
            fontSize={14}
            onTap={() => {
              const newData = [...dataOrder];
              newData.splice(i, 1);
              setDataOrder(newData);
            }}
          />
        </Row>
      </View>
    );
  };

  const renderEmpty = () => (
    <Column style={[stylesGlobal.center, {marginTop: 200}]}>
      <Text>ไม่มีข้อมูลสินค้า</Text>
    </Column>
  );

  return (
    <>
      <Search setTextSearch={setTextSearch} />

      {filteredData.length == 0
        ? renderEmpty()
        : filteredData?.map((item, i) => renderItem(item, i))}

      <ModalManage
        state={'edit'}
        item={item}
        index={index}
        open={openModal}
        setOpen={setOpenModal}
        setDataOrder={setDataOrder}
        dataOrder={dataOrder}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    minHeight: 200,
    margin: 10,
    elevation: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
});

export default OrdersItems;
