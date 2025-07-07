import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AstroComponentsModule } from '@astrouxds/angular';
import { AgGridModule } from 'ag-grid-angular';

interface Contact {
  id: string;
  name: string;
  station: string;
  npc: boolean;
  equipment: string;
  start: string;
  end: string;
  status: 'upcoming' | 'executing' | 'failed';
}

interface User {
  id: string;
  name: string;
  email: string;
  group: string;
  role: string;
}

@Component({
  selector: 'app-status',
  imports: [AgGridModule, AstroComponentsModule, CommonModule, FormsModule],
  templateUrl: './status.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './status.component.css',
})
export class StatusComponent implements OnInit {
  statusFilters = ['all', 'upcoming', 'executing', 'failed'];
  selectedStatus = 'all';

  contacts: Contact[] = [
    {
      id: 'b310...',
      name: 'Contact 123',
      station: 'VAFB20',
      npc: false,
      equipment: 'EQ-1',
      start: '08:00',
      end: '08:15',
      status: 'executing',
    },
    {
      id: 'a210...',
      name: 'Contact 456',
      station: 'BAFB13',
      npc:true,
      equipment: 'EQ-2',
      start: '09:30',
      end: '09:45',
      status: 'upcoming',
    },
  ];

  filteredContacts!: Contact[];
  user!: User;

  ngOnInit() {
    this.applyFilter();
  }

  applyFilter() {
    this.filteredContacts =
      this.selectedStatus === 'all'
        ? this.contacts
        : this.contacts.filter((c) => c.status === this.selectedStatus);
  }

  // openDetails(contact: Contact) {
  //   // navigate to/contact details or open modal
  //   alert(`Show details for ${contact.name}`);
  // }
  onStatusChange(event: CustomEvent) {
    this.selectedStatus = event.detail;
    this.applyFilter();
  }

  selectedContact: Contact | null = null;

  openDetails(contact: Contact) {
    // Clone contact to avoid direct mutation
    this.selectedContact = { ...contact };
  }

  closeDetails() {
    this.selectedContact = null;
  }

  saveContact() {
    const index = this.contacts.findIndex(
      (c) => c.id === this.selectedContact?.id
    );
    if (index !== -1 && this.selectedContact) {
      this.contacts[index] = { ...this.selectedContact };
      this.applyFilter();
      this.closeDetails();
    }
  }

  users: User[] = [
    { id: '1', name: 'Jane Doe', email: 'jane@example.com', role: 'admin', group:'Contact 123' },
    { id: '2', name: 'John Smith', email: 'john@example.com', role: 'viewer',  group:'Contact 456'},
  ];

  formUser: User = this.getEmptyUser();
  editingUser: User | null = null;
  isFormOpen = false;

  getEmptyUser(): User {
    return { id: '', name: '', email: '', role: 'viewer', group:'' };
  }

  openUserForm() {
    this.formUser = this.getEmptyUser();
    this.editingUser = null;
    this.isFormOpen = true;
  }

  editUser(user: User) {
    this.formUser = { ...user };
    this.editingUser = user;
    this.isFormOpen = true;
  }

  saveUser() {
    if (this.editingUser) {
      // update
      const i = this.users.findIndex((u) => u.id === this.editingUser!.id);
      this.users[i] = { ...this.formUser };
    } else {
      // create
      this.users.push({ ...this.formUser, id: Date.now().toString() });
    }
    this.closeForm();
  }

  deleteUser(user: User) {
    this.users = this.users.filter((u) => u.id !== user.id);
  }

  closeForm() {
    this.isFormOpen = false;
  }
}
