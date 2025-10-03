import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useLanguage } from '@/contexts/LanguageContext';
import { remedies, categories } from '@/data/remedies';
import { Search, Edit, Trash2, Eye, ArrowLeft, Plus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function ManageRemedies() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredRemedies = remedies.filter(remedy => {
    const matchesSearch = remedy.name[language].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || remedy.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || remedy.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleEdit = (id: string) => {
    toast({
      title: "Edit Functionality",
      description: `Edit remedy ${id} - would open edit form`,
    });
  };

  const handleDelete = (id: string) => {
    toast({
      title: "Delete Confirmation",
      description: `Delete remedy ${id} - would show confirmation dialog`,
      variant: "destructive"
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-herbal text-white">Approved</Badge>;
      case 'pending':
        return <Badge variant="outline" className="border-yellow-accent text-yellow-accent">Pending</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="border-destructive text-destructive">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Button variant="ghost" asChild className="mb-4 hover:bg-herbal/10">
                <Link to="/admin/dashboard" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Dashboard</span>
                </Link>
              </Button>
              <h1 className="text-3xl font-serif font-bold text-earthy mb-2">
                Manage Remedies
              </h1>
              <p className="text-muted-foreground">
                Edit, approve, or remove remedies from the database
              </p>
            </div>
            <Button className="bg-herbal hover:bg-herbal-dark">
              <Plus className="h-4 w-4 mr-2" />
              Add New Remedy
            </Button>
          </div>

          {/* Filters */}
          <Card className="mb-6 shadow-natural">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search remedies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 focus:ring-herbal focus:border-herbal"
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-48">
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
              </div>
              
              <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredRemedies.length} of {remedies.length} remedies
              </div>
            </CardContent>
          </Card>

          {/* Remedies Table */}
          <Card className="shadow-natural">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Difficulty</TableHead>
                    <TableHead>Prep Time</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRemedies.map((remedy) => (
                    <TableRow key={remedy.id} className="hover:bg-herbal/5">
                      <TableCell>
                        <div>
                          <div className="font-medium text-herbal">
                            {remedy.name[language]}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {remedy.symptoms[language].slice(0, 2).join(', ')}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-leaf/10">
                          {categories[language][remedy.category as keyof typeof categories['en']]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(remedy.status)}
                      </TableCell>
                      <TableCell>
                        <span className="capitalize">{remedy.difficulty}</span>
                      </TableCell>
                      <TableCell>
                        {remedy.prepTime} min
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            asChild
                          >
                            <Link to={`/remedies/${remedy.id}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => handleEdit(remedy.id)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => handleDelete(remedy.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {filteredRemedies.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-herbal mb-2">No remedies found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or filters
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}