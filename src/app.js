import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    console.log(await GameSavingLoader.load());
  } catch (error) {
    console.log(error);
  } finally {
    console.log('finally');
  }
})();
