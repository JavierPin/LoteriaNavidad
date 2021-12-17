
import { Component } from '@angular/core';
import { Message, TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoteriaNavidad';

  msgs:Message[] = [{severity:'info', summary:'Via Message', detail:'PrimeNG rocks'}];


  data: TreeNode[] =  [{
    label: 'Root',
    children: [
        {
            label: 'Child 1',
            children: [
              {
                label: 'Child 2',
                children: [
                    {
                        label: 'Child 2.1'
                    },
                    {
                        label: 'Child 2.2'
                    }
                ]
            }
            ]
        },

    ]
}];

}
