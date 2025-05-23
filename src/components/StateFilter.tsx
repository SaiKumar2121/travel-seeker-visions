
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface StateFilterProps {
  states: string[];
  selectedState: string | null;
  onSelectState: (state: string | null) => void;
}

export const StateFilter = ({
  states,
  selectedState,
  onSelectState,
}: StateFilterProps) => {
  // Use "all" as the value for "All States" instead of an empty string
  const handleStateChange = (value: string) => {
    // If the value is "all", pass null to onSelectState to represent "All States"
    onSelectState(value === "all" ? null : value);
  };

  return (
    <div className="flex flex-col gap-2 mb-6">
      <h3 className="text-sm font-medium text-muted-foreground">
        Select a state to explore
      </h3>
      <div className="flex gap-2">
        <Select
          value={selectedState || "all"}
          onValueChange={handleStateChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All States" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All States</SelectItem>
            {states.map((state) => (
              <SelectItem key={state} value={state}>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{state}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {selectedState && (
          <Button 
            variant="outline" 
            onClick={() => onSelectState(null)}
            className="shrink-0"
          >
            Clear
          </Button>
        )}
      </div>
    </div>
  );
};
