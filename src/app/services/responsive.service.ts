import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isMobile$: Observable<boolean>;
  isTablet$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    );

    this.isTablet$ = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(
      map((result) => result.matches),
      shareReplay()
    );
  }
}

// Breakpoints.XSmall   // < 600px (mobile)
// Breakpoints.Small    // 600 - 959px (tablet portrait)
// Breakpoints.Medium   // 960 - 1279px (tablet landscape)
// Breakpoints.Large    // 1280 - 1919px (desktop)
// Breakpoints.XLarge   // > 1920px

// Breakpoints.Handset  // XSmall & Small
// Breakpoints.Tablet   // Medium
// Breakpoints.Web      // Large & XLarge
