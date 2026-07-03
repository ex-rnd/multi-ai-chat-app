import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <p>AI Chat App</p>
      <ModeToggle />
    </div>
  );
}
