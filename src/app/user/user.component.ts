import { Component, computed, input, Input } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)


  // decorater approach
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}  ) name!: string;

  /** ANGULAR 18 feature | signal approach */
  // <img [src]="imagePath()" [alt]="name()"/> 
  // this. set()  signals does not work
  // read only property
  avatar = input<string>();
  name = input<string>();
  imagePath = computed(() => {return 'assets/users/' + this.avatar()})

  /** use imagePath instaead of calling a function
   * getter doesnot work with signals
   * instead use computed from angular core */ 
  // get imagePath() {
  //   // console.log(this.selectedUser)
  //   // return 'assets/users/' + this.selectedUser.avatar;
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex]
  }
}
