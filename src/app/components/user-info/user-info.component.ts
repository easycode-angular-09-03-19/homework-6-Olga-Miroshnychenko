import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UsersService } from '../../services/users.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  user;
  isEdit = false;
constructor(
    private ngFlashMessageService: NgFlashMessageService,
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.userService.getuserById(id).subscribe(data => {
      this.user = data;
    }, (err) => {
      console.log(err);
    });
}
    onEdit() {
      this.isEdit = true;
    }
    onSubmiteForm() {
      const id = this.route.snapshot.params.id;
      this.userService.putUserAfterEdite(id).subscribe(data => {
        this.user = data;
        this.ngFlashMessageService.showFlashMessage({
          messages: ['All changes are made'], timeout : 2500
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2500);
      }, (err) => {
        console.log(err);
      });
    }
  onBack() {
    this.location.back();
  }
  }
