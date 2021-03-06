import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DetailOeuvrePage } from '../../pages/detailOeuvre/detailOeuvre';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  title:string;
  description:string;
  image:string;
  author:string;
  url:string;
  sound:string;
  soundMenu:boolean;
  authorBio:string;
  date:string;
  size:string;
  oeuvre;
  bornText;
  techText;
  workText;
  sharingOptions: object = {
    message: '@fondationfrances',
    url: this.url,
    subject: 'Exposition du moment',


  };

  constructor(public nav: NavController, public navParams: NavParams, private iab: InAppBrowser, private vibration: Vibration, private socialSharing: SocialSharing) {
    this.navParams   = navParams;
    this.oeuvre      = navParams.get('oeuvre');
    this.bornText    = this.navParams.get('oeuvre').bornText;
    this.techText    = this.navParams.get('oeuvre').techText;
    this.workText    = this.navParams.get('oeuvre').workText;
    this.date        = this.navParams.get('oeuvre').date;
    this.size        = this.navParams.get('oeuvre').size;
    this.authorBio   = this.navParams.get('oeuvre').authorBio;
    this.title       = this.navParams.get('oeuvre').title;
    this.description = this.navParams.get('oeuvre').description;
    this.image       = this.navParams.get('oeuvre').image;
    this.author      = this.navParams.get('oeuvre').author;
    this.url         = this.navParams.get('oeuvre').url;
    this.sound       = this.navParams.get('oeuvre').sound;
  }
  private vibrate(){
    this.vibration.vibrate([30]);
  }
  
  private goToDetailArtiste(oeuvre){
    this.nav.push(DetailOeuvrePage , {
      oeuvre: this.oeuvre
    });
  }
}
