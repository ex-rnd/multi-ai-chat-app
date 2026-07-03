import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <p>AI Chat App</p>
      <Button className="bg-amber-300" variant={"destructive"} size={"lg"}>Hello</Button>

    </div>
  );
}
