import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Eye 
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import toast, { Toaster } from 'react-hot-toast';

interface Remedy {
  _id: string;
  nameEn: string;
  nameTa: string;
  category: string;
  difficulty: string;
  prepTime: string;
  symptomsEn: string;
  symptomsTa: string;
  ingredientsEn: string;
  ingredientsTa: string;
  preparationEn: string;
  preparationTa: string;
  dosageEn: string;
  dosageTa: string;
  safetyTipsEn: string;
  safetyTipsTa: string;
  submittedBy: string | null;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const { t } = useLanguage();
  const { isAdmin, user } = useAuth();
  const navigate = useNavigate();

  const [pendingRemedies, setPendingRemedies] = useState<Remedy[]>([]);
  const [selectedRemedy, setSelectedRemedy] = useState<Remedy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }

    const fetchPendingRemedies = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/remedies`);
        if (!res.ok) throw new Error('Failed to fetch remedies');

        const json = await res.json();
        const allRemedies = Array.isArray(json.remedies) ? json.remedies : [];
        const pending = allRemedies.filter(r => r.status?.toLowerCase() === 'pending');
        setPendingRemedies(pending);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPendingRemedies();
  }, [isAdmin, navigate]);

  const updateRemedyStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://herbal-heritage-backendssss.onrender.com'}/api/remedies/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      if (!res.ok) throw new Error('Failed to update status');

      // Remove from pending in frontend
      setPendingRemedies(prev => prev.filter(r => r._id !== id));

      // Show toast notification
      toast.success(`Remedy ${status === 'approved' ? 'approved' : 'rejected'} successfully`);
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    }
  };

  const approveRemedy = (id: string) => updateRemedyStatus(id, 'approved');
  const rejectRemedy = (id: string) => updateRemedyStatus(id, 'rejected');
  const previewRemedy = (remedy: Remedy) => {
    setSelectedRemedy(remedy);
    setIsModalOpen(true);
  };

  if (!isAdmin) return null;

  return (
    <Layout>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-nature py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-earthy mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {user?.name}. Manage remedies and content.
            </p>
          </div>

          {/* Pending Remedies */}
          <Card className="shadow-natural">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-earthy">
                <Clock className="h-5 w-5" />
                <span>Pending Remedies</span>
              </CardTitle>
              <CardDescription>
                Review and approve submitted remedies
              </CardDescription>
            </CardHeader>
            <CardContent>
              {pendingRemedies.length === 0 ? (
                <p className="text-muted-foreground">No pending remedies</p>
              ) : (
                <div className="space-y-4">
                  {pendingRemedies.map((remedy) => (
                    <div key={remedy._id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-herbal">{remedy.nameEn}</h4>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {remedy.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          onClick={() => approveRemedy(remedy._id)}
                          className="bg-herbal hover:bg-herbal-dark transition-smooth"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" /> Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => rejectRemedy(remedy._id)}
                          className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                        >
                          <XCircle className="h-4 w-4 mr-1" /> Reject
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => previewRemedy(remedy)}>
                          <Eye className="h-4 w-4 mr-1" /> Preview
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Preview Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl p-6 bg-white rounded-lg shadow-xl">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-herbal">Remedy Details</DialogTitle>
            </DialogHeader>
            {selectedRemedy && (
              <div className="space-y-3 mt-2">
                <p><strong>Name (EN):</strong> {selectedRemedy.nameEn}</p>
                <p><strong>Name (TA):</strong> {selectedRemedy.nameTa}</p>
                <p><strong>Category:</strong> {selectedRemedy.category}</p>
                <p><strong>Difficulty:</strong> {selectedRemedy.difficulty}</p>
                <p><strong>Prep Time:</strong> {selectedRemedy.prepTime} minutes</p>
                <p><strong>Symptoms (EN):</strong> {selectedRemedy.symptomsEn}</p>
                <p><strong>Symptoms (TA):</strong> {selectedRemedy.symptomsTa}</p>
                <p><strong>Ingredients (EN):</strong> {selectedRemedy.ingredientsEn}</p>
                <p><strong>Ingredients (TA):</strong> {selectedRemedy.ingredientsTa}</p>
                <p><strong>Preparation (EN):</strong> {selectedRemedy.preparationEn}</p>
                <p><strong>Preparation (TA):</strong> {selectedRemedy.preparationTa}</p>
                <p><strong>Dosage (EN):</strong> {selectedRemedy.dosageEn}</p>
                <p><strong>Dosage (TA):</strong> {selectedRemedy.dosageTa}</p>
                <p><strong>Safety Tips (EN):</strong> {selectedRemedy.safetyTipsEn}</p>
                <p><strong>Safety Tips (TA):</strong> {selectedRemedy.safetyTipsTa}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}
