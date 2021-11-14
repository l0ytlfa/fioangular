import  {Routes} from '@angular/router'

import { MyComponent } from '../mycomp/mycomp.component'
import { AppComponent } from '../app.component'
import { SecondPageComponent} from '../second-page/second-page.component'
import { MainPageComponent} from '../main-page/main-page.component'

export const MyAppRouting: Routes=[
    {path:'', component: MainPageComponent},
    {path:'second', component: SecondPageComponent}
]