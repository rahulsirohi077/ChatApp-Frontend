export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi",
        _id: "2",
        groupChat: false,
        members: ["1", "2"],
    },
];

export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi",
        _id: "2",
    },
];

export const sampleNotifications = [
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Boi",
        },
        _id: "2",
    },
];

export const sampleMessages = [
    {
        attachments:[],
        content: "Hello",
        _id:"waddwdsasdas",
        sender:{
            _id:"1",
            name:"John Doe"
        },
        chat:"ChatId",
        createdAt:"2021-10-10T12:00:00.000Z"
    },
    {
        attachments:[
            {
                public_id:"image1",
                url:"https://www.w3schools.com/howto/img_avatar.png"
            }
        ],
        content: "Hello2",
        _id:"waddwdsasdas2",
        sender:{
            _id:"qwejqi",
            name:"Aman Singh"
        },
        chat:"ChatId",
        createdAt:"2021-10-10T12:00:00.000Z"
    },
];

export const dashboardData = {
    users: [
      {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        _id: "1",
        username: "john_doe",
        friends: 20,
        groups: 5,
      },
      {
        name: "John Boi",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        _id: "2",
        username: "john_boi",
        friends: 20,
        groups: 25,
      },
    ],
  
    chats: [
      {
        name: " Group2 ",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        _id: "1",
        groupChat: false,
        members: [
          { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
          { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        ],
        totalMembers: 2,
        totalMessages: 20,
        creator: {
          name: "John Doe",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      },
      {
        name: "Group",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        _id: "2",
        groupChat: true,
        members: [
          { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
          { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        ],
        totalMembers: 2,
        totalMessages: 20,
        creator: {
          name: "John Boi",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      },
    ],
  
    messages: [
      {
        attachments: [],
        content: "Msg hai",
        _id: "sfnsdjkfsdnfkjsbnd",
        sender: {
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Chaman ",
        },
        chat: "chatId",
        groupChat: false,
        createdAt: "2024-02-12T10:41:30.630Z",
      },
  
      {
        attachments: [
          {
            public_id: "asdsad 2",
            url: "https://www.w3schools.com/howto/img_avatar.png",
          },
        ],
        content: "121",
        _id: "sfnsdjkfsdnfkdddjsbnd",
        sender: {
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
          name: "Chaman  2",
        },
        chat: "chatId",
        groupChat: true,
        createdAt: "2024-02-12T10:41:30.630Z",
      },
    ],
  };