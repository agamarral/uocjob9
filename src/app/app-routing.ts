import { Routes } from "@angular/router";
/* import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard'; */

export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full"
  },
  {
    path: "signin",
    loadChildren: () =>
      import("./views/signin/signin.module").then(m => m.SigninModule),
    data: { title: "Signin" }
  },
  {
    path: "forgot-password",
    loadChildren: () =>
      import("./views/forgot-password/forgot-password.module").then(
        m => m.ForgotPasswordModule
      ),
    data: { title: "Forgot Password" }
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./views/signup/signup.module").then(m => m.SignupModule),
    data: { title: "Signup" }
  },
  {
    path: "admin",
    /*  component: AdminLayoutComponent, */
    /* canActivate: [AuthGuard], */
    children: [
      {
        path: "student/dashboard/:id",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            m => m.DashboardModule
          ),

        data: { title: "Student dashboard" }
      },
      {
        path: "company/dashboard/:id",
        loadChildren: () =>
          import("./views/dashboard-company/dashboard-company.module").then(
            m => m.DashboardCompanyModule
          ),

        data: { title: "Company dashboard" }
      },
      {
        path: "favorites",
        loadChildren: () =>
          import("./views/favorites/favorites.module").then(
            m => m.FavoritesModule
          ),

        data: { title: "Favorites" }
      },
      {
        path: "student/profile/:id",
        loadChildren: () =>
          import("./views/profile/profile.module").then(m => m.ProfileModule),
        data: { title: "Student Profile" }
      },

      {
        path: "student/offers/:id",
        loadChildren: () =>
          import("./views/offers/offers.module").then(m => m.OffersModule),
        data: { title: "Student Offers" }
      },
      {
        path: "student/filtered/offers/:id",
        loadChildren: () =>
          import("./views/offers/offers.module").then(m => m.OffersModule),
        data: { title: "Filtered Student Offers" }
      },
      {
        path: "company/profile/:id",
        loadChildren: () =>
          import("./views/company-profile/company-profile.module").then(m => m.CompanyProfileModule),
        data: { title: "Company Profile" }
      },

      {
        path: "company/offers/:id",
        loadChildren: () =>
          import("./views/company-offers/company-offers.module").then(m => m.CompanyOffersModule),
        data: { title: "Company Offers" }
      }
    ]
  },
  {
    path: "**",
    redirectTo: "sessions/404"
  }
];
