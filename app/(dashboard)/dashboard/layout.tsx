import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trishul - Dashboard",
  description: "Get all the insights at a single place",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        {/* <Sidebar /> */}
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}
