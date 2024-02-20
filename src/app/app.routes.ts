import { Routes } from '@angular/router';
import { ClothingComponent } from './components/pages/clothing/clothing.component';
import { NewProductComponent } from './components/pages/clothing/new-product/new-product.component';
import { BestSellerComponent } from './components/pages/clothing/best-seller/best-seller.component';
import { FeaturedComponent } from './components/pages/clothing/featured/featured.component';
import { SaleComponent } from './components/pages/clothing/sale/sale.component';
import { LoginComponent } from './components/pages/login/login.component';
import { VegetablesComponent } from './components/pages/vegetables/vegetables.component';

export const routes: Routes = [
    {
        path:'clothing',
        component:ClothingComponent,
        children: [ // Child routes nested within the parent
      { path: '', component: NewProductComponent },
      { path:'newproduct',component:NewProductComponent },
      {path:'bestseller',component:BestSellerComponent},
      { path:'featured',component:FeaturedComponent },
      { path:'sale',component:SaleComponent },
    ],
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'',
      component:LoginComponent
    },
    {
      path:'vegetable',
      component:VegetablesComponent
    },
    
];
