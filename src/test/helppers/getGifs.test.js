import {getgif} from '../../helppers/getGifs'

describe('pruebas con fetch', () => {
  test(' debe de mostrar los 10 elementos del API',async () => {
    const gifs = await getgif('one punch');
    expect(gifs.length).toBe(10);
    // console.log(gifs);
  });

  test(' cuando no se envia la categoria',async () => {
    const gifs = await getgif('');
    expect(gifs.length).toBe(0);
    // console.log(gifs);
  });
  
  
});
