import {Component} from '@angular/core';
import {animate, trigger, style, transition, keyframes} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger("moveInLeft", [transition("void=> *", [style({transform: "translateX(300px)"}), animate(200, keyframes([style({transform: "translateX(300px)"}), style({transform: "translateX(0)"})]))]),
    transition("*=>void", [style({transform: "translateX(0px)"}), animate(100, keyframes([style({transform: "translateX(0px)"}), style({transform: "translateX(300px)"})]))])])
  ]
})
export class AppComponent {
  title = 'Magnis';
  commentArray = [
    {
      text: 'There is such a thing as the history of mathematics, for example, the names of mathematicians are the names of the basic mathematical terms. In Russia, mathematics is often taught separately from the history of its discoveries; the European school contains a culture of telling about the process of how this or that formula of scientific thinking was discovered.\n',
      parent: -1,
      key: 0
    },
    {text: 'Is programming worth learning?\n', parent: -1, key: 1},
    {text: 'A collective can master a broader literary or problem field than an individual. The team accumulates the individual research habits of its members, due to which it can see more. And the dwarf sees further, standing not only on the shoulders of giants, but also on the shoulders of other dwarfs.\n', parent: 1, key: 2}
  ];
  response: any;

  addComment(form, key = -1) {
    if (form.value.comment !== "" && form.value.comment !== null) {
      this.commentArray.push({text: form.value.comment, parent: key, key: this.commentArray.length});
      form.reset();
    } else {
      alert('Field required **')
    }
  }

  /*delete item*/
  deleteItem(comment) {
    this.commentArray = this.commentArray.filter((el) => el.key !== comment.key)
  }
}

