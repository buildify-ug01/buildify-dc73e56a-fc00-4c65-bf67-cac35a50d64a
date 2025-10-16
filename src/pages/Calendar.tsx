
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Calendar() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Cycle Calendar</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Calendar View</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Interactive calendar with cycle tracking coming soon...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}