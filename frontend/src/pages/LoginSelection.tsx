import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Shield } from 'lucide-react';

export default function LoginSelection() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-herbal mb-2">
              {t('login')}
            </h1>
            <p className="text-muted-foreground">
              Choose your login type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Login */}
            <Link to="/user/login">
              <Card className="shadow-natural hover:shadow-lg transition-all duration-300 cursor-pointer h-full border-2 hover:border-herbal">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-herbal text-white p-4 rounded-full w-fit mb-4">
                    <User className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-herbal">
                    User Login
                  </CardTitle>
                  <CardDescription className="text-base">
                    Access your account to browse and bookmark remedies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-herbal hover:bg-herbal-dark transition-smooth">
                    Continue as User
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Admin Login */}
            <Link to="/admin/login">
              <Card className="shadow-natural hover:shadow-lg transition-all duration-300 cursor-pointer h-full border-2 hover:border-earthy">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-earthy text-white p-4 rounded-full w-fit mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-earthy">
                    Admin Login
                  </CardTitle>
                  <CardDescription className="text-base">
                    Access the admin dashboard to manage remedies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-earthy hover:bg-earthy-dark transition-smooth">
                    Continue as Admin
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
