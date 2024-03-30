import axios from 'axios';
import { getScientistsFromAPI } from './api';

// Mocking Axios
jest.mock('axios');

describe('getScientistsFromAPI', () => {
  it('fetches scientists data from the API', async () => {
    const mockResponseData = {
      results: [
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Alejandra",
            last: "Morales",
          },
          location: {
            street: {
              number: 9535,
              name: "Calle del Prado",
            },
            city: "Castellón de la Plana",
            state: "Cantabria",
            country: "Spain",
            postcode: 26958,
            coordinates: {
              latitude: "-30.9915",
              longitude: "84.7924",
            },
            timezone: {
              offset: "+11:00",
              description: "Magadan, Solomon Islands, New Caledonia",
            },
          },
          email: "alejandra.morales@example.com",
          login: {
            uuid: "091ffd24-3b04-4e67-a9f4-d0667036d9cb",
            username: "crazyswan152",
            password: "xxxxx1",
            salt: "Tcs4zBQM",
            md5: "fb381c36ae8da523a39bb442e9d001b3",
            sha1: "551f60c6af5fc9c54a814d3a0020d2a805d37bf2",
            sha256:
              "463598cf16a68dba554e8ab446133a3177b24a692d59df62bc1e0ea2f8130431",
          },
          dob: {
            date: "1966-12-21T22:24:15.256Z",
            age: 57,
          },
          registered: {
            date: "2010-06-06T08:41:30.896Z",
            age: 13,
          },
          phone: "901-386-778",
          cell: "696-988-029",
          id: {
            name: "DNI",
            value: "79898941-V",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/43.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg",
          },
          nat: "ES",
        },
      ],
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: mockResponseData,
    });

    const scientists = await getScientistsFromAPI();

    expect(scientists).toHaveLength(1);
    expect(scientists[0].name.first).toBe('Alejandra');
    expect(scientists[0].gender).toBe('female');
  });
  it('handles API error properly', async () => {
    const errorMessage = 'Uh oh, something has gone wrong. Try again in another time.';

    // Mock API call to reject with an error
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
      new Error(errorMessage)
    );

    // Call the API function and expect a rejected promise
    await expect(getScientistsFromAPI()).rejects.toEqual({
      message: errorMessage,
    });
  });

  it('handles empty response data from the API', async () => {
    // Mock response data to be empty
    const mockResponseData = {
      results: [],
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: mockResponseData,
    });

    const scientists = await getScientistsFromAPI();

    // Expect the result to be an empty array
    expect(scientists).toHaveLength(0);
  });
});
