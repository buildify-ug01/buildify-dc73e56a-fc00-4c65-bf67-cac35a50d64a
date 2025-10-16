
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to CycleMate 🌸</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Your smart companion for cycle tracking and fertility insights
          </p>
          <Button 
            onClick={() => navigate('/')} 
            className="w-full"
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}