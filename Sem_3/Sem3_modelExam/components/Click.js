import { Text, TouchableOpacity } from 'react-native';

export default function Click({buttonStyle, text, textStyle}) {
  return (
    <TouchableOpacity style={{...buttonStyle}}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}