import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";

export default function CommissionForm() {
  const { toast } = useToast();
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState([500]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const createCommission = useMutation({
    mutationFn: async (data: typeof formData & { projectType: string; budget: number }) => {
      return await apiRequest("POST", "/api/commissions", data);
    },
    onSuccess: () => {
      toast({
        title: "Commission Request Sent!",
        description: "Thank you! I'll review your request and get back to you soon.",
      });
      setFormData({ name: "", email: "", description: "" });
      setProjectType("");
      setBudget([500]);
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectType) {
      toast({
        title: "Project Type Required",
        description: "Please select a project type.",
        variant: "destructive",
      });
      return;
    }
    createCommission.mutate({
      ...formData,
      projectType,
      budget: budget[0],
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-4">
            Request a Commission
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's create something beautiful together
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  data-testid="input-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  data-testid="input-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="project-type">Project Type</Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger id="project-type" data-testid="select-project-type">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fabric">Fabric Design</SelectItem>
                  <SelectItem value="wallpaper">Wallpaper</SelectItem>
                  <SelectItem value="stationery">Stationery</SelectItem>
                  <SelectItem value="packaging">Product Packaging</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description</Label>
              <Textarea
                id="description"
                placeholder="Tell me about your vision, color preferences, style inspiration, and how you plan to use the pattern..."
                rows={6}
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                data-testid="input-description"
              />
            </div>

            <div className="space-y-3">
              <Label>Budget Range (USD)</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={budget}
                  onValueChange={setBudget}
                  min={200}
                  max={5000}
                  step={100}
                  className="flex-1"
                  data-testid="slider-budget"
                />
                <span className="text-sm font-medium min-w-[100px] text-right">
                  ${budget[0].toLocaleString()}
                </span>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={createCommission.isPending}
              data-testid="button-submit-commission"
            >
              {createCommission.isPending ? "Sending..." : "Let's Create Together"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
