import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';
import { AuthResData, User } from 'src/app/models/auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit,OnDestroy {

  user:any;
  userSub:Subscription;
  profile:any;
  id:any;

  constructor(private authService: AuthService, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data) => {
        console.log(data);
        this.user = data
      }
    )
    this.id= localStorage.getItem('userid');
    this.getProf()
  }
  getProf(): void {
    this.profileService.getData(this.id).subscribe((profile) => {
      console.log(profile);
      this.profile= profile;
      console.log(this.profile);
      },err=>{
        console.log("An error occurred")
      }
    )
  }
  ngOnDestroy(){
    this.userSub.unsubscribe()
  }
}
