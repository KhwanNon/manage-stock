import React from 'react';
import {Text, View} from 'react-native';
import stylesGlobal from '../../../../base/styles_global';
import {colorText, colorText2} from '../../../../base/color';
import Row from '../../../../base/components/ui_component/row';

type Props = {
  title: string;
  value: string;
  color?: string;
  state?: 'normal' | 'special';
};

const RowData = ({
  title,
  value,
  state = 'normal',
  color = colorText,
}: Props) => {
  const renderTextSpecial = () => (
    <View
      style={{
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 20,
        backgroundColor: color,
      }}>
      <Text style={{color: 'white'}}>
        {value === 'ready' ? 'พร้อมขาย' : 'ใกล้หมด'}
      </Text>
    </View>
  );

  const renderTextNormal = () => <Text style={{color: color}}>{value}</Text>;

  return (
    <Row style={[stylesGlobal.between, {marginBottom: 7}]}>
      <Text style={{color: colorText2}}>{title}</Text>
      {state === 'normal' ? renderTextNormal() : renderTextSpecial()}
    </Row>
  );
};

export default RowData;
