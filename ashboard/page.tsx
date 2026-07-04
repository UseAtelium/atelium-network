import AgentCard from "@/components/AgentCard";
import TaskCard from "@/components/TaskCard";

export default function Dashboard() {

  return (

    <main>

      <h1>Atelium Dashboard</h1>

      <AgentCard />

      <TaskCard tasks={845} />

    </main>

  );

}
