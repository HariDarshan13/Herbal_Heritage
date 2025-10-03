import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { remedies, categories } from '@/data/remedies';
import { Leaf, BookOpen, Users, Heart, ArrowRight, Star, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-herbal.jpg';

const Index = () => {
  const { t, language } = useLanguage();
  
  const featuredRemedies = remedies.filter(r => r.status === 'approved').slice(0, 3);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-nature py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Traditional herbal medicine" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-herbal/20 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="bg-herbal text-white p-4 rounded-2xl animate-float">
                  <Leaf className="h-12 w-12" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-herbal mb-6 animate-slide-up">
                {t('herbalHeritage')}
              </h1>
              
              <p className="text-xl sm:text-2xl text-earthy mb-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
                {t('tagline')}
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
                {t('heroSubtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
                <Button size="lg" asChild className="bg-herbal hover:bg-herbal-dark btn-large transition-bounce">
                  <Link to="/remedies">
                    <BookOpen className="mr-2 h-5 w-5" />
                    {t('exploreRemedies')}
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" asChild className="btn-large border-herbal text-herbal hover:bg-herbal hover:text-white transition-bounce">
                  <Link to="/user/submit-remedy">
                    <Heart className="mr-2 h-5 w-5" />
                    Share Knowledge
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-leaf/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-herbal mb-2">{remedies.filter(r => r.status === 'approved').length}+</div>
                <div className="text-muted-foreground">Traditional Remedies</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold text-herbal mb-2">1000+</div>
                <div className="text-muted-foreground">Community Members</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="text-4xl font-bold text-herbal mb-2">500+</div>
                <div className="text-muted-foreground">Years of Wisdom</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Remedies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-herbal mb-4">Featured Remedies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover time-tested natural healing solutions from our curated collection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRemedies.map((remedy, index) => (
                <Card key={remedy.id} className="shadow-natural hover:shadow-warm transition-smooth group animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-leaf text-herbal">
                        {categories[language][remedy.category as keyof typeof categories['en']]}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{remedy.prepTime} min</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-serif text-herbal group-hover:text-herbal-dark transition-smooth">
                      {remedy.name[language]}
                    </CardTitle>
                    <CardDescription>
                      {remedy.symptoms[language].slice(0, 2).join(', ')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-accent fill-current" />
                        <span className="text-sm capitalize">{remedy.difficulty}</span>
                      </div>
                      <Button size="sm" asChild className="bg-herbal hover:bg-herbal-dark transition-smooth">
                        <Link to={`/remedies/${remedy.id}`}>
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild className="border-herbal text-herbal hover:bg-herbal hover:text-white transition-smooth">
                <Link to="/remedies">
                  View All Remedies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
