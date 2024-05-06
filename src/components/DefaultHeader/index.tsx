import { TouchableOpacityProps } from "react-native";
import { Container, Content, Text, ForwardIcon } from './styles';


export function DefaultHeader({ ...rest }) {


  return (
    <Container {...rest}>
      <Content>
        <ForwardIcon />
        <Text>Nova Refeição</Text>
      </Content>
    </Container>
  )
}