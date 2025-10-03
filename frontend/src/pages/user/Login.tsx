import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { LogIn, Loader2 } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        toast({
          title: "Success",
          description: "Logged in successfully!",
        });
        navigate('/');
      } else {
        toast({
          title: "Error",
          description: "Invalid email or password",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md shadow-natural">
          <CardHeader className="text-center">
            <div className="mx-auto bg-herbal text-white p-3 rounded-full w-fit">
              <LogIn className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl font-serif text-herbal">
              {t('signIn')}
            </CardTitle>
            <CardDescription>
              Welcome back to Herbal Heritage
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="focus:ring-herbal focus:border-herbal"
                  placeholder="user@example.com or admin@herbalheritage.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">{t('password')}</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="focus:ring-herbal focus:border-herbal"
                  placeholder="password or admin123"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full btn-large bg-herbal hover:bg-herbal-dark transition-smooth"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  t('signIn')
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <Link 
                to="/forgot-password" 
                className="text-sm text-herbal hover:text-herbal-dark transition-smooth"
              >
                {t('forgotPassword')}
              </Link>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/user/register" className="font-medium text-herbal hover:text-herbal-dark transition-smooth">
                  {t('createAccount')}
                </Link>
              </p>
            </div>

            {/* Demo credentials info */}
            <div className="mt-6 p-4 bg-leaf/20 rounded-lg">
              <p className="text-xs text-center text-muted-foreground">
                Demo: admin@herbalheritage.com / admin123 (Admin)<br/>
                Any other email/password for regular user
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}