class PlayerInfo {
    constructor(
        public email: string,
        public name: string,
        public phoneNumber: string
    ) { }
}

export default PlayerInfo;
//     static createFromUserInput(): PlayerInfo | null {
//         const email: string | null = prompt("Enter email:");
//         const name: string | null = prompt("Enter name:");
//         const phoneNumber: string | null = prompt("Enter phone number:");

//         if (email === null || name === null || phoneNumber === null) {
//             return null;
//         }

//         return new PlayerInfo(email, name, phoneNumber);
//     }
// }