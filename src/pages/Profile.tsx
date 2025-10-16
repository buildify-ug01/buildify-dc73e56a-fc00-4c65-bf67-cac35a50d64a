
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Profile & Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Profile settings and preferences coming soon...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}