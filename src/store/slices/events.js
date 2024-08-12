import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      active: false,
      rsvp: true,
      address: '101 Peachtree St',
      creator: {
        id: '001',
        username: 'user1'
      },
      datetime: '2025-06-30T12:00:00Z',
      id: '1',
      location: {
        coordinates: [-84.388, 33.749]
      },
      name: 'Object 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '102 Peachtree St',
      creator: {
        id: '002',
        username: 'user2'
      },
      datetime: '2025-06-30T12:01:00Z',
      id: '2',
      location: {
        coordinates: [-84.32, 33.8]
      },
      name: 'Object 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: true,
      address: '103 Peachtree St',
      creator: {
        id: '003',
        username: 'user3'
      },
      datetime: '2025-06-30T12:02:00Z',
      id: '3',
      location: {
        coordinates: [-84.39, 33.79]
      },
      name: 'Object 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '104 Peachtree St',
      creator: {
        id: '004',
        username: 'user4'
      },
      datetime: '2025-06-30T12:03:00Z',
      id: '4',
      location: {
        coordinates: [-84.35, 33.76]
      },
      name: 'Object 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: true,
      address: '105 Peachtree St',
      creator: {
        id: '005',
        username: 'user5'
      },
      datetime: '2025-06-30T12:04:00Z',
      id: '5',
      location: {
        coordinates: [-84.36, 33.77]
      },
      name: 'Object 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '106 Peachtree St',
      creator: {
        id: '006',
        username: 'user6'
      },
      datetime: '2025-06-30T12:05:00Z',
      id: '6',
      location: {
        coordinates: [-84.37, 33.78]
      },
      name: 'Object 6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: true,
      address: '107 Peachtree St',
      creator: {
        id: '007',
        username: 'user7'
      },
      datetime: '2025-06-30T12:06:00Z',
      id: '7',
      location: {
        coordinates: [-84.38, 33.74]
      },
      name: 'Object 7',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: true,
      address: '108 Peachtree St',
      creator: {
        id: '008',
        username: 'user8'
      },
      datetime: '2025-06-30T12:07:00Z',
      id: '8',
      location: {
        coordinates: [-84.33, 33.75]
      },
      name: 'Object 8',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '109 Peachtree St',
      creator: {
        id: '009',
        username: 'user9'
      },
      datetime: '2025-06-30T12:08:00Z',
      id: '9',
      location: {
        coordinates: [-84.34, 33.76]
      },
      name: 'Object 9',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '110 Peachtree St',
      creator: {
        id: '010',
        username: 'user10'
      },
      datetime: '2025-06-30T12:09:00Z',
      id: '10',
      location: {
        coordinates: [-84.35, 33.77]
      },
      name: 'Object 10',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '111 Peachtree St',
      creator: {
        id: '011',
        username: 'user11'
      },
      datetime: '2025-06-30T12:10:00Z',
      id: '11',
      location: {
        coordinates: [-84.36, 33.78]
      },
      name: 'Object 11',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '112 Peachtree St',
      creator: {
        id: '012',
        username: 'user12'
      },
      datetime: '2025-06-30T12:11:00Z',
      id: '12',
      location: {
        coordinates: [-84.37, 33.79]
      },
      name: 'Object 12',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: true,
      address: '113 Peachtree St',
      creator: {
        id: '013',
        username: 'user13'
      },
      datetime: '2025-06-30T12:12:00Z',
      id: '13',
      location: {
        coordinates: [-84.38, 33.8]
      },
      name: 'Object 13',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '114 Peachtree St',
      creator: {
        id: '014',
        username: 'user14'
      },
      datetime: '2025-06-30T12:13:00Z',
      id: '14',
      location: {
        coordinates: [-84.39, 33.81]
      },
      name: 'Object 14',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '115 Peachtree St',
      creator: {
        id: '015',
        username: 'user15'
      },
      datetime: '2025-06-30T12:14:00Z',
      id: '15',
      location: {
        coordinates: [-84.4, 33.82]
      },
      name: 'Object 15',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: true,
      address: '116 Peachtree St',
      creator: {
        id: '016',
        username: 'user16'
      },
      datetime: '2025-06-30T12:15:00Z',
      id: '16',
      location: {
        coordinates: [-84.41, 33.83]
      },
      name: 'Object 16',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '117 Peachtree St',
      creator: {
        id: '017',
        username: 'user17'
      },
      datetime: '2025-06-30T12:16:00Z',
      id: '17',
      location: {
        coordinates: [-84.42, 33.84]
      },
      name: 'Object 17',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: true,
      address: '118 Peachtree St',
      creator: {
        id: '018',
        username: 'user18'
      },
      datetime: '2025-06-30T12:17:00Z',
      id: '18',
      location: {
        coordinates: [-84.43, 33.85]
      },
      name: 'Object 18',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '119 Peachtree St',
      creator: {
        id: '019',
        username: 'user19'
      },
      datetime: '2025-06-30T12:18:00Z',
      id: '19',
      location: {
        coordinates: [-84.44, 33.86]
      },
      name: 'Object 19',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '120 Peachtree St',
      creator: {
        id: '020',
        username: 'user20'
      },
      datetime: '2025-06-30T12:19:00Z',
      id: '20',
      location: {
        coordinates: [-84.45, 33.87]
      },
      name: 'Object 20',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '121 Peachtree St',
      creator: {
        id: '021',
        username: 'user21'
      },
      datetime: '2025-06-30T12:20:00Z',
      id: '21',
      location: {
        coordinates: [-84.46, 33.88]
      },
      name: 'Object 21',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      rsvp: false,
      address: '122 Peachtree St',
      creator: {
        id: '022',
        username: 'user22'
      },
      datetime: '2025-06-30T12:21:00Z',
      id: '22',
      location: {
        coordinates: [-84.47, 33.89]
      },
      name: 'Object 22',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    }
  ]
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setActive: (state, action) => {
      let updatedState = state.value.map((event) => {
        if (event.id === action.payload.id) {
          return { ...event, active: true };
        } else if (event.active) {
          return { ...event, active: false };
        } else {
          return event;
        }
      });

      state.value = updatedState;
    },
    removeActive: (state, action) => {
      let clearedState = state.value.map((event) => {
        if (event.id === action.payload.id) {
          return { ...event, active: false };
        } else {
          return event;
        }
      });

      state.value = clearedState;
    },
    setRsvp: (state, action) => {
      let updateRsvp = state.value.map((event) => {
        if (event.id === action.payload.id) {
          if (event.rsvp) {
            return { ...event, rsvp: false };
          } else {
            return { ...event, rsvp: true };
          }
        } else {
          return { ...event };
        }
      });

      state.value = updateRsvp;
    },
    removeEvent: (state, action) => {
      let updatedState = state.value.filter(
        (event) => event.id !== action.payload.id
      );

      state.value = updatedState;
    },
    editEvent: (state, action) => {
      let updatedState = state.value.map((event) => {
        if (event.id !== action.payload.id) {
          return event;
        } else if (event.id === action.payload.id) {
          return event;
        }
      });

      state.value = updatedState;
    }
  }
});

export const { setActive, setRsvp, removeActive, removeEvent, editEvent } =
  eventsSlice.actions;
export default eventsSlice.reducer;
