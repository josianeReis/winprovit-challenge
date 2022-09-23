import { renderHook, act } from '@testing-library/react-hooks'

import useFetch from '.'

describe('useFetch', () => {
  it('Should return users values', async () => {
    const mockArray = Array.from({ length: 10 }).map(() => ({
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      username: "Antonette",
      website: "anastasia.net",
      company: {
        bs: "synergize scalable supply-chains",
        catchPhrase: "Proactive didactic contingency",
        name: "Deckow-Crist",
      },
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        zipcode: "90566-7771",
        city: "Wisokyburgh",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      }
    }))

    const getUsers = () =>
      Promise.resolve({
        data: mockArray,
      })

    // @ts-ignore
    const { result } = await renderHook(() => useFetch(getUsers))

    act(() => {
      expect(result.current).toMatchSnapshot()
    })
  })
})
