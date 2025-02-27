import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {
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
  CardFooterComponent,
  ButtonCloseDirective,
  PaginationComponent,
  PageItemComponent,
  PageLinkDirective,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { IUser } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
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
    ButtonCloseDirective,
    PaginationComponent,
    PageItemComponent,
    PageLinkDirective,
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
  public currentPage = 1;
  public pageSize = 5;
  public totalUsers = 0;
  public filters = {
    name: '',
    country: '',
    status: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    const result = this.userService.getUsers(
      this.currentPage,
      this.pageSize,
      this.filters
    );
    this.users = result.users;
    this.totalUsers = result.total;
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
    this.loadUsers();
    this.closeModal();
  }

  updateUser(): void {
    this.userService.updateUser(this.currentUser.name, this.currentUser);
    this.loadUsers();
    this.closeModal();
  }

  confirmDeleteUser(): void {
    this.userService.deleteUser(this.currentUser.name);
    this.loadUsers();
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

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadUsers();
  }

  applyFilters(): void {
    this.currentPage = 1;
    this.loadUsers();
  }

  clearFilters(): void {
    this.filters = {
      name: '',
      country: '',
      status: '',
    };
    this.applyFilters();
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.totalUsers / this.pageSize))
      .fill(0)
      .map((x, i) => i + 1);
  }
}
