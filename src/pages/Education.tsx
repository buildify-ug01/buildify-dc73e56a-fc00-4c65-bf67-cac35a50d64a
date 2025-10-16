
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Education() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Learn & Grow</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Educational Content</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Articles, tips, and educational resources coming soon...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}