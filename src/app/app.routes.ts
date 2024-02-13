import { Routes } from '@angular/router';
import { AllblogpageComponent } from './Components/allblogpage/allblogpage.component';
import { DetailedblogComponent } from './Components/detailedblog/detailedblog.component';
import { InsertblogComponent } from './Components/insertblog/insertblog.component';
import { LoginComponent } from './Components/login/login.component';
import { UpdatecompComponent } from './Components/updatecomp/updatecomp.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { PersonalblogsComponent } from './Components/personalblogs/personalblogs.component';
import { ViewblogComponent } from './Components/viewblog/viewblog.component';
import { ServicesComponent } from './Components/services/services.component';
import { RegisterComponent } from './Components/register/register.component';

export const routes: Routes = [


    {path:"" ,component:HomepageComponent},
    {path:"detailBlog/:id" ,component:DetailedblogComponent},
    {path:"allblogs",component:AllblogpageComponent},
    {path:"insertblog",component:InsertblogComponent},
    {path:"updateblog/:id",component:UpdatecompComponent},
    {path:"login",component:LoginComponent},
    {path:"personal",component:PersonalblogsComponent},
    {path:"viewBlog/:id",component:ViewblogComponent},
    {path:"services",component:ServicesComponent},
    {path:"register",component:RegisterComponent},


];