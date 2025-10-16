
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Insights() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Cycle Insights</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Analytics Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Detailed cycle analytics and patterns coming soon...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}