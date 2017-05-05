import { OnInit, Component, animate, keyframes, style, trigger, transition, state } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './animate-start.component.html',
  styleUrls: ['./animate-start.component.css'],
  animations: [
    trigger('myTrigger', [
      // state('small', style({
      //   transform:'scale(1)'
      // })),
      // state('large', style({
      //   transform:'scale(1.4)'
      // })),
       state('fadeIn', style({
        opacity:'1'
      })), 
      // transition('small => large', animate('500ms ease-in'))
      // transition('large => small', animate('500ms ease-out'))

      // transition('small => large, large => small', animate('500ms'))
      //  transition('small <=> large', animate('500ms'))
      // transition('void => *',
      //   [style({
      //     opacity: '0',
      //     transform:'translateY(20px)'
      //   }),
      //   animate('500ms 0s ease-out')

      //   ])

        transition('void => *',[
          
          animate(500, keyframes([
            style({opacity:0, transform:'translateY(-30px)',offset:0}),
            style({opacity:1, transform:'translateY(5px) scale(1.02)',offset:.3}),
            style({opacity:1, transform:'translateY(0px)',offset:1})
          ]))

        ])
    ]),


    trigger('removeMe', [
      state('out',style({
        transform:'scale(0)',
        opacity:0
      })),
      transition("*=>out",[
         animate(500, keyframes([
            style({opacity:1, transform:'translateX(-8px)',offset:0}),
            style({opacity:1, transform:'translateX(0)',offset:0.3}),
            style({opacity:0, transform:'translateX(50px)',offset:1}),
           
          ]))
      ])
    ])

  ]

})
export class AnimateStartComponent {

 
  state: string = "fadeIn";
  btnState:string="in";

  items = []
  admDetails = '';

  animate() {
    //this.state = this.state === "small" ?"large":  "small";
    this.items.push("new item");
    this.state = "fadeIn";
    this.btnState = "out";
  }

  animStart(e){
    console.log("start",e)
  }
   animDone(e){
    console.log("done",e.totalTime)
  }
}


// Hvis ikke det er muligt at modtage animations events på nomal vis,
// skal det gøres via dependency injection : ChangeDetectorRef 
// f.eks: changeDetectorRef.detectChanges() 