import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IpAddressResponse, IpaddressService } from '@shared/services/ipaddress/ipaddress.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
@Injectable({
  providedIn: 'root',
})
export class IpAddressGuard implements CanActivate {
  constructor(private router: Router, private ipAddress: IpaddressService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.ipAddress
      .validateIpAddress()
      .then(async (res: Response) => {
        const geolocation: IpAddressResponse = await res.json();
        console.log('geolocation ==> ', geolocation);
        return geolocation.success;
      })
      .catch((err) => {
        this.router.navigate([routes.root.suspended.unauthorized.full]);
        return false;
      });
  }
}
