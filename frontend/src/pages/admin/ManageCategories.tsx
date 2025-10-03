import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories, remedies } from '@/data/remedies';
import { ArrowLeft, Plus, Edit, Trash2, Save } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Category {
  id: string;
  nameEn: string;
  nameTa: string;
  remedyCount: number;
}

export default function ManageCategories() {
  const { t, language } = useLanguage();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [newCategory, setNewCategory] = useState({ nameEn: '', nameTa: '' });

  // Convert categories to array with remedy counts
  const categoryList: Category[] = Object.entries(categories.en).map(([id, nameEn]) => ({
    id,
    nameEn,
    nameTa: categories.ta[id as keyof typeof categories.ta],
    remedyCount: remedies.filter(r => r.category === id).length
  }));

  const handleAddCategory = () => {
    if (!newCategory.nameEn || !newCategory.nameTa) {
      toast({
        title: "Validation Error",
        description: "Please fill in both English and Tamil names",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Category Added",
      description: `New category "${newCategory.nameEn}" has been added`,
    });
    
    setNewCategory({ nameEn: '', nameTa: '' });
    setIsAddDialogOpen(false);
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setIsEditDialogOpen(true);
  };

  const handleUpdateCategory = () => {
    if (!editingCategory) return;

    toast({
      title: "Category Updated",
      description: `Category "${editingCategory.nameEn}" has been updated`,
    });
    
    setEditingCategory(null);
    setIsEditDialogOpen(false);
  };

  const handleDeleteCategory = (category: Category) => {
    if (category.remedyCount > 0) {
      toast({
        title: "Cannot Delete",
        description: `Cannot delete category with ${category.remedyCount} remedies`,
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Category Deleted",
      description: `Category "${category.nameEn}" has been deleted`,
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
                Manage Categories
              </h1>
              <p className="text-muted-foreground">
                Add, edit, or remove remedy categories
              </p>
            </div>

            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-herbal hover:bg-herbal-dark">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Category
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Category</DialogTitle>
                  <DialogDescription>
                    Create a new category for organizing remedies
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nameEn">Category Name (English)</Label>
                    <Input
                      id="nameEn"
                      value={newCategory.nameEn}
                      onChange={(e) => setNewCategory(prev => ({ ...prev, nameEn: e.target.value }))}
                      placeholder="e.g., Heart Health"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nameTa">Category Name (Tamil)</Label>
                    <Input
                      id="nameTa"
                      value={newCategory.nameTa}
                      onChange={(e) => setNewCategory(prev => ({ ...prev, nameTa: e.target.value }))}
                      placeholder="e.g., இதய ஆரோக்கியம்"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddCategory} className="bg-herbal hover:bg-herbal-dark">
                    <Save className="h-4 w-4 mr-2" />
                    Add Category
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Categories Table */}
          <Card className="shadow-natural">
            <CardHeader>
              <CardTitle className="text-earthy">Categories Overview</CardTitle>
              <CardDescription>
                Manage remedy categories and their properties
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category Name</TableHead>
                    <TableHead>Tamil Name</TableHead>
                    <TableHead>Remedies Count</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categoryList.map((category) => (
                    <TableRow key={category.id} className="hover:bg-herbal/5">
                      <TableCell>
                        <div className="font-medium text-herbal">
                          {category.nameEn}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">
                          {category.nameTa}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-leaf/10">
                          {category.remedyCount} remedies
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => handleEditCategory(category)}
                            className="hover:bg-herbal/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => handleDeleteCategory(category)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            disabled={category.remedyCount > 0}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Edit Dialog */}
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Category</DialogTitle>
                <DialogDescription>
                  Update the category information
                </DialogDescription>
              </DialogHeader>
              {editingCategory && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="editNameEn">Category Name (English)</Label>
                    <Input
                      id="editNameEn"
                      value={editingCategory.nameEn}
                      onChange={(e) => setEditingCategory(prev => prev ? { ...prev, nameEn: e.target.value } : null)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="editNameTa">Category Name (Tamil)</Label>
                    <Input
                      id="editNameTa"
                      value={editingCategory.nameTa}
                      onChange={(e) => setEditingCategory(prev => prev ? { ...prev, nameTa: e.target.value } : null)}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    This category contains {editingCategory.remedyCount} remedies
                  </div>
                </div>
              )}
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleUpdateCategory} className="bg-herbal hover:bg-herbal-dark">
                  <Save className="h-4 w-4 mr-2" />
                  Update Category
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Statistics Card */}
          <Card className="mt-6 shadow-natural">
            <CardHeader>
              <CardTitle className="text-earthy">Category Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-herbal">{categoryList.length}</div>
                  <div className="text-sm text-muted-foreground">Total Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-herbal">
                    {Math.max(...categoryList.map(c => c.remedyCount))}
                  </div>
                  <div className="text-sm text-muted-foreground">Most Popular</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-herbal">
                    {Math.min(...categoryList.map(c => c.remedyCount))}
                  </div>
                  <div className="text-sm text-muted-foreground">Least Popular</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-herbal">
                    {Math.round(categoryList.reduce((sum, c) => sum + c.remedyCount, 0) / categoryList.length)}
                  </div>
                  <div className="text-sm text-muted-foreground">Avg per Category</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}