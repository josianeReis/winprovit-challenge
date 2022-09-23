import { render, screen, cleanup } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { formatUsersWithPosts } from '../../helpers/formatUsers.helper';
import api from '../api';
import { getUsers, getPosts } from '.'
import Home from '../../pages/index'

const mockAdapter = new MockAdapter(api, { onNoMatch: "throwException" });

describe('Users suit tests', () => {
  const usersDataMock = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  ];
  const postsDataMock = [
    {
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  ];

  beforeAll(() => {
    mockAdapter.reset();
  });

  afterEach(cleanup);

  it('should render Home page correctly', async () => {
    render(<Home />)
    const pageTitle = screen.getByRole('heading', {
      name: "Users list page!",
    })

    expect(pageTitle).toBeInTheDocument()
  })

  it('should fetch users and posts data with success', async () => {
    mockAdapter.onGet('/users').reply(200, usersDataMock);
    mockAdapter.onGet('/posts').reply(200, postsDataMock);

    expect(
      screen.findByTestId('container:json-viewer')
    ).toBeInTheDocument();

    const data = formatUsersWithPosts(usersDataMock, postsDataMock)

    expect(screen.findByTestId('container:json-viewer')).toHaveBeenCalledWith(
      expect.objectContaining(data)
    )
  });

  it('should render error message', async () => {
    mockAdapter.onGet('/users').reply(500, usersDataMock);
    mockAdapter.onGet('/posts').reply(200, postsDataMock);

    expect(await screen.findByText('Erro ao buscar os dados, por favor tente novamente!')).toBeVisible()
  });
});
