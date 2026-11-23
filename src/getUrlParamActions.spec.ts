import { getUrlParamActions } from './getUrlParamActions';

describe('URL parameter happy path', () => {
  it('reads and writes a parameter', () => {
    const navigate = jest.fn();
    const [getParam, setParam] = getUrlParamActions<string>({
      name: 'page',
      search: '?page=%22profile%22&theme=dark',
      navigate,
    });

    expect(getParam()).toBe('profile');

    setParam('settings');
    expect(navigate).toHaveBeenCalledWith('?page=%22settings%22&theme=dark');
  });

  it('deletes an empty parameter', () => {
    const navigate = jest.fn();
    const [, setParam] = getUrlParamActions<string>({
      name: 'page',
      search: '?page=profile&theme=dark',
      navigate,
    });

    setParam('');
    expect(navigate).toHaveBeenCalledWith('?theme=dark');
  });
});
