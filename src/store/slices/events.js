import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            address: "101 Peachtree St",
            creator: {
                id: "001",
                username: "user1"
            },
            datetime: "2024-06-30T12:00:00Z",
            id: "1",
            location: {
                coordinates: [
                    -84.3880, 33.7490
                ]
            },
            name: "Object 1"
        },
        {
            address: "102 Peachtree St",
            creator: {
                id: "002",
                username: "user2"
            },
            datetime: "2024-06-30T12:01:00Z",
            id: "2",
            location: {
                coordinates: [
                    -84.3200, 33.8000
                ]
            },
            name: "Object 2"
        },
        {
            address: "103 Peachtree St",
            creator: {
                id: "003",
                username: "user3"
            },
            datetime: "2024-06-30T12:02:00Z",
            id: "3",
            location: {
                coordinates: [
                    -84.3900, 33.7900
                ]
            },
            name: "Object 3"
        },
        {
            address: "104 Peachtree St",
            creator: {
                id: "004",
                username: "user4"
            },
            datetime: "2024-06-30T12:03:00Z",
            id: "4",
            location: {
                coordinates: [
                    -84.3500, 33.7600
                ]
            },
            name: "Object 4"
        },
        {
            address: "105 Peachtree St",
            creator: {
                id: "005",
                username: "user5"
            },
            datetime: "2024-06-30T12:04:00Z",
            id: "5",
            location: {
                coordinates: [
                    -84.3600, 33.7700
                ]
            },
            name: "Object 5"
        },
        {
            address: "106 Peachtree St",
            creator: {
                id: "006",
                username: "user6"
            },
            datetime: "2024-06-30T12:05:00Z",
            id: "6",
            location: {
                coordinates: [
                    -84.3700, 33.7800
                ]
            },
            name: "Object 6"
        },
        {
            address: "107 Peachtree St",
            creator: {
                id: "007",
                username: "user7"
            },
            datetime: "2024-06-30T12:06:00Z",
            id: "7",
            location: {
                coordinates: [
                    -84.3800, 33.7400
                ]
            },
            name: "Object 7"
        },
        {
            address: "108 Peachtree St",
            creator: {
                id: "008",
                username: "user8"
            },
            datetime: "2024-06-30T12:07:00Z",
            id: "8",
            location: {
                coordinates: [
                    -84.3300, 33.7500
                ]
            },
            name: "Object 8"
        },
        {
            address: "109 Peachtree St",
            creator: {
                id: "009",
                username: "user9"
            },
            datetime: "2024-06-30T12:08:00Z",
            id: "9",
            location: {
                coordinates: [
                    -84.3400, 33.7600
                ]
            },
            name: "Object 9"
        },
        {
            address: "110 Peachtree St",
            creator: {
                id: "010",
                username: "user10"
            },
            datetime: "2024-06-30T12:09:00Z",
            id: "10",
            location: {
                coordinates: [
                    -84.3500, 33.7700
                ]
            },
            name: "Object 10"
        },
        {
            address: "111 Peachtree St",
            creator: {
                id: "011",
                username: "user11"
            },
            datetime: "2024-06-30T12:10:00Z",
            id: "11",
            location: {
                coordinates: [
                    -84.3600, 33.7800
                ]
            },
            name: "Object 11"
        },
        {
            address: "112 Peachtree St",
            creator: {
                id: "012",
                username: "user12"
            },
            datetime: "2024-06-30T12:11:00Z",
            id: "12",
            location: {
                coordinates: [
                    -84.3700, 33.7900
                ]
            },
            name: "Object 12"
        },
        {
            address: "113 Peachtree St",
            creator: {
                id: "013",
                username: "user13"
            },
            datetime: "2024-06-30T12:12:00Z",
            id: "13",
            location: {
                coordinates: [
                    -84.3800, 33.8000
                ]
            },
            name: "Object 13"
        },
        {
            address: "114 Peachtree St",
            creator: {
                id: "014",
                username: "user14"
            },
            datetime: "2024-06-30T12:13:00Z",
            id: "14",
            location: {
                coordinates: [
                    -84.3900, 33.8100
                ]
            },
            name: "Object 14"
        },
        {
            address: "115 Peachtree St",
            creator: {
                id: "015",
                username: "user15"
            },
            datetime: "2024-06-30T12:14:00Z",
            id: "15",
            location: {
                coordinates: [
                    -84.4000, 33.8200
                ]
            },
            name: "Object 15"
        },
        {
            address: "116 Peachtree St",
            creator: {
                id: "016",
                username: "user16"
            },
            datetime: "2024-06-30T12:15:00Z",
            id: "16",
            location: {
                coordinates: [
                    -84.4100, 33.8300
                ]
            },
            name: "Object 16"
        },
        {
            address: "117 Peachtree St",
            creator: {
                id: "017",
                username: "user17"
            },
            datetime: "2024-06-30T12:16:00Z",
            id: "17",
            location: {
                coordinates: [
                    -84.4200, 33.8400
                ]
            },
            name: "Object 17"
        },
        {
            address: "118 Peachtree St",
            creator: {
                id: "018",
                username: "user18"
            },
            datetime: "2024-06-30T12:17:00Z",
            id: "18",
            location: {
                coordinates: [
                    -84.4300, 33.8500
                ]
            },
            name: "Object 18"
        },
        {
            address: "119 Peachtree St",
            creator: {
                id: "019",
                username: "user19"
            },
            datetime: "2024-06-30T12:18:00Z",
            id: "19",
            location: {
                coordinates: [
                    -84.4400, 33.8600
                ]
            },
            name: "Object 19"
        },
        {
            address: "120 Peachtree St",
            creator: {
                id: "020",
                username: "user20"
            },
            datetime: "2024-06-30T12:19:00Z",
            id: "20",
            location: {
                coordinates: [
                    -84.4500, 33.8700
                ]
            },
            name: "Object 20"
        },
        {
            address: "121 Peachtree St",
            creator: {
                id: "021",
                username: "user21"
            },
            datetime: "2024-06-30T12:20:00Z",
            id: "21",
            location: {
                coordinates: [
                    -84.4600, 33.8800
                ]
            },
            name: "Object 21"
        },
        {
            address: "122 Peachtree St",
            creator: {
                id: "022",
                username: "user22"
            },
            datetime: "2024-06-30T12:21:00Z",
            id: "22",
            location: {
                coordinates: [
                    -84.4700, 33.8900
                ]
            },
            name: "Object 22"
        }
    ]
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.value = [...state, action.payload];
        },
    }
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;