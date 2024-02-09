import CardLayout from "@/app/components/CardLayout";
import BmiForm from "@/app/components/BmiForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 lg:p-24">
      <h1 className="my-14 text-center text-3xl font-bold uppercase tracking-widest">
        BMI Calculator
      </h1>
      <CardLayout>
        <BmiForm />
      </CardLayout>
    </main>
  );
}
