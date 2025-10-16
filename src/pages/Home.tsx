
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Heart, 
  Droplets, 
  Moon, 
  Plus,
  Bell,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [currentDay] = useState(14); // Mock current cycle day
  const [cycleLength] = useState(28);
  
  const cycleProgress = (currentDay / cycleLength) * 100;
  const daysUntilPeriod = cycleLength - currentDay;
  
  const getCurrentPhase = () => {
    if (currentDay <= 5) return { phase: 'Menstruation', color: 'period', icon: Droplets };
    if (currentDay <= 13) return { phase: 'Follicular', color: 'safe', icon: Moon };
    if (currentDay <= 16) return { phase: 'Ovulation', color: 'ovulation', icon: Heart };
    return { phase: 'Luteal', color: 'fertile', icon: TrendingUp };
  };
  
  const currentPhase = getCurrentPhase();
  const PhaseIcon = currentPhase.icon;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Good morning! 🌸</h1>
          <p className="text-muted-foreground">Track your cycle with confidence</p>
        </div>
        <Button size="icon" variant="outline">
          <Bell size={20} />
        </Button>
      </div>

      {/* Current Cycle Status */}
      <Card className="cycle-gradient text-primary-foreground">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <PhaseIcon size={24} />
            {currentPhase.phase} Phase
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-90">Cycle Day</span>
            <span className="text-2xl font-bold">{currentDay}</span>
          </div>
          <Progress value={cycleProgress} className="bg-primary-foreground/20" />
          <div className="flex justify-between text-sm opacity-90">
            <span>Day 1</span>
            <span>Day {cycleLength}</span>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="mx-auto mb-2 text-primary" size={24} />
            <p className="text-2xl font-bold text-foreground">{daysUntilPeriod}</p>
            <p className="text-sm text-muted-foreground">Days until period</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Heart className="mx-auto mb-2 text-fertile" size={24} />
            <p className="text-2xl font-bold text-foreground">2</p>
            <p className="text-sm text-muted-foreground">Fertile days left</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Predictions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Today's Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Fertility</span>
            <Badge variant="secondary" className="bg-fertile/20 text-fertile-foreground">
              High
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Conception Chance</span>
            <Badge variant="secondary" className="bg-ovulation/20 text-ovulation-foreground">
              Peak
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Energy Level</span>
            <Badge variant="secondary">
              Moderate
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-2">
              <Droplets size={20} />
              <span className="text-xs">Period Flow</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-2">
              <Heart size={20} />
              <span className="text-xs">Symptoms</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-2">
              <Moon size={20} />
              <span className="text-xs">Mood</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-2">
              <Plus size={20} />
              <span className="text-xs">Custom</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Educational Tip */}
      <Card className="bg-accent/50">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">💡 Daily Tip</h3>
          <p className="text-sm text-muted-foreground">
            During ovulation, your body temperature rises slightly. Track your basal body temperature for more accurate predictions!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}