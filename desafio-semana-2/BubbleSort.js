function bubbleSort(arr) {
    let n = arr.length;
    let trocado;
    
    do {
      trocado = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          trocado = true;
        }
      }
      n--;
    } while (trocado);
    
    return arr;
  }
  
  const numerosAleatorios = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1001));
  console.log(numerosAleatorios);
  console.log(bubbleSort(numerosAleatorios));
  