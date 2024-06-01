interface IUser {
    name: string;
    age: number;
    isAcive: boolean;
}

type TUserList = IUser[];

const users: IUser[] = [
    {
        name: "John",
        age: 30,
        isAcive: true,
    },
    {
        name: "Jane",
        age: 25,
        isAcive: false,
    },
    {
        name: "Bob",
        age: 40,
        isAcive: true,
    },
    {
        name: "Alice",
        age: 35,
        isAcive: false,
    },
    {
        name: "Tom",
        age: 45,
        isAcive: true,
    },
    {
        name: "Sara",
        age: 32,
        isAcive: false,
    },
    {
        name: "Mark",
        age: 28,
        isAcive: true,
    },
];

// const activeUsers: IUser[] = users.filter((user) => user.isAcive)
// const genZUsers = users.filter((user) => user.age < 30);

const sumAgeByActiveGenZUsers = users.reduce((acc, cur) => {
    if (cur.age < 30 && cur.isAcive) {
        return acc + cur.age;
    }
    return acc;
}, 0);

export {};
