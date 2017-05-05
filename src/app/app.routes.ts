import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {AppComponent} from "app/app.component";
import {ExamplesComponent} from "app/examples/examples.component";
import {HowtoComponent} from "app/howto/howto.component";


export const router:Routes =[
    {path:'',redirectTo:'howto', pathMatch:'full' },
    {path:'howto',component:HowtoComponent },
    {path:'examples',component:ExamplesComponent },
    {path:'',component:AppComponent },
    
    
]
export const routes : ModuleWithProviders = RouterModule.forRoot(router);
