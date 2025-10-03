import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { remedies, categories, Remedy } from '@/data/remedies';
import { Search, Filter, Clock, Star, Bookmark, Mic, MicOff } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function RemedyListing() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [isListening, setIsListening] = useState(false);
  const [bookmarkedRemedies, setBookmarkedRemedies] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('bookmarkedRemedies') || '[]');
  });

  const filteredRemedies = useMemo(() => {
    return remedies.filter(remedy => {
      const matchesSearch = remedy.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
                           remedy.symptoms[language].some(symptom => 
                             symptom.toLowerCase().includes(searchTerm.toLowerCase())
                           ) ||
                           remedy.ingredients[language].some(ingredient => 
                             ingredient.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      
      const matchesCategory = categoryFilter === 'all' || remedy.category === categoryFilter;
      const matchesDifficulty = difficultyFilter === 'all' || remedy.difficulty === difficultyFilter;
      
      return matchesSearch && matchesCategory && matchesDifficulty && remedy.status === 'approved';
    });
  }, [searchTerm, categoryFilter, difficultyFilter, language]);

  const toggleBookmark = (remedyId: string) => {
    const updatedBookmarks = bookmarkedRemedies.includes(remedyId)
      ? bookmarkedRemedies.filter(id => id !== remedyId)
      : [...bookmarkedRemedies, remedyId];
    
    setBookmarkedRemedies(updatedBookmarks);
    localStorage.setItem('bookmarkedRemedies', JSON.stringify(updatedBookmarks));
    
    toast({
      title: bookmarkedRemedies.includes(remedyId) ? "Removed from bookmarks" : "Added to bookmarks",
      description: bookmarkedRemedies.includes(remedyId) ? "Remedy removed from your bookmarks" : "Remedy saved to your bookmarks",
    });
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsListening(true);
      
      // Simulate voice search functionality
      setTimeout(() => {
        setIsListening(false);
        toast({
          title: t('voiceSearch'),
          description: "Voice search functionality would be implemented here",
        });
      }, 2000);
    } else {
      toast({
        title: "Not Supported",
        description: "Voice search is not supported on this browser",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-herbal mb-2">
              {t('allRemedies')}
            </h1>
            <p className="text-muted-foreground">
              Discover traditional Tamil healing remedies passed down through generations
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8 shadow-natural">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder={`${t('search')} remedies, symptoms, or ingredients...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 focus:ring-herbal focus:border-herbal"
                  />
                </div>

                {/* Voice Search */}
                <Button
                  variant="outline"
                  onClick={handleVoiceSearch}
                  className={`transition-smooth ${isListening ? 'bg-herbal text-white' : 'hover:bg-herbal/10'}`}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  {isListening ? t('listening') : t('voiceSearch')}
                </Button>

                {/* Category Filter */}
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full lg:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="respiratory">Respiratory</SelectItem>
                    <SelectItem value="digestive">Digestive</SelectItem>
                    <SelectItem value="skin">Skin Care</SelectItem>
                    <SelectItem value="general">General Health</SelectItem>
                  </SelectContent>
                </Select>

                {/* Difficulty Filter */}
                <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                  <SelectTrigger className="w-full lg:w-32">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Results count */}
              <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredRemedies.length} of {remedies.filter(r => r.status === 'approved').length} remedies
              </div>
            </CardContent>
          </Card>

          {/* Remedies Grid */}
          {filteredRemedies.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-white/50 p-8 rounded-2xl shadow-natural inline-block">
                <Search className="h-12 w-12 text-herbal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-herbal mb-2">No remedies found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRemedies.map((remedy) => (
                <Card key={remedy.id} className="shadow-natural transition-smooth hover:shadow-warm group animate-fade-in">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-serif text-herbal mb-2 group-hover:text-herbal-dark transition-smooth">
                          {remedy.name[language]}
                        </CardTitle>
                        <CardDescription className="flex items-center flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-leaf text-herbal">
                            {categories[language][remedy.category as keyof typeof categories['en']]}
                          </Badge>
                          <div className="flex items-center space-x-1 text-xs">
                            <Clock className="h-3 w-3" />
                            <span>{remedy.prepTime} min</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs">
                            <Star className="h-3 w-3 text-yellow-accent fill-current" />
                            <span className="capitalize">{remedy.difficulty}</span>
                          </div>
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleBookmark(remedy.id)}
                        className={`transition-smooth ${
                          bookmarkedRemedies.includes(remedy.id) 
                            ? 'text-herbal' 
                            : 'text-muted-foreground hover:text-herbal'
                        }`}
                      >
                        <Bookmark 
                          className={`h-4 w-4 ${
                            bookmarkedRemedies.includes(remedy.id) ? 'fill-current' : ''
                          }`} 
                        />
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
                      
                      <div>
                        <h4 className="font-medium text-sm text-herbal mb-1">
                          Key {t('ingredients')}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {remedy.ingredients[language].slice(0, 2).join(', ')}
                          {remedy.ingredients[language].length > 2 && '...'}
                        </p>
                      </div>
                      
                      <div className="pt-3 border-t">
                        <Button 
                          asChild 
                          className="w-full bg-herbal hover:bg-herbal-dark transition-smooth"
                        >
                          <Link to={`/remedies/${remedy.id}`}>
                            View Full Recipe
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}