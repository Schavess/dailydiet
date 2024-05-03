import { Container, Content, Logo, Perfil } from './styles';

import logoImg from '../../assets/logo.png'
import perfilImg from '../../assets/illustrationperfil.png'

export function LogoHeader() {
  return (
    <Container>
      <Content>
        <Logo source={logoImg} />
        <Perfil source={perfilImg} />
      </Content>
    </Container>
  )
}