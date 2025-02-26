import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {
  CardHeaderComponent,
  CardComponent,
  CardBodyComponent,
  TableDirective,
  RowComponent,
  ColComponent,
  AvatarComponent,
  ProgressComponent,
  ModalComponent,
  ModalBodyComponent,
  ModalHeaderComponent,
  ModalFooterComponent,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { IUser } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    CardComponent,
    CardBodyComponent,
    TableDirective,
    RowComponent,
    ColComponent,
    AvatarComponent,
    IconDirective,
    ProgressComponent,
    ModalComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent implements OnInit {
  public users: IUser[] = [];
  public isModalOpen = false;
  public isEditMode = false;
  public isDeleteModalOpen = false;
  public currentUser: IUser = this.initializeUser();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  openAddUserModal(): void {
    this.isEditMode = false;
    this.currentUser = this.initializeUser();
    this.isModalOpen = true;
  }

  openEditUserModal(user: IUser): void {
    this.isEditMode = true;
    this.currentUser = { ...user };
    this.isModalOpen = true;
  }

  openDeleteUserModal(user: IUser): void {
    this.currentUser = { ...user };
    this.isDeleteModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
  }

  handleModalChange(event: boolean): void {
    this.isModalOpen = event;
  }

  handleDeleteModalChange(event: boolean): void {
    this.isDeleteModalOpen = event;
  }

  addUser(): void {
    this.userService.addUser(this.currentUser);
    this.users = this.userService.getUsers();
    this.closeModal();
  }

  updateUser(): void {
    this.userService.updateUser(this.currentUser.name, this.currentUser);
    this.users = this.userService.getUsers();
    this.closeModal();
  }

  confirmDeleteUser(): void {
    this.userService.deleteUser(this.currentUser.name);
    this.users = this.userService.getUsers();
    this.closeDeleteModal();
  }

  trackByUserName(index: number, user: IUser): string {
    return user.name;
  }

  private initializeUser(): IUser {
    return {
      name: '',
      state: '',
      registered: '',
      country: '',
      usage: 0,
      period: '',
      payment: '',
      activity: '',
      avatar: '',
      status: '',
      color: '',
    };
  }
}
