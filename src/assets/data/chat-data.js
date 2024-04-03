const chatGroups = [
    {
        id: 1,
        name: "Family Group",
        type: "group",
        numberOfPeople: 4, // For example, including Mom, Dad, Sister, and You
        chatItems: [
            { sender: "Mom", message: "Did you finish your homework?", timestamp: "2024-04-01T10:00:00", read: true, isYou: false },
            { sender: "Dad", message: "I'll be home late tonight.", timestamp: "2024-04-01T10:05:00", read: true, isYou: false },
            { sender: "Sister", message: "Can someone pick me up from school?", timestamp: "2024-04-01T10:10:00", read: false, isYou: false }
        ]
    },
    {
        id: 2,
        name: "Work Group",
        type: "group",
        numberOfPeople: 6, // For example, including John, Jane, Mark, and others
        chatItems: [
            { sender: "John", message: "Has anyone seen the report from last quarter?", timestamp: "2024-03-31T15:00:00", read: true, isYou: false },
            { sender: "Jane", message: "I'll send it to you shortly.", timestamp: "2024-03-31T15:05:00", read: true, isYou: false },
            { sender: "You", message: "I need help with this bug in the code.", timestamp: "2024-04-01T09:30:00", read: false, isYou: true }
        ]
    },
    {
        id: 3,
        name: "Emily",
        type: "personal",
        numberOfPeople: 2, // Just You and Emily in this case
        chatItems: [
            { sender: "You", message: "It was good, thanks for asking!", timestamp: "2024-03-31T20:00:00", read: true, isYou: true },
            { sender: "Emily", message: "I'm glad to hear that.", timestamp: "2024-03-31T20:05:00", read: true, isYou: false }
        ]
    }
];

export default chatGroups;