import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    return JSON.parse(value);
  }
}
