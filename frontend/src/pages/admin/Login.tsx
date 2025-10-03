import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Shield, Loader2 } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { t } = useLanguage();
  const { login, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (success && isAdmin) {
        toast({
          title: "Admin Access Granted",
          description: "Welcome to the admin dashboard!",
        });
        navigate('/admin/dashboard');
      } else if (success && !isAdmin) {
        toast({
          title: "Access Denied",
          description: "Admin credentials required",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid admin credentials",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login",
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
            <div className="mx-auto bg-earthy text-white p-3 rounded-full w-fit">
              <Shield className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl font-serif text-earthy">
              Admin Login
            </CardTitle>
            <CardDescription>
              Access the administrative dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="focus:ring-earthy focus:border-earthy"
                  placeholder="admin@herbalheritage.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Admin Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="focus:ring-earthy focus:border-earthy"
                  placeholder="admin123"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full btn-large bg-earthy hover:bg-earthy-dark transition-smooth"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  'Access Admin Dashboard'
                )}
              </Button>
            </form>
            
            {/* Demo credentials info */}
            <div className="mt-6 p-4 bg-earthy/10 rounded-lg">
              <p className="text-xs text-center text-muted-foreground">
                Demo Admin Credentials:<br/>
                Email: admin@herbalheritage.com<br/>
                Password: admin123
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}