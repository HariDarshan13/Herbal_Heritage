import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

interface TamilKeyboardProps {
  onSelect: (char: string) => void;
  onClose: () => void;
}

export const TamilKeyboard = ({ onSelect, onClose }: TamilKeyboardProps) => {
  const tamilChars = {
    vowels: ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'],
    consonants: [
      'க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம',
      'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன'
    ],
    special: ['ஃ', '்', 'ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ'],
    numbers: ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'],
    common: [' ', ',', '.', '!', '?', '-']
  };

  const handleCharClick = (char: string) => {
    onSelect(char);
  };

  return (
    <Card className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl mx-4 shadow-2xl">
      <div className="p-4 bg-herbal/5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg text-herbal">Tamil Keyboard</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-3">
          {/* Vowels */}
          <div>
            <p className="text-xs text-muted-foreground mb-1">Vowels (உயிர்)</p>
            <div className="flex flex-wrap gap-1">
              {tamilChars.vowels.map((char) => (
                <Button
                  key={char}
                  variant="outline"
                  size="sm"
                  onClick={() => handleCharClick(char)}
                  className="min-w-[40px] hover:bg-herbal hover:text-white"
                >
                  {char}
                </Button>
              ))}
            </div>
          </div>

          {/* Consonants */}
          <div>
            <p className="text-xs text-muted-foreground mb-1">Consonants (மெய்)</p>
            <div className="flex flex-wrap gap-1">
              {tamilChars.consonants.map((char) => (
                <Button
                  key={char}
                  variant="outline"
                  size="sm"
                  onClick={() => handleCharClick(char)}
                  className="min-w-[40px] hover:bg-herbal hover:text-white"
                >
                  {char}
                </Button>
              ))}
            </div>
          </div>

          {/* Special Characters */}
          <div>
            <p className="text-xs text-muted-foreground mb-1">Special (உயிர்மெய்)</p>
            <div className="flex flex-wrap gap-1">
              {tamilChars.special.map((char) => (
                <Button
                  key={char}
                  variant="outline"
                  size="sm"
                  onClick={() => handleCharClick(char)}
                  className="min-w-[40px] hover:bg-herbal hover:text-white"
                >
                  {char}
                </Button>
              ))}
            </div>
          </div>

          {/* Numbers & Common */}
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-1">Numbers</p>
              <div className="flex flex-wrap gap-1">
                {tamilChars.numbers.map((char) => (
                  <Button
                    key={char}
                    variant="outline"
                    size="sm"
                    onClick={() => handleCharClick(char)}
                    className="min-w-[40px] hover:bg-herbal hover:text-white"
                  >
                    {char}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-1">Common</p>
              <div className="flex flex-wrap gap-1">
                {tamilChars.common.map((char, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    onClick={() => handleCharClick(char)}
                    className="min-w-[40px] hover:bg-herbal hover:text-white"
                  >
                    {char === ' ' ? '␣' : char}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
