import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/itauindex.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá, Ashly!<HelloWave /></ThemedText>
      </ThemedView>
      <ThemedView style={styles.saldoContainer}>
        <ThemedText type="subtitle">Bem vindo ao teu banco digital</ThemedText>
        <ThemedText>
          CPF •••.123.456.-••
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.textContainer}>
        <ThemedText type="subtitle">Aqui você pode...</ThemedText>
        <ThemedText>
          📊 Acompanhar teu saldo, fazer transferências e gerenciar teus cartões com segurança e praticidade.
        </ThemedText>
        <ThemedText type="subtitle">O que ofrecemos é...</ThemedText>
        <ThemedText>
          🚀 Um sistema rápido, simples e seguro.
          O banco digital feito pra você ir além.{' '}
          <ThemedText> Alem de, garantir a tua segurança em primeiro lugar. Tudo criptografado
            e protegido para você usar com tranquilidade.</ThemedText>{' '}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  saldoContainer: {
    gap: 9,
    marginBottom: 8,
    backgroundColor: '#003f88',
    borderRadius: 30,
    alignItems: 'center',
    padding: 5,
    marginStart: 14,
    marginEnd: 14,
  },
  reactLogo: {
    height: 278,
    width: 450,
    bottom: 0,
    position: 'absolute',
  },
  textContainer: {
    gap: 20,
  }

});
