import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/models/user-data.model';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  public userData: UserData = new UserData();

  constructor(private _router: Router, private _signUpService: SignUpService) {
    this.userData = _signUpService.userData;
  }

  ngOnInit(): void {
    // In the event that the same route is reloaded without any available user data to display
    // then take them back to the sign up form
    if (!this.userData.firstName) {
      this._router.navigateByUrl('');
    }
  }
}
