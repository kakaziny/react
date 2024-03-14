import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const App = () => {
  const [countdown, setCountdown] = useState('');
const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    const calculateCountdown = () => {
     const now = new Date();
   const christmasDate = new Date(now.getFullYear(), 11, 25); 
      if (now.getMonth() === 11 && now.getDate() > 25) {
        
        christmasDate.setFullYear(christmasDate.getFullYear() + 1);
      }
      const timeDifference = christmasDate.getTime() - now.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

  const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleStartCountdown = () => {
    setShowCountdown(true);
};

    return (
    <ImageBackground
    source={require('./assets/natal.jpg')} 
    style={styles.container}
    >
    <View style={styles.overlay}>
       {!showCountdown ? (
   <TouchableOpacity style={styles.button} onPress={handleStartCountdown}>
    <Text style={styles.buttonText}>Ver Contagem Regressiva para o Natal</Text>
       </TouchableOpacity>
   ) : (
         <View style={styles.countdownContainer}>
         <Text style={styles.title}>Contagem Midia até o Natal</Text>
            <View style={styles.countdownBox}>
        <Text style={styles.countdown}>{countdown}</Text>
         </View>
        </View>
  )}
    </View>
    </ImageBackground>
 );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#6ecf42',
    padding: 11,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'Didot',
  },
  countdownContainer: {
    alignItems: 'center',
  },
   title: {
    fontSize: 23,
    fontWeight: 'Didot',
    marginBottom: 20,
    color: '#ffffff', 
  }, countdownBox: {
  backgroundColor: '#ffffe5',
  padding: 20,
  borderRadius: 10,
  },
    countdown: {
  fontSize: 35,
  fontWeight: 'Didot',
  color: '#000000', 
  },
});

export default App;
