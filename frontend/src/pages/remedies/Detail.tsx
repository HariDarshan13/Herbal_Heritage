import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { remedies, categories, Remedy } from '@/data/remedies';
import { 
  ArrowLeft, 
  Bookmark, 
  BookmarkCheck, 
  Clock, 
  Star, 
  AlertTriangle, 
  Share2,
  Flag,
  ChefHat,
  Leaf,
  Heart
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function RemedyDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  const [remedy, setRemedy] = useState<Remedy | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const foundRemedy = remedies.find(r => r.id === id);
    if (foundRemedy) {
      setRemedy(foundRemedy);
      // Check if bookmarked
      const bookmarkedIds = JSON.parse(localStorage.getItem('bookmarkedRemedies') || '[]');
      setIsBookmarked(bookmarkedIds.includes(id));
    } else {
      navigate('/remedies');
    }
  }, [id, navigate]);

  const toggleBookmark = () => {
    if (!remedy) return;
    
    const bookmarkedIds = JSON.parse(localStorage.getItem('bookmarkedRemedies') || '[]');
    const updatedIds = isBookmarked
      ? bookmarkedIds.filter((bookmarkId: string) => bookmarkId !== remedy.id)
      : [...bookmarkedIds, remedy.id];
    
    localStorage.setItem('bookmarkedRemedies', JSON.stringify(updatedIds));
    setIsBookmarked(!isBookmarked);
    
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: isBookmarked ? "Remedy removed from your bookmarks" : "Remedy saved to your bookmarks",
    });
  };

  const handleShare = () => {
    if (navigator.share && remedy) {
      navigator.share({
        title: remedy.name[language],
        text: `Check out this traditional remedy: ${remedy.name[language]}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Remedy link copied to clipboard",
      });
    }
  };

  const reportIssue = () => {
    toast({
      title: "Thank you",
      description: "Your report has been submitted. We'll review it shortly.",
    });
  };

  if (!remedy) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-nature flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-herbal mb-4">Remedy not found</h1>
            <Button asChild>
              <Link to="/remedies">Back to Remedies</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6 hover:bg-herbal/10">
            <Link to="/remedies" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>{t('back')} to Remedies</span>
            </Link>
          </Button>

          {/* Header Card */}
          <Card className="mb-6 shadow-natural">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary" className="bg-leaf text-herbal">
                      {categories[language][remedy.category as keyof typeof categories['en']]}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{remedy.prepTime} minutes</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-yellow-accent fill-current" />
                      <span className="capitalize">{remedy.difficulty}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl sm:text-3xl font-serif text-herbal mb-2">
                    {remedy.name[language]}
                  </CardTitle>
                  
                  <CardDescription className="text-base">
                    {language === 'en' ? 'Traditional Tamil remedy' : 'பாரம்பரிய தமிழ் மருத்துவம்'} • 
                    {remedy.symptoms[language].length} symptoms treated
                  </CardDescription>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleBookmark}
                    className={`transition-smooth ${
                      isBookmarked ? 'bg-herbal text-white hover:bg-herbal-dark' : 'hover:bg-herbal/10'
                    }`}
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="h-4 w-4 mr-2" />
                    ) : (
                      <Bookmark className="h-4 w-4 mr-2" />
                    )}
                    {isBookmarked ? 'Saved' : t('bookmark')}
                  </Button>
                  
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  
                  <Button variant="outline" size="sm" onClick={reportIssue}>
                    <Flag className="h-4 w-4 mr-2" />
                    Report
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Symptoms */}
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-herbal">
                    <Heart className="h-5 w-5" />
                    <span>{t('symptoms')} Treated</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {remedy.symptoms[language].map((symptom, index) => (
                      <Badge key={index} variant="outline" className="bg-leaf/10 border-herbal/20">
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Ingredients */}
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-herbal">
                    <Leaf className="h-5 w-5" />
                    <span>{t('ingredients')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {remedy.ingredients[language].map((ingredient, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-herbal rounded-full mt-2 flex-shrink-0"></div>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Preparation */}
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-herbal">
                    <ChefHat className="h-5 w-5" />
                    <span>{t('preparation')} Method</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {remedy.preparation[language]}
                  </p>
                </CardContent>
              </Card>

              {/* Dosage */}
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="text-herbal">{t('dosage')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    {remedy.dosage[language]}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Safety Tips */}
              <Card className="shadow-natural border-yellow-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-yellow-accent">
                    <AlertTriangle className="h-5 w-5" />
                    <span>{t('safetyTips')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {remedy.safetyTips[language].map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3 text-sm">
                        <AlertTriangle className="h-4 w-4 text-yellow-accent mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Feedback */}
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="text-herbal">Feedback</CardTitle>
                  <CardDescription>
                    Help improve this remedy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-herbal/10"
                    asChild
                  >
                    <Link to="/feedback">
                      Rate this remedy
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-herbal/10"
                    onClick={reportIssue}
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    Report an issue
                  </Button>
                </CardContent>
              </Card>

              {/* Related Remedies */}
              <Card className="shadow-natural">
                <CardHeader>
                  <CardTitle className="text-herbal">Related Remedies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {remedies
                      .filter(r => r.id !== remedy.id && r.category === remedy.category && r.status === 'approved')
                      .slice(0, 3)
                      .map((relatedRemedy) => (
                        <Link
                          key={relatedRemedy.id}
                          to={`/remedies/${relatedRemedy.id}`}
                          className="block p-3 rounded-lg border hover:bg-herbal/5 transition-smooth"
                        >
                          <div className="font-medium text-sm text-herbal mb-1">
                            {relatedRemedy.name[language]}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {relatedRemedy.symptoms[language].slice(0, 2).join(', ')}
                          </div>
                        </Link>
                      ))}
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