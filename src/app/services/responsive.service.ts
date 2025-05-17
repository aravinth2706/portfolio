import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isHandset$: Observable<boolean>;
  isTablet$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    );

    this.isTablet$ = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(
      map((result) => result.matches),
      shareReplay()
    );
  }
}
