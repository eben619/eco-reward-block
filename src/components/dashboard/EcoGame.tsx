import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type WasteItem = {
  id: number;
  name: string;
  type: "recyclable" | "organic" | "landfill";
  image: string;
};

const wasteItems: WasteItem[] = [
  { id: 1, name: "Plastic Bottle", type: "recyclable", image: "🍾" },
  { id: 2, name: "Banana Peel", type: "organic", image: "🍌" },
  { id: 3, name: "Paper", type: "recyclable", image: "📄" },
  { id: 4, name: "Food Waste", type: "organic", image: "🥗" },
  { id: 5, name: "Glass Jar", type: "recyclable", image: "🏺" },
  { id: 6, name: "Styrofoam", type: "landfill", image: "📦" },
];

const EcoGame = () => {
  const { toast } = useToast();
  const [score, setScore] = useState(0);
  const [currentItem, setCurrentItem] = useState<WasteItem | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [gameStarted, timeLeft]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(60);
    pickRandomItem();
  };

  const endGame = () => {
    setGameStarted(false);
    toast({
      title: "Game Over!",
      description: `Final score: ${score} points`,
    });
  };

  const pickRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * wasteItems.length);
    setCurrentItem(wasteItems[randomIndex]);
  };

  const handleAnswer = (answer: "recyclable" | "organic" | "landfill") => {
    if (!currentItem) return;

    if (answer === currentItem.type) {
      setScore((prev) => prev + 10);
      toast({
        title: "Correct!",
        description: `${currentItem.name} goes in the ${currentItem.type} bin`,
        variant: "default",
      });
    } else {
      toast({
        title: "Wrong!",
        description: `${currentItem.name} should go in the ${currentItem.type} bin`,
        variant: "destructive",
      });
    }

    pickRandomItem();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-eco-primary">EcoSort Challenge</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {!gameStarted ? (
          <div className="text-center">
            <p className="mb-4">Sort waste items into the correct bins and earn points!</p>
            <Button onClick={startGame} className="bg-eco-primary hover:bg-eco-dark">
              Start Game
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">Score: {score}</div>
              <div className="text-lg font-semibold">Time: {timeLeft}s</div>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">{currentItem?.image}</div>
              <div className="text-xl font-semibold mb-6">{currentItem?.name}</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Button
                onClick={() => handleAnswer("recyclable")}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Recyclable
              </Button>
              <Button
                onClick={() => handleAnswer("organic")}
                className="bg-green-500 hover:bg-green-600"
              >
                Organic
              </Button>
              <Button
                onClick={() => handleAnswer("landfill")}
                className="bg-gray-500 hover:bg-gray-600"
              >
                Landfill
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EcoGame;