export default class Client {
  id?: number;
  lastName: string;
  name: string;
  email: string;
  password: string;

  constructor(
    lastName: string = "",
    name: string = "",
    email: string = "",
    password: string = ""
  ) {
    this.lastName = lastName;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
