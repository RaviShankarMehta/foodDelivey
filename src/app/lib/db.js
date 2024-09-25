const { username, password } = process.env;
export const connectionStr = `mongodb+srv://${username}:${password}@onlinetuition.otk4k.mongodb.net/foodDelivery?retryWrites=true&w=majority&appName=foodDelivery`;
