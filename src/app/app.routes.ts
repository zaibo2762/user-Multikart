import { InMemoryScrollingOptions, Routes, provideRouter, withInMemoryScrolling } from '@angular/router';
import { ClothingComponent } from './components/pages/clothing/clothing.component';
import { NewProductComponent } from './components/pages/clothing/new-product/new-product.component';
import { BestSellerComponent } from './components/pages/clothing/best-seller/best-seller.component';
import { FeaturedComponent } from './components/pages/clothing/featured/featured.component';
import { SaleComponent } from './components/pages/clothing/sale/sale.component';
import { LoginComponent } from './components/pages/login/login.component';
import { VegetablesComponent } from './components/pages/vegetables/vegetables.component';
import { WatchesComponent } from './components/pages/watches/watches.component';
import { WNewArrivalComponent } from './components/pages/watches/w-new-arrival/w-new-arrival.component';
import { WBestsellerComponent } from './components/pages/watches/w-bestseller/w-bestseller.component';
import { WOnsaleComponent } from './components/pages/watches/w-onsale/w-onsale.component';
import { FurnitureComponent } from './components/pages/furniture/furniture.component';
import { FSaleComponent } from './components/pages/furniture/f-sale/f-sale.component';
import { FArrivalComponent } from './components/pages/furniture/f-arrival/f-arrival.component';
import { FBestComponent } from './components/pages/furniture/f-best/f-best.component';
import { FlowersComponent } from './components/pages/flowers/flowers.component';
import { FlowerBestComponent } from './components/pages/flowers/flower-best/flower-best.component';
import { FlowerFeaturedComponent } from './components/pages/flowers/flower-featured/flower-featured.component';
import { FlowerSaleComponent } from './components/pages/flowers/flower-sale/flower-sale.component';
import { BeautyComponent } from './components/pages/beauty/beauty.component';
import { ElectronicsComponent } from './components/pages/electronics/electronics.component';
import { EBestsellerComponent } from './components/pages/electronics/e-bestseller/e-bestseller.component';
import { EFeaturedProductComponent } from './components/pages/electronics/e-featured-product/e-featured-product.component';
import { EOnsaleComponent } from './components/pages/electronics/e-onsale/e-onsale.component';
import { PetsComponent } from './components/pages/pets/pets.component';
import { GymComponent } from './components/pages/gym/gym.component';
import { ToolsComponent } from './components/pages/tools/tools.component';
import { ToolsSaleComponent } from './components/pages/tools/tools-sale/tools-sale.component';
import { ToolsNewproductComponent } from './components/pages/tools/tools-newproduct/tools-newproduct.component';
import { ShoesComponent } from './components/pages/shoes/shoes.component';
import { SBestsellerComponent } from './components/pages/shoes/s-bestseller/s-bestseller.component';
import { SFeaturedComponent } from './components/pages/shoes/s-featured/s-featured.component';
import { SSaleComponent } from './components/pages/shoes/s-sale/s-sale.component';
import { SNewarrivalComponent } from './components/pages/shoes/s-newarrival/s-newarrival.component';
import { BagsComponent } from './components/pages/bags/bags.component';
import { BagNewarrivalComponent } from './components/pages/bags/bag-newarrival/bag-newarrival.component';
import { BagTrendingComponent } from './components/pages/bags/bag-trending/bag-trending.component';
import { BagBestsellerComponent } from './components/pages/bags/bag-bestseller/bag-bestseller.component';
import { MarijuanaComponent } from './components/pages/marijuana/marijuana.component';
import { MSaleComponent } from './components/pages/marijuana/m-sale/m-sale.component';
import { MBestsellerComponent } from './components/pages/marijuana/m-bestseller/m-bestseller.component';
import { CartComponent } from './components/pages/cart/cart.component';

export const routes: Routes = [
    {
        path:'clothing',
        component:ClothingComponent,
        children: [ 
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
    {
      path:'watches',
      component:WatchesComponent,
      children: [ 
        { path: '', component: WNewArrivalComponent },
        { path:'newarrival',component:WNewArrivalComponent },
        {path:'bestseller',component:WBestsellerComponent},
        { path:'sale',component:WOnsaleComponent },
        
      ],
    },
    {
      path:'furniture',
      component:FurnitureComponent,
      children: [ 
        { path: '', component: FSaleComponent },
        { path:'newarrival',component: FArrivalComponent },
        {path:'bestseller',component:FBestComponent},
        { path:'sale',component:FSaleComponent },
        
      ],
    },
    {
      path:'flower',
      component:FlowersComponent,
      children: [ 
        { path: '', component: FlowerBestComponent },
        { path:'featured',component: FlowerFeaturedComponent },
        {path:'bestseller',component:FlowerBestComponent},
        { path:'sale',component:FlowerSaleComponent },
        
      ],
    },
    {
      path:'beauty',
      component:BeautyComponent
    },
    {
      path:'electronic',
      component:ElectronicsComponent,
      children: [ 
        { path: '', component: EBestsellerComponent },
        { path:'featured',component: EFeaturedProductComponent },
        {path:'bestseller',component:EBestsellerComponent},
        { path:'sale',component:EOnsaleComponent },
        
      ],
    },
    {
      path:'pets',
      component:PetsComponent
    },
    {
      path:'gym',
      component:GymComponent
    },
    {
      path:'tools',
      component:ToolsComponent,
      children: [ 
        { path: '', component: ToolsSaleComponent },
        { path:'sale',component: ToolsSaleComponent },
        { path:'new',component: ToolsNewproductComponent },
      ]
    },
    {
      path:'shoes',
      component:ShoesComponent,
      children: [ 
        { path: '', component: SBestsellerComponent },
        { path:'featured',component: SFeaturedComponent },
        { path:'newarrival',component: SNewarrivalComponent },
        {path:'bestseller',component:SBestsellerComponent},
        { path:'sale',component:SSaleComponent },
        
      ],
      
    },
    {
      path:'bags',
      component:BagsComponent,
      children: [ 
        { path: '', component: BagNewarrivalComponent },
        { path:'newarrival',component: BagNewarrivalComponent },
        { path:'trending',component: BagTrendingComponent },
        { path:'bestseller',component: BagBestsellerComponent },
      ]
    },
    {
      path:'marijuana',
      component:MarijuanaComponent,
      children: [ 
        { path: '', component: MSaleComponent },
        { path:'sale',component: MSaleComponent },
        { path:'bestseller',component: MBestsellerComponent },
      ]
    },
    {
      path:'cart',
      component:CartComponent
    },
    
];
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled' // Must be 'enabled', 'disabled', or 'top'
};
export const routing = provideRouter(routes, withInMemoryScrolling(scrollConfig));
