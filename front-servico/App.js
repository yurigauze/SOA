import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Button } from 'react-native';

export default function App() {
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  const [apiPath, setApiPath] = useState('campeao');

  const fetchRandomImage = async () => {
    try {
      const response = await fetch(`https://e199-200-17-101-69.ngrok.io/fotos/${apiPath}`);
      const data = await response.json();
      setCurrentImageUrl(data);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  const toggleApiPath = () => {
    // Alterna entre 'cachorros' e 'gatos'
    setApiPath(apiPath === 'campeao' ? 'gatos' : 'campeao');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={fetchRandomImage}>
        {currentImageUrl ? (
          <Image
            source={{ uri: currentImageUrl }}
            style={styles.logoImage}
            resizeMode="contain"
          />
        ) : null}
      </TouchableOpacity>
      <Button title={`Carregar ${apiPath.charAt(0).toUpperCase() + apiPath.slice(1)}`} onPress={toggleApiPath} />
      <Button title="Carregar Nova Imagem" onPress={fetchRandomImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
});