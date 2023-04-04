import ModalManage from '../modal';
import React, {useState} from 'react';
import {OrderItemModel} from '../../../../base/constant';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Box from '../../../../base/components/ui_component/box';
import Column from '../../../../base/components/ui_component/column';
import Divider from '../../../../base/components/ui_component/divider';
import Row from '../../../../base/components/ui_component/row';
import stylesGlobal from '../../../../base/styles_global';
import {colorSkyBlue} from '../../../../base/color';

type Props = {
  dataOrder: OrderItemModel[];
  setDataOrder: Function;
};

const Header = ({dataOrder, setDataOrder}: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Column style={{padding: 15}}>
        <Row style={stylesGlobal.between}>
          <Text style={styles.textTitle}>จัดการ stock สินค้า</Text>
          <TouchableOpacity
            style={styles.boxAdd}
            onPress={() => setOpenModal(true)}>
            <Text style={{color: 'white'}}>+ เพิ่มสินค้า</Text>
          </TouchableOpacity>
        </Row>

        <Box h={10} />
        <Text style={{color: 'black'}}>
          บริหารสินค้าในคลังคุณให้พร้อมขายอยู่เสมอ
        </Text>
      </Column>
      <Divider />

      <ModalManage
        state={'add'}
        open={openModal}
        dataOrder={dataOrder}
        setOpen={setOpenModal}
        setDataOrder={setDataOrder}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textTitle: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  boxAdd: {
    height: 40,
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorSkyBlue,
  },
});

export default Header;
