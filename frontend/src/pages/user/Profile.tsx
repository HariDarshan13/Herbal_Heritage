import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { User, Settings, Save } from 'lucide-react';

export default function Profile() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSave = () => {
    toast({
      title: "Success",
      description: "Profile updated successfully!",
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-herbal mb-2">
              {t('profile')}
            </h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <Card className="shadow-natural">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-herbal text-white p-2 rounded-full">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your account details</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('fullName')}</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="focus:ring-herbal focus:border-herbal"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="focus:ring-herbal focus:border-herbal"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Account Type</Label>
                    <div className="px-3 py-2 bg-leaf/20 rounded-md text-sm">
                      {user?.role === 'admin' ? 'Administrator' : 'Regular User'}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleSave}
                    className="bg-herbal hover:bg-herbal-dark transition-smooth"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {t('save')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Settings Card */}
            <div>
              <Card className="shadow-natural">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-earthy text-white p-2 rounded-full">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>Settings</CardTitle>
                      <CardDescription>Manage your preferences</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Language</span>
                    <span className="text-sm text-muted-foreground">
                      {t('language') === 'en' ? 'English' : 'தமிழ்'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Joined</span>
                    <span className="text-sm text-muted-foreground">
                      March 2024
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Remedies Submitted</span>
                    <span className="text-sm text-muted-foreground">0</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Bookmarks</span>
                    <span className="text-sm text-muted-foreground">0</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}