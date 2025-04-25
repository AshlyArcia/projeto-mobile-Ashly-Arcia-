import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/acesso.png')}
          style={styles.logoAcesso}
        />
      }>


      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Saldo Disponivel  </ThemedText>
        <ThemedText type="defaultSemiBold">R$100.000,00.</ThemedText>{' '}
      </ThemedView>
      <ThemedView style={styles.subtitleContainerpix}>
        <Collapsible title="Area pix 💸" >
          <ThemedText >
            Selecciona uma opção para continuar:
            {'\n'}• 👥 Enviar dinheiro para seus contatos.
            {'\n'}• 📑 Gerar QR Code.
            {'\n'}• 🔑 Copiar e colar a chave Pix para transferência mais rápida.
            {'\n'}• 📜Ver seu histórico de transações.
          </ThemedText>
        </Collapsible>
      </ThemedView>
      <ThemedView style={styles.subtitleContainerextrato}>
        <Collapsible title="Extrato 📈">
          <ThemedText>
            Selecciona uma opção para continuar:
            {'\n'}• 📊 Todas as movimentações da tua conta em tempo real e atualizado.
            {'\n'}• 🗃️ Filtros por data, tipo de operação ou valor de maneira organizados.
            {'\n'}• 📑 Detalhes de cada transação, com ícones e descrições detalhadamente.
            {'\n'}• 📲 Seu saldo anterior e atual.
          </ThemedText>
        </Collapsible>
      </ThemedView>
      <ThemedView style={styles.subtitleContainercartao}>
        <Collapsible title="Cartões 💳">
          <ThemedText>
            Selecciona uma opção para continuar:
            {'\n'}• ✔️ Visualizar cartões de crédito e débito ativos.
            {'\n'}• 📅 Consultar o limite disponível e a fatura atual.
            {'\n'}• ⛔ Bloquear ou desbloquear teu cartão.
            {'\n'}• 💳 Solicitar segunda via ou um cartão virtual.
          </ThemedText>
        </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    left: 35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#fb8500',
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingStart: 20,
    paddingEnd: 20,
    padding: 20,
    marginStart: 10,
    marginEnd: 10,
  },
  logoAcesso: {
    height: 278,
    width: 450,
    bottom: 0,
    position: 'absolute',
    gap: 8,
  },


  subtitleContainerpix: {
    gap: 10,
    marginTop: 15,
    backgroundColor: '#003f88',
    marginBottom: 8,
    borderRadius: 30,
    alignItems: 'center',
    padding: 5,
    marginStart: 14,
    marginEnd: 14,
  },
  subtitleContainerextrato: {
    gap: 10,
    marginTop: 15,
    backgroundColor: '#003f88',
    marginBottom: 8,
    borderRadius: 30,
    alignItems: 'center',
    padding: 5,
    marginStart: 14,
    marginEnd: 14,
  },
  subtitleContainercartao: {
    gap: 10,
    marginTop: 15,
    backgroundColor: '#003f88',
    marginBottom: 8,
    borderRadius: 30,
    alignItems: 'center',
    padding: 5,
    marginStart: 14,
    marginEnd: 14,
  },

});
