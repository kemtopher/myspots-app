import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      active: false,
      focused: false,
      address: '101 Peachtree St',
      datetime: '2025-06-30T12:00:00Z',
      id: '1',
      location: {
        coordinates: [-84.363384, 33.752141]
      },
      name: "Ben's Chicken Shack",
      description:
        'A hipster hangout serving beer & eclectic food, along with live music nights, in a bare bones space.'
    },
    {
      active: false,
      focused: false,
      address: '102 Peachtree St',
      datetime: '2025-06-30T12:01:00Z',
      id: '2',
      location: {
        coordinates: [-84.32, 33.8]
      },
      name: "Magnolia blossoms in May",
      description:
        "Sister Louisa's Church of the Living Room and Ping Pong Emporium, or simply Church, is a bar on Edgewood Avenue in the Old Fourth Ward of Atlanta, Georgia, in the United States. It is owned by Grant Henry. Edgewood Avenue in the Old Fourth Ward and 'Church' bar."
    },
    {
      active: false,
      focused: false,
      address: '103 Peachtree St',
      datetime: '2025-06-30T12:02:00Z',
      id: '3',
      location: {
        coordinates: [-84.39, 33.79]
      },
      name: 'Park Grounds',
      description:
        'Dog-friendly spot for specialty coffee drinks & light bites including breakfast served all day.'
    },
    {
      active: false,
      focused: false,
      address: '104 Peachtree St',
      datetime: '2025-06-30T12:03:00Z',
      id: '4',
      location: {
        coordinates: [-84.35, 33.76]
      },
      name: 'North Highland Bakery',
      description:
        'I could definitely tell it was a popular place. It was packed, just like I remembered it, but we were able to get seated pretty quickly. We ordered the half stack of the sweet potato pancakes. They were rich and fluffy, without being too sweet. Delicious! We also each ordered the fried chicken benedict, which was amazing. A homemade biscuit topped flaky fried chicken and a plump poached egg, topped with rich, homemade jalapeño cheddar sauce. And with food this perfect, it was still the people who work there that make this place what it is. This, is the perfect brunch experience.'
    },
    {
      active: false,
      focused: false,
      address: '105 Peachtree St',
      datetime: '2025-06-30T12:04:00Z',
      id: '5',
      location: {
        coordinates: [-84.36, 33.77]
      },
      name: "Alon's Bakery",
      description:
        "Alon's Bakery & Market is an award-winning restaurant, providing high-quality artisan baked goods and cuisine since 1992. The namesake of Executive Chef/Owner Alon Balshan, Alon's Bakery & Market has two locations in Morningside and Phipps Plaza with catering options available across metro Atlanta. Offering customers a unique atmosphere that emulates the authentic feel of a European market, Alon's Bakery & Market is known for its high-quality, made-from-scratch selection of baked breads, European-style cakes, handmade pastries, gourmet sandwiches, freshly prepared foods, fine cheeses, exquisite chocolates and more."
    },
    {
      active: false,
      focused: false,
      address: '106 Peachtree St',
      datetime: '2025-06-30T12:05:00Z',
      id: '6',
      location: {
        coordinates: [-84.37, 33.78]
      },
      name: 'The Albert',
      description:
        'Casual watering hole with brick decor dishes up pub grub including a variety of specialty hot dogs.'
    },
    {
      active: false,
      focused: false,
      address: '107 Peachtree St',
      datetime: '2025-06-30T12:06:00Z',
      id: '7',
      location: {
        coordinates: [-84.38, 33.74]
      },
      name: 'Victory Sandwich Bar',
      description:
        "I'd gladly pay $10 for the Beeter (beet “pastrami,” white kimchi, and Thai pepper mayo) and probably more for the Han Cholo (chorizo, Cotija cheese, tomatillo salsa) at this ATL favorite. But at $4 apiece (chips included), this has to be the greatest meal deal in America."
    },
    {
      active: false,
      focused: false,
      address: '108 Peachtree St',
      datetime: '2025-06-30T12:07:00Z',
      id: '8',
      location: {
        coordinates: [-84.33, 33.75]
      },
      name: 'Strangers In Paradise',
      description:
        'The 1,200-square-foot space features two small areas set up like living rooms and a bar that seats 24. Pink leather couches offer space to lounge with plantation shutters separating Strangers in Paradise from the rest of the food hall. Hundreds of old-school postcards function as wallpaper behind the bar, surrounding a neon-lit alligator sign. Need another reminder you’ve left the Peach State? Flamingo motifs abound, including in the form of a ceramic mug serving the “Pink Flamingo” cocktail (prosecco, aperol, watermelon nectar, and lemon). Plants surround the space, and a garage door opens onto a covered patio with a ramp to the BeltLine. The decor is thrifted, much of it hand-picked by Lennox, with souvenir cups lining the walls. Expect an upbeat yet nostalgic soundtrack featuring 30 hours of curated ’80s, classic rock, pop, new wave, and the occasional reggae and Harry Belafonte. Old Florida indeed.'
    },
    {
      active: false,
      focused: false,
      address: '109 Peachtree St',
      datetime: '2025-06-30T12:08:00Z',
      id: '9',
      location: {
        coordinates: [-84.34, 33.76]
      },
      name: 'Monday Night Garage - Westside Breweries',
      description:
        "Monday Night Brewing's home for barrel aged and sour beers, with several fresh, local craft beer on tap. Located in Atlanta's historic West End."
    },
    {
      active: false,
      focused: false,
      address: '110 Peachtree St',
      datetime: '2025-06-30T12:09:00Z',
      id: '10',
      location: {
        coordinates: [-84.35, 33.77]
      },
      name: 'Bocca Lupo',
      description:
        'BoccaLupo is a bustling neighborhood restaurant located in Inman Park. We specialize in handmade and extruded pasta dishes with an eye on seasonality and where it comes from. Chef Bruce Logue and his team are passionate about questioning what is considered Italian-American cooking. With a casual vibe, genuine service and a talented bar team BoccaLupo continues to be an Atlanta must.'
    },
    {
      active: false,
      focused: false,
      address: '111 Peachtree St',
      datetime: '2025-06-30T12:10:00Z',
      id: '11',
      location: {
        coordinates: [-84.36, 33.78]
      },
      name: 'A Mano',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      focused: false,
      address: '112 Peachtree St',
      datetime: '2025-06-30T12:11:00Z',
      id: '12',
      location: {
        coordinates: [-84.37, 33.79]
      },
      name: 'Joystick Gamebar',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      focused: false,
      address: '113 Peachtree St',
      datetime: '2025-06-30T12:12:00Z',
      id: '13',
      location: {
        coordinates: [-84.38, 33.8]
      },
      name: 'Mombo Zombie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      focused: false,
      address: '114 Peachtree St',
      datetime: '2025-06-30T12:13:00Z',
      id: '14',
      location: {
        coordinates: [-84.39, 33.81]
      },
      name: 'Grindhouse Killer Burgers',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      focused: false,
      address: '115 Peachtree St',
      datetime: '2025-06-30T12:14:00Z',
      id: '15',
      location: {
        coordinates: [-84.4, 33.82]
      },
      name: 'Beetlecat',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      focused: false,
      address: '116 Peachtree St',
      datetime: '2025-06-30T12:15:00Z',
      id: '16',
      location: {
        coordinates: [-84.41, 33.83]
      },
      name: "Manuel's Tavern",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      focused: false,
      address: '117 Peachtree St',
      datetime: '2025-06-30T12:16:00Z',
      id: '17',
      location: {
        coordinates: [-84.42, 33.84]
      },
      name: 'Breaker Breaker',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      focused: false,
      address: '118 Peachtree St',
      datetime: '2025-06-30T12:17:00Z',
      id: '18',
      location: {
        coordinates: [-84.43, 33.85]
      },
      name: "Hawker's Asian Street Food",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
    },
    {
      active: false,
      focused: false,
      address: '119 Peachtree St',
      datetime: '2025-06-30T12:18:00Z',
      id: '19',
      location: {
        coordinates: [-84.44, 33.86]
      },
      name: 'Quôć Húớng',
      description:
        'Vietnamese banh mi sandwiches plus pho noodle soups, bubble tea & smoothies from a quick-serve spot.'
    },
    {
      active: false,
      focused: false,
      address: '120 Peachtree St',
      datetime: '2025-06-30T12:19:00Z',
      id: '20',
      location: {
        coordinates: [-84.45, 33.87]
      },
      name: 'Northern China Eatery',
      description:
        'Mellow outpost with Asian accents, doling out dumplings, hot pot dishes & traditional Chinese fare.'
    },
    {
      active: false,
      focused: false,
      address: '121 Peachtree St',
      datetime: '2025-06-30T12:20:00Z',
      id: '21',
      location: {
        coordinates: [-84.46, 33.88]
      },
      name: 'Mamak',
      description:
        'Vibrant, cozy cafe serving Malaysian curries, noodles & roti canai inspired by street-food stalls.'
    },
    {
      active: false,
      focused: false,
      address: '122 Peachtree St',
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
    createEvent: (state, action) => {
      state.value = [...state.value, action.payload];
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
    },
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
    setFocused: (state, action) => {
      let focusedState = state.value.map((event) => {
        if (event.id !== action.payload.id) {
          if (event.focused) {
            return { ...event, focused: false };
          }

          return event;
        }

        return { ...event, focused: true };
      });

      state.value = focusedState;
    },
    clearFocused: (state, action) => {
      let clearState = state.value.map((event) => {
        return { ...event, focused: false };
      });

      state.value = clearState;
    }
  }
});

export const {
  createEvent,
  removeEvent,
  editEvent,
  setActive,
  removeActive,
  setRsvp,
  setFocused,
  clearFocused
} = eventsSlice.actions;
export default eventsSlice.reducer;
