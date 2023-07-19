import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.setTimeout(20000);

jest.mock('../reader');

test('testing with resolve', async () => {
  read.mockReturnValue(new ArrayBuffer(180)); // ?
  const result = await GameSavingLoader.load();
  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});

test('testing with reject', async (done) => {
  const expectedError = new Error('oops');
  read.mockReturnValue(expectedError);
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e.message).toEqual(expectedError.message);
    done();
  }
});
