import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { remedies, categories, Remedy } from '@/data/remedies';
import { Bookmark, BookmarkCheck, Clock, Star } from 'lucide-react';

export default function Bookmarks() {
  const { t, language } = useLanguage();
  const [bookmarkedRemedies, setBookmarkedRemedies] = useState<Remedy[]>([]);

  useEffect(() => {
    // Get bookmarked remedy IDs from localStorage
    const bookmarkedIds = JSON.parse(localStorage.getItem('bookmarkedRemedies') || '[]');
    const bookmarked = remedies.filter(remedy => bookmarkedIds.includes(remedy.id));
    setBookmarkedRemedies(bookmarked);
  }, []);

  const removeBookmark = (remedyId: string) => {
    const bookmarkedIds = JSON.parse(localStorage.getItem('bookmarkedRemedies') || '[]');
    const updatedIds = bookmarkedIds.filter((id: string) => id !== remedyId);
    localStorage.setItem('bookmarkedRemedies', JSON.stringify(updatedIds));
    setBookmarkedRemedies(prev => prev.filter(remedy => remedy.id !== remedyId));
  };

  if (bookmarkedRemedies.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-nature py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/50 p-8 rounded-2xl shadow-natural">
              <div className="mx-auto bg-herbal text-white p-4 rounded-full w-fit mb-4">
                <Bookmark className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-herbal mb-4">
                {t('bookmarks')}
              </h1>
              <p className="text-muted-foreground mb-6">
                You haven't bookmarked any remedies yet. Start exploring to save your favorites!
              </p>
              <Button asChild className="bg-herbal hover:bg-herbal-dark">
                <Link to="/remedies">
                  {t('exploreRemedies')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-herbal mb-2">
              {t('bookmarks')}
            </h1>
            <p className="text-muted-foreground">
              Your saved traditional remedies ({bookmarkedRemedies.length} items)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkedRemedies.map((remedy) => (
              <Card key={remedy.id} className="shadow-natural transition-smooth hover:shadow-warm group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-serif text-herbal mb-2">
                        {remedy.name[language]}
                      </CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-leaf text-herbal">
                          {categories[language][remedy.category as keyof typeof categories['en']]}
                        </Badge>
                        <div className="flex items-center space-x-1 text-xs">
                          <Clock className="h-3 w-3" />
                          <span>{remedy.prepTime} min</span>
                        </div>
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeBookmark(remedy.id)}
                      className="text-herbal hover:text-destructive transition-smooth"
                    >
                      <BookmarkCheck className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm text-herbal mb-1">
                        {t('symptoms')}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {remedy.symptoms[language].slice(0, 3).map((symptom, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {symptom}
                          </Badge>
                        ))}
                        {remedy.symptoms[language].length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{remedy.symptoms[language].length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-accent fill-current" />
                        <span className="text-sm">
                          {remedy.difficulty === 'easy' ? 'Easy' : 
                           remedy.difficulty === 'medium' ? 'Medium' : 'Hard'}
                        </span>
                      </div>
                      <Button 
                        asChild 
                        size="sm" 
                        className="bg-herbal hover:bg-herbal-dark transition-smooth"
                      >
                        <Link to={`/remedies/${remedy.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}