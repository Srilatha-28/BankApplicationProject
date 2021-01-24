import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CustomeraccountDetailsComponent } from './customeraccount-details/customeraccount-details.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './transfer/transfer.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { WithdrawComponent } from './withdraw/withdraw.component';


const routes: Routes = [
  {path:'accounts', component: AccountComponent},
  {path:'create-account', component: CreateAccountComponent},
  {path:'update-account/:accountId', component: UpdateAccountComponent},
  {path:'customeraccount-details/:accountId', component: CustomeraccountDetailsComponent},
  {path:'transfer', component: TransferComponent},
  {path:'deposit', component: DepositComponent},
  {path:'withdraw', component: WithdrawComponent},
  {path:'', redirectTo:'accounts', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
