/* eslint-disable linebreak-style */
/* eslint-disable indent */
import ErrorRepository from '../map';

test('Translate error description', () => {
  const errorRepository = new ErrorRepository();

  errorRepository.errors.set('101', 'Ошибка 101');
  errorRepository.errors.set('102', 'Ошибка 102');
  const result = errorRepository.translate('101');

  expect(result).toBe('Ошибка 101');
});

test('Translate no error code', () => {
    const errorRepository = new ErrorRepository();
    errorRepository.errors.set('101', 'Ошибка 101');
    errorRepository.errors.set('102', 'Ошибка 102');
    const result = errorRepository.translate('103');
    expect(result).toBe('Unknown error');
  });
