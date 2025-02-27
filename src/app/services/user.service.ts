import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/images/avatars/1.jpg',
      status: 'success',
      color: 'success',
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/images/avatars/2.jpg',
      status: 'danger',
      color: 'info',
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/images/avatars/3.jpg',
      status: 'warning',
      color: 'warning',
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/images/avatars/4.jpg',
      status: 'secondary',
      color: 'danger',
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/images/avatars/5.jpg',
      status: 'success',
      color: 'primary',
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/images/avatars/6.jpg',
      status: 'info',
      color: 'dark',
    },
  ];

  constructor() {}

  getUsers(
    page: number = 1,
    pageSize: number = 5,
    filters: { name?: string; country?: string; status?: string } = {}
  ): { users: IUser[]; total: number } {
    let filteredUsers = this.users;

    if (filters.name) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filters.name!.toLowerCase())
      );
    }

    if (filters.country) {
      filteredUsers = filteredUsers.filter((user) =>
        user.country.toLowerCase().includes(filters.country!.toLowerCase())
      );
    }

    if (filters.status) {
      filteredUsers = filteredUsers.filter((user) =>
        user.status.toLowerCase().includes(filters.status!.toLowerCase())
      );
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
    return { users: paginatedUsers, total: filteredUsers.length };
  }

  getUser(name: string): IUser | undefined {
    return this.users.find((user) => user.name === name);
  }

  addUser(user: IUser): void {
    this.users.push(user);
  }

  updateUser(name: string, updatedUser: IUser): void {
    const index = this.users.findIndex((user) => user.name === name);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(name: string): void {
    this.users = this.users.filter((user) => user.name !== name);
  }
}
