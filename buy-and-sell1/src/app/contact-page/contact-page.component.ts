import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit{

  email: string = "";
  message: string = "";
  listing!: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.listing = fakeListings.find(listing => listing.id === id)!;
    this.message = `Hi, I am interested in your ${this.listing.name.toLowerCase()}`;
    
  }

  sendMessage(): void{
    alert("Your message has been sent!");
    this.router.navigateByUrl("/listings");
  }

}
